// Function to fetch and display a random HTML entry
        async function displayRandomEntry() {
            try {
                // Fetch the JSON data from the file
                const response = await fetch('data.json');
                const data = await response.json();

                // Generate a random index to select a random entry
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomEntry = data[randomIndex];

                // Display the HTML content
                const contentContainer = document.getElementById('content-container');
                contentContainer.innerHTML = randomEntry.htmlContent;
            } catch (error) {
                console.error('Error fetching or displaying data:', error);
            }
        }

        // Add an event listener to the button to trigger the display
        const randomButton = document.getElementById('random-button');
        randomButton.addEventListener('click', displayRandomEntry);