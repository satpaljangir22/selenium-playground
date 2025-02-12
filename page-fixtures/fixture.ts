import { test as base, Page } from "@playwright/test";
import { AjaxFormSubmit } from "./ajax-form-submit";
import { BootStrapList } from "./bootstrap-list-box";

type Fixtures = {
  ajaxFormSubmit: AjaxFormSubmit;
  bootstrapList: BootStrapList;
};

export const test = base.extend<Fixtures>({
  ajaxFormSubmit: async ({ page }, use) => {
    const ajaxFormSubmit = new AjaxFormSubmit(page);
    await use(ajaxFormSubmit);
  },
  bootstrapList: async ({ page }, use) => {
    const bootstrapList = new BootStrapList(page);
    await use(bootstrapList);
  },
});

export { expect } from "@playwright/test";
