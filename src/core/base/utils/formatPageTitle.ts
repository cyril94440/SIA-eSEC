import { PRODUCT_NAME } from "@@core/base";

export function formatPageTitle(title: string): string {
  return `${title} - ${PRODUCT_NAME}`;
}
