const fs = require('fs');
const axios = require('axios');

const url = 'https://artofproblemsolving.com/wiki/index.php/2017_AMC_10A_Problems'; // Replace with the URL of the website
const outputPath = 'fetched_AMC_HTML/2017_AMC_10A_Problems.html'; // Specify the output file path

axios.get(url)
    .then(response => {
        const htmlContent = response.data;
        fs.writeFileSync(outputPath, htmlContent, 'utf-8');
        console.log('HTML content saved to', outputPath);
    })
    .catch(error => {
        console.error('Error fetching HTML content:', error.message);
    });
