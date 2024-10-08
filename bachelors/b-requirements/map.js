document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("requirements");

  // Function to generate HTML for a page
  function generatePageHTML(pagesReq) {
    return `
<div class="course-details">

  </hr>
  <ul class="mb-20">
    ${pagesReq.request.map((item) => `<li>${item}</li>`).join("")}
  </ul>

</div>`;
  }

  // Function to get query parameter by name
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the page index from the query parameter
  const pageIndex = getQueryParam("page") || 0;

  // Generate HTML for the selected page
  contentDiv.innerHTML = generatePageHTML(pagesReq[pageIndex]);
});
