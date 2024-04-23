import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250, // slow down by 250ms
      // timeout: 0 
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

    test('An event element is collapsed by default', async () => {
      const eventDetails = await page.$('.event .details');
      expect(eventDetails).toBeNull();
      });     

      test('User can expand an event to see its details', async () => {
        await page.click('.event .details-button');   
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeDefined();      
      });

      test('User can collapse an event to hide details', async () => {
        await page.click('.event .details-button');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
      });
});

describe('Filter events by city', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms
      timeout: 0 
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#event-list');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('When user hasn’t searched for a city, show upcoming events from all cities.', async () => {
    const eventList = await page.$$('#event-list li');
    expect(eventList.length).toEqual(32);
  });

  test('User should see a list of suggestions when they search for a city.', async () => {
    await page.type('.city', 'Berlin');

    await page.waitForSelector('.suggestions');

    const suggestionList = await page.$$('.suggestions li');
    expect(suggestionList.length).toBeGreaterThan(0);
  });

  test('User can select a city from the suggested list.', async () => {
    // await page.type('.city', 'Berlin');

    await page.waitForSelector('.suggestions');

    await page.click('.suggestions li:first-child');

    const cityInputValue = await page.$eval('.city', input => input.value);
    console.log('Current city input value:', cityInputValue);
    expect(cityInputValue).toBe('Berlin, Germany');

    await page.waitForSelector('#event-list');

    const eventList = await page.$$('#event-list li');
    expect(eventList.length).toBeGreaterThan(0);
  });
})