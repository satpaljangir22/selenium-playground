import { Locator, Page } from "@playwright/test";
import { MainPage } from "./main-page";

export class BootStrapList extends MainPage {
  private rightArrow: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.rightArrow = this.page.getByRole("button", { name: ">" }).nth(1);
    //this.listItem = this.page.getByRole("listitem", { name: "Danville" });
  }
  private async navigateToBootStrapList() {
    await this.GoToBaseUrl();
    await this.page.getByRole("link", { name: "Bootstrap List Box" }).click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async moveListItem(item: string) {
    await this.navigateToBootStrapList();
    await this.page.getByRole("listitem").filter({ hasText: item }).click();
    await this.rightArrow.click();
  }
}
