const axios = require('axios');
const cheerio = require('cheerio');

const url = 'YOUR_URL_HERE'; // Replace with the URL of the webpage to scrape

axios.get(url)
  .then(response => {
    const $ = cheerio.load(response.data);
    const paragraphs = [];

    $('p').each((index, element) => {
      const paragraphContent = $(element).text().trim();
      paragraphs.push(paragraphContent);
    });

    console.log(paragraphs);
  })
  .catch(error => {
    console.error('Error:', error);
  });
