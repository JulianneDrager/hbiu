document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");

  // Function to generate HTML for a page
  function generatePageHTML(pageData) {
    return `

<!-- department-single -->
<div class="department-single-area py-100">
    <div class="container">
        <div class="department-single-wrapper">
            <div class="row">
                <div class="col-xl-4 col-lg-4">
                    <div class="department-sidebar">
                        <div class="widget category">
                            <h4 class="widget-title">${pageData.title}</h4>
                            <div class="category-list">
                                <a
                                    href="../../../e-departments/e-main-health-life-science/e-main-health-life-science.html"><i
                                        class="far fa-long-arrow-right"></i>Health and Life Sciences</a>
                                <a href="../../../e-departments/e-main-human-social-sci/e-main-human-social-sci.html"><i
                                        class="far fa-long-arrow-right"></i>Humanities and Social Sciences</a>
                                <a href="../../../e-departments/e-main-art-and-design/e-main-art-and-design.html">
                                    <i class="far fa-long-arrow-right"></i>
                                    Arts, Performance, and Design</a>

                                <a href="../../../e-departments/e-main-business-law-economics/e-main-business-law-economics.html"><i class="far fa-long-arrow-right"></i>Business, Law, and Economics</a>
                                <a href="../../../e-departments/e-stem/e-stem.html"><i class="far fa-long-arrow-right"></i>STEM (Science, Technology,
                                    Engineering, and Mathematics)</a>
                                                                <a href="../../../e-departments/e-main-global-comm-studies/e-main-global-comm-studies.html"><i class="far fa-long-arrow-right"></i>Global and Communication Studies</a>

                                <a href="../../../e-departments/e-main-education-pedagogy/e-main-education-pedagogy.html"><i class="far fa-long-arrow-right"></i>Education and Pedagogy</a>


                            </div>
                        </div>
                        <div class="widget department-download">
                            <h4 class="widget-title">Download</h4>
                            <a href="#"><i class="far fa-file-pdf"></i> Download Brochure</a>
                            <a href="#"><i class="far fa-file-pdf"></i> Department Details</a>
                            <a href="#"><i class="far fa-file-pdf"></i> 860-830-9778</a>
                            <a href="#"><i class="far fa-file-alt"></i> info@hbiu.org</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-8">
                    <div class="department-details">
                        <div class="department-details-img mb-30">
                            <img src="${pageData.imgSrc}" alt="${pageData.imgAlt}" />
                        </div>
                        <div class="department-details">
                            <p class="mb-3">
                                ${pageData.description1}
                            </p>

                            <p class="mb-3">
                                ${pageData.description2}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- department-single end-->

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
