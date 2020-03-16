/* global Promise */

const assert = require('assert');
const webdriver = require('selenium-webdriver');
const { Builder, By } = webdriver;
const { start, stop } = require('./server.js');

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1500));

let driver;

describe('client', () => {

  before( async() => {
    start();
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:1971');
  });

  it('the title is MikeMail', async() => {
    const title = await driver.findElement(By.css('h1'));
    await sleep();
    assert(title, 'MikeMail');
  });

  it('there is a Fetch Mail button', async() => {
    const button = await driver.findElement(By.css('#fetch'));
    await sleep();
    assert(button.getText(), 'Fetch Mail');
  });

  after(async() => {
    await driver.quit();
    stop();
  });
})
