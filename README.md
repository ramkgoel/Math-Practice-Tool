# Math-Practice-Tool
Webpage which scrapes contest math problems from online sources (e.g. AoPS), and allows students to practice problems. Targets problems where students are weak. 

Workflow:

1. Write script to start with AoPS URL links and convert to HTML files. Put all these HTML files in a folder in the GitHub. (fetchHTML.js)
2. Write script that starts with HTML files, parses the HTML file for the 25 problems, and puts them all into a JSON file stored at a higher level in the repo. Each problem in the JSON file has the problem id, which subject, and the problem HTML. 
3. Write HTML and script which when you click "next question", it displays the HTML for the new problem, by extracting from the JSON file. 