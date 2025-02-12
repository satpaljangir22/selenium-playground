import { test } from "../page-fixtures/fixture";

test("Form submission", async ({ ajaxFormSubmit }) => {
  await ajaxFormSubmit.submitValues("satpal", "this is playwright test");
});

test("Move List item", async ({ bootstrapList }) => {
  await bootstrapList.moveListItem("Danville");
});
