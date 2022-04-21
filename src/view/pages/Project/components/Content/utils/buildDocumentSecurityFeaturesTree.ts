import { sort } from "fast-sort";
import * as api from "@@api/common";

export interface DocumentSecurityFeatureTree {
  categoryNodes: DocumentSecurityFeatureCategoryNode[];
}

export interface DocumentSecurityFeatureCategoryNode {
  item: api.SFCategory;
  locationNodes: DocumentSecurityFeatureLocationNode[];
}

export interface DocumentSecurityFeatureLocationNode {
  item: api.SFLocation;
  features: api.SecurityFeature[];
}

export function buildDocumentSecurityFeatureTree(features: api.SecurityFeature[]): DocumentSecurityFeatureTree {
  const categoryMap = new Map<api.SFCategory, Map<api.SFLocation, api.SecurityFeature[]>>();

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
