import { sort } from "fast-sort";
import * as rpc from "@@rpc/shared";

export interface DocumentSecurityFeatureTree {
  categoryNodes: DocumentSecurityFeatureCategoryNode[];
}

export interface DocumentSecurityFeatureCategoryNode {
  item: rpc.SFCategory;
  locationNodes: DocumentSecurityFeatureLocationNode[];
}

export interface DocumentSecurityFeatureLocationNode {
  item: rpc.SFLocation;
  features: rpc.SecurityFeature[];
}

export function buildDocumentSecurityFeatureTree(features: rpc.SecurityFeature[]): DocumentSecurityFeatureTree {
  const categoryMap = new Map<rpc.SFCategory, Map<rpc.SFLocation, rpc.SecurityFeature[]>>();

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
