import { test, expect } from '@playwright/test';

test("Open TestAutomation Website and Handling Alert",async({page})=>{
    
    await page.goto("https://demo.guru99.com/test/guru99home/")

    const allframedetails = await page.frames()

    console.log(allframedetails.length)


    const imageFrame = await page.frame("a077aa5e") //User will go inside into the frame 

    await imageFrame.locator("//img[@src='Jmeter720.png']").click()

    await page.pause()






})
