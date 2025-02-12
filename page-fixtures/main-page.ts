import { Page } from "@playwright/test";

export class MainPage {
  protected page: Page;
  private baseUrl = "https://www.lambdatest.com/selenium-playground/";
  constructor(page: Page) {
    this.page = page;
  }
  protected async GoToBaseUrl() {
    await this.page.goto(this.baseUrl, { waitUntil: "domcontentloaded" });
  }
}
