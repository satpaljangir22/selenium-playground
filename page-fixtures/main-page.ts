import { Page } from "@playwright/test";

export class MainPage {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  protected async GoToBaseUrl() {
    await this.page.goto("/selenium-playground/", {
      waitUntil: "domcontentloaded",
    });
  }
}
