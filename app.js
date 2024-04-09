const axios = require('axios');
const cheerio = require('cheerio');

// URL of Wikipedia main page
const url = 'https://en.wikipedia.org/wiki/Main_Page';

// Function to fetch the webpage and scrape data
async function scrape() {
  try {
    const response = await axios.get(url);
    const html = response.data;

    // Load HTML into Cheerio
    const $ = cheerio.load(html);

    // Extract titles of featured articles
    const titles = [];
    $('.mp-h2').each((index, element) => {
      const title = $(element).next().find('a').first().text().trim();
      titles.push(title);
    });

    // Log the titles
    console.log('Titles of featured articles on Wikipedia main page:');
    console.log(titles);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the scrape function
scrape();
