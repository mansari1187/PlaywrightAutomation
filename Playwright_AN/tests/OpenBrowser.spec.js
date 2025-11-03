import { test, expect } from '@playwright/test';

test("Open Google.com and click Gmail Button",async({page})=>{

    await page.goto("https://www.amazon.in")
    //await page.getByText("Gmail").click()

    await page.waitForTimeout(4000)

   // await page.locator("textarea[title='Search']").fill("Testing")

    // await page.locator("input[placeholder='Search Amazon.in']").fill("Mobile")
    // await page.locator("input[value='Go']").click()
    await page.locator("//a[contains(text(),'Deals')]").click()

    await page.pause() // debugging 

})

