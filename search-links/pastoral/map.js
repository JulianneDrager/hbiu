document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  function generatePageHTML(pageData) {
    return `
    <h2 class="mt-4">Pastoral Courses</h2>
    <br/><br/>
      ${pageData.links
        .map((link) => {
          return `
          <div style="text-align:left; border-bottom: 1px solid #a2a0a0; padding-bottom: .5rem">
              <div>
                <a href="${link.href}"><b>${link.textTitle}</b></a>
            <br/>
                ${link.text}
              </div>
          </div>
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
