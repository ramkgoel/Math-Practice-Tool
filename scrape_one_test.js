const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://artofproblemsolving.com/wiki/index.php/2010_AMC_10A_Problems'; // Replace with the URL of the webpage to scrape

axios.get(url)
  .then(response => {
    const $ = cheerio.load(response.data);
    const paragraphs = [];

    $('p').each((index, element) => {
      const paragraphContent = $(element).html();
      paragraphs.push(paragraphContent);
    });

    console.log(paragraphs);
  })
  .catch(error => {
    console.error('Error:', error);
  });
