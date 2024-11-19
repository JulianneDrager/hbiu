document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  function generatePageHTML(pageData) {
    return `
<!-- team single -->
<div class="team-single pt-120 pb-20">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        ${pageData.items.map((item) => {
          return `
        <div class="team-single-img">
          <img src="${item.imgSrc}" alt="${item.imgAlt}" />
        </div>
        `;
        })}
      </div>
      <div class="col-md-8">
        <div class="team-details">
          ${pageData.items.map((item) => {
            return `
          <h3>${item.name}</h3>
          <strong>${item.title}</strong>`;
          })}
          <p class="mt-3">
            ${pageData.description}
          </p>
          ${pageData.items.map((item) => {
            return `
          <div class="team-details-info">
            <ul>

              <li>
                <a href="#"><i class="far fa-envelope"></i> ${item.email}</a>
              </li>
              <li>
                <a href="#"><i class="far fa-phone"></i> ${item.phone}</a>
              </li>
            </ul>
          </div>
          `;
          })}
          <div class="team-details-social">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- team single end -->

<!-- biography & skill -->
<div class="biography-skil pb-120">
  <div class="container">
    <div class="row">
           ${pageData.items.map((item) => {
             return `
      <div class="col-md-6">
        <div class="biography">
          <p class="mt-3"> ${item.biography}</p>
          <p class="mb-10">
            ${item.skills}
          </p>
        </div>
      </div>
      `;
           })}
      <div class="col-md-6">
        <div class="team-skill">
          <h4 class="mb-3">Professional Skills</h4>
          <div class="skills-section">
            <div class="progress-box">
              <h5>Communication <span class="pull-right">85%</span></h5>
              <div class="progress" data-value="85">
                <div class="progress-bar" role="progressbar"></div>
              </div>
            </div>
            <div class="progress-box">
              <h5>Relationship <span class="pull-right">65%</span></h5>
              <div class="progress" data-value="65">
                <div class="progress-bar" role="progressbar"></div>
              </div>
            </div>
            <div class="progress-box">
              <h5>Creative Work <span class="pull-right">75%</span></h5>
              <div class="progress" data-value="75">
                <div class="progress-bar" role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- biography & skill end -->

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
