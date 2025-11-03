import { test, expect } from '@playwright/test';

test("Open TestAutomation Website and SelectCountry",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("#country").selectOption({label:'Australia'})

await page.pause()


const countrylist= await page.locator("#country").textContent()

console.log(countrylist)

await expect(countrylist.includes('Germany')).toBeTruthy()

const countrydropdowncount = await page.$$("#country option")

console.log(countrydropdowncount.length)



})