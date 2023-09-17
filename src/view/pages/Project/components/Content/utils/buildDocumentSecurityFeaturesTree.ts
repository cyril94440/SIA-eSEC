import { sort } from "fast-sort";
import { Rpc } from "@@core/rpc/shared";

export interface DocumentSecurityFeatureTree {
  categoryNodes: DocumentSecurityFeatureCategoryNode[];
}

export interface DocumentSecurityFeatureCategoryNode {
  item: Rpc.SFCategory;
  locationNodes: DocumentSecurityFeatureLocationNode[];
}

export interface DocumentSecurityFeatureLocationNode {
  item: Rpc.SFLocation;
  features: Rpc.SecurityFeature[];
}

export function buildDocumentSecurityFeatureTree(features: Rpc.SecurityFeature[]): DocumentSecurityFeatureTree {
  const categoryMap = new Map<Rpc.SFCategory, Map<Rpc.SFLocation, Rpc.SecurityFeature[]>>();

  features.forEach((feature) => {
    let locationMap = categoryMap.get(feature.category);

    if (!locationMap) {
      locationMap = new Map();
      categoryMap.set(feature.category, locationMap);
    }

    let locationFeatures = locationMap.get(feature.location);

    if (!locationFeatures) {
      locationFeatures = [];
      locationMap.set(feature.location, locationFeatures);
    }

    locationFeatures.push(feature);
  });

  const categoryNodes = sort(Array.from(categoryMap.entries()))
    .asc(([item]) => item)
    .map(([item, locationMap]) => {
      const locationNodes = sort(Array.from(locationMap.entries()))
        .asc(([item]) => item)
        .map(([item, features]) => ({ item, features }));
      return {
        item,
        locationNodes,
      };
    });

  return {
    categoryNodes,
  };
}
