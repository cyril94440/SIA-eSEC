import { PRODUCT_NAME } from "@@consts";

export function formatPageTitle(title: string): string {
  return `${title} - ${PRODUCT_NAME}`;
}
