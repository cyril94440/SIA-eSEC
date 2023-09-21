import { sort } from "fast-sort";
import { ret } from "@@core/base";
import { Rpc } from "@@core/rpc/shared";
import { ProjectSpecs } from "../types";
import { getDocumentSecurityFeatures } from "./getDocumentSecurityFeatures";

export interface DocumentIcaoStatus {
  completed: boolean;
  basic: {
    completed: boolean;
    categories: DocumentIcaoStatusCategory[];
  };
  additional: {
    completed: boolean;
    categories: DocumentIcaoStatusCategory[];
  };
}

export interface DocumentIcaoStatusCategory {
  item: Rpc.IcaoSecurityFeatureCategory;
  completed: boolean;
  subcategories: DocumentIcaoStatusSubcategory[];
}

export interface DocumentIcaoStatusSubcategory {
  item: Rpc.IcaoSecurityFeatureSubcategory;
  completed: boolean;
  features: DocumentIcaoStatusFeature[];
}

export interface DocumentIcaoStatusFeature {
  item: Rpc.IcaoSecurityFeature;
  completed: boolean;
  relatedFeatures: DocumentIcaoStatusRelatedFeature[];
}

export interface DocumentIcaoStatusRelatedFeature {
  item: Rpc.SecurityFeature;
  completed: boolean;
}

export function getDocumentIcaoStatus(
  specs: ProjectSpecs,
  allSecurityFeatures: Rpc.SecurityFeature[],
  allIcaoSecurityFeatures: Rpc.IcaoSecurityFeature[],
  allIcaoSecurityFeatureCategories: Rpc.IcaoSecurityFeatureCategory[],
  allIcaoSecurityFeatureSubcategories: Rpc.IcaoSecurityFeatureSubcategory[]
): DocumentIcaoStatus {
  const allIcaoSecurityFeaturesBySubcategory = ret(() => {
    const map = new Map<string, Rpc.IcaoSecurityFeature[]>();

    for (const f of allIcaoSecurityFeatures) {
      let arr = map.get(f.subcategoryCode);

      if (!arr) {
        arr = [];
        map.set(f.subcategoryCode, arr);
      }

      arr.push(f);
    }

    return map;
  });

  const documentSecurityFeatures = new Map(
    getDocumentSecurityFeatures(specs, allSecurityFeatures).map((f) => [f.id, f])
  );

  const documentSelectedSecurityFeatureIds = new Set(specs.document.securityFeatureIds);

  const getCategories = (type: Rpc.IcaoSecurityFeatureType): DocumentIcaoStatusCategory[] => {
    return sort(allIcaoSecurityFeatureCategories)
      .asc((c) => c.code)
      .map((c) => {
        return {
          item: c,
          completed: false,
          subcategories: getSubcategories(c, type),
        };
      })
      .filter((c) => c.subcategories.length !== 0)
      .map((c) => {
        return {
          ...c,
          completed: c.subcategories.every((sc) => sc.completed),
        };
      });
  };

  const getSubcategories = (
    category: Rpc.IcaoSecurityFeatureCategory,
    type: Rpc.IcaoSecurityFeatureType
  ): DocumentIcaoStatusSubcategory[] => {
    return sort(allIcaoSecurityFeatureSubcategories)
      .asc((sc) => sc.code)
      .filter((sc) => sc.categoryCode === category.code)
      .map((sc) => {
        return {
          item: sc,
          completed: false,
          features: getFeatures(sc, type),
        };
      })
      .filter((sc) => sc.features.length !== 0)
      .map((sc) => {
        return {
          ...sc,
          completed: sc.features.every((f) => f.completed),
        };
      });
  };

  const getFeatures = (
    subcategory: Rpc.IcaoSecurityFeatureSubcategory,
    type: Rpc.IcaoSecurityFeatureType
  ): DocumentIcaoStatusFeature[] => {
    return sort(allIcaoSecurityFeaturesBySubcategory.get(subcategory.code)!)
      .asc((f) => f.code)
      .filter((f) => f.type === type)
      .map((f) => {
        return {
          item: f,
          completed: false,
          relatedFeatures: getRelatedFeatures(f),
        };
      })
      .filter((f) => f.relatedFeatures.length !== 0)
      .map((f) => {
        return {
          ...f,
          completed: f.relatedFeatures.some((rf) => rf.completed),
        };
      });
  };

  const getRelatedFeatures = (feature: Rpc.IcaoSecurityFeature): DocumentIcaoStatusRelatedFeature[] => {
    const relatedDocumentSecurityFeatures = feature.relatedEsecSecurityFeatureIds
      .map((id) => documentSecurityFeatures.get(id))
      .filter((f) => !!f) as Rpc.SecurityFeature[];

    return sort(relatedDocumentSecurityFeatures)
      .asc((f) => f!.title)
      .map((f) => {
        return {
          item: f,
          completed: documentSelectedSecurityFeatureIds.has(f.id),
        };
      });
  };

  const result = {
    completed: false,
    basic: {
      completed: false,
      categories: getCategories(Rpc.IcaoSecurityFeatureType.Basic),
    },
    additional: {
      completed: false,
      categories: getCategories(Rpc.IcaoSecurityFeatureType.Additional),
    },
  };

  result.basic.completed = result.basic.categories.every((c) => c.completed);
  result.additional.completed = result.additional.categories.every((c) => c.completed);
  result.completed = result.basic.completed;

  return result;
}
