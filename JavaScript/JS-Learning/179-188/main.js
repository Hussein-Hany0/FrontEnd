// Function to fetch and display the first 5 articles
function displayFirstFiveArticles() {
  fetch('me.json') // Change 'articles.json' to 'me.json'
    .then(response => response.json())
    .then(articles => {
      // Create a container div
      const containerDiv = document.createElement('div');
      containerDiv.id = 'articles-container';

      // Take the first 5 articles
      const firstFiveArticles = articles.slice(0, 5);

      // Create and append HTML elements for each article
      firstFiveArticles.forEach((article, index) => {
        const articleDiv = document.createElement('div');
        const heading = document.createElement('h3');
        const paragraph = document.createElement('p');

        heading.textContent = `Article number ${index + 1}`;
        paragraph.textContent = `Article description number ${index + 1}`;

        articleDiv.appendChild(heading);
        articleDiv.appendChild(paragraph);
        containerDiv.appendChild(articleDiv);
      });

      // Append the container div to the body
      document.body.appendChild(containerDiv);
    })
    .catch(error => console.error('Error fetching articles:', error));
}

// Call the function to display the first 5 articles
displayFirstFiveArticles();