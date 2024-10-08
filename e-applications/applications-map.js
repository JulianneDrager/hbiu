document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  function generatePageHTML(pageData) {
    return `
     <h2 class="mt-4">Student Applications</h2>
      ${pageData.links
        .map((link) => {
          return `
          <p>
            <a class="course-bottom" href="${link.href}">${link.text}</a>
          </p>
        `;
        })
        .join("")}

    `;
  }

  // Function to get query parameter by name
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the page index from the query parameter
  const pageIndex = getQueryParam("page") || 0;

  // Generate HTML for the selected page
  contentDiv.innerHTML = generatePageHTML(pageData[pageIndex]);
});
