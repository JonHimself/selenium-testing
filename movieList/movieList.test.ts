import { Builder, Capabilities, By } from "selenium-webdriver"
import { testEnvironment } from "../google/jest.config"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


describe('Full Movie Testing', () => {
test('I can add a movie to the page', async () => {
    await driver.findElement(By.xpath('/html/body/main/section/form/input')).sendKeys('Lord of the Rings')
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/main/section/form/button')).click()
    await driver.sleep(1000)
})
test('I can cross out and delete a movie from the page', async () => {
    await driver.findElement(By.xpath('/html/body/main/ul/li/span')).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/main/ul/li/button')).click()
    await driver.sleep(1000)

})
test('I can see a message after deleting a movie with my movie name', async () => {
    await driver.findElement(By.xpath('//*[@id="message"][contains (text(), "Lord of the Rings deleted!")]'))

})

})
