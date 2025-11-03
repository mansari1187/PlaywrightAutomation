import { test, expect } from '@playwright/test';
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))

test("Open TestAutomation Website and Handling Alert",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

await page.on('dialog',async dialog =>{

    await page.waitForTimeout(4000)
    expect(dialog.message()).toContain(testdata.alertboxtext)

    await dialog.accept() //it will click on ok button

    //await dialog.dismiss()//it will click on cancel button

})

console.log(testdata.alertboxtext)

await page.locator("#alertBtn").click(); //Pop will open





})

// test("Open TestAutomation Website and Handling Dismiss Alert",async({page})=>{
// await page.goto("https://testautomationpractice.blogspot.com/")

// await page.on('dialog',async dialog =>{

//     await page.waitForTimeout(4000)
//     expect(dialog.message()).toContain("I am an alert box!")

//     await dialog.accept() //it will click on ok button

//     //await dialog.dismiss()//it will click on cancel button

// })



// await page.locator("#alertBtn").click(); //Pop will open




// })