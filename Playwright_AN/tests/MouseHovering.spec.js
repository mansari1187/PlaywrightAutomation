import { test, expect } from '@playwright/test';

test("Open Google.com and click Gmail Button",async({page})=>{
await page.goto("https://amazon.in")

await page.locator("//span[contains(text(),'Account & Lists')]").hover()

await page.locator("//span[text()='Your Account']").click()

await page.pause();





})