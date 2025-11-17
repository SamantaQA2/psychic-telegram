import { test, expect } from "@playwright/test";

test("User Login ,Add Products then Logout Successfully", async ({ page }) => {
await page.goto("https://www.saucedemo.com/");
await page.locator("#user-name").fill("problem_user");
await page.waitForTimeout(2000);
await page.locator("#password").fill("secret_sauce");
await page.waitForTimeout(2000);
await page.click("#login-button");
await page.waitForTimeout(2000);

const productName = await page.locator(".inventory_item_name").nth(4).textContent();
await page.locator("button.btn_inventory").nth(4).click();
await page.waitForTimeout(2000);
await page.click("#shopping_cart_container");
await page.waitForTimeout(2000);
const cartProductName = await page.locator(".inventory_item_name").textContent();
expect(cartProductName.trim()).toBe(productName.trim());
console.log(productName +"Product added to cart successfully");
await page.waitForTimeout(2000);

await page.click("#react-burger-menu-btn");
await page.waitForTimeout(2000);
await page.click("#logout_sidebar_link");
await page.waitForTimeout(2000);
});
