// JavaScript code goes here
function extractAndConvertToJson(htmlContent) {
  const jsonData = [];

  // Create a temporary element to parse the HTML content
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;

  // Find all h2 elements
  const headings = tempDiv.querySelectorAll('h2');

  headings.forEach((heading) => {
      const group = {
          title: heading.innerHTML, // Capture the HTML content
          subject: 'A',
          paragraphs: []
      };

      // Find adjacent p elements until the next h2
      let nextElement = heading.nextElementSibling;
      while (nextElement && nextElement.tagName !== 'H2') {
          if (nextElement.tagName === 'P') {
              // Extract LaTeX content using a regular expression
              const latexContent = nextElement.innerHTML.replace(/<img[^>]*class="latex"[^>]*alt="([^"]+)"[^>]*>/g, '$1');
              group.paragraphs.push(latexContent);
          }
          nextElement = nextElement.nextElementSibling;
      }

      jsonData.push(group);
  });

  // Convert to JSON
  const jsonContent = JSON.stringify(jsonData, null, 2);

  // Create a Blob with the JSON data
  const blob = new Blob([jsonContent], { type: 'application/json' });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a link for downloading the JSON file
  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = 'output.json';
  downloadLink.textContent = 'Download JSON';

  // Append the link to the document
  document.body.appendChild(downloadLink);
}

// Replace 'https://example.com/your-html-file.html' with the actual URL
const htmlUrl = 'https://ramkgoel.github.io/Math-Practice-Tool/fetched_AMC_HTML/2017_AMC_10A_Problems.html';

// Make an HTTP request to fetch the HTML content
fetch(htmlUrl)
  .then(response => response.text())
  .then(htmlContent => {
      // Call the function to parse the HTML content
      extractAndConvertToJson(htmlContent);
  })
  .catch(error => {
      console.error('Error fetching HTML content:', error);
  });
