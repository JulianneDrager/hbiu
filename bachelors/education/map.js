document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");

  // Function to generate HTML for a page
  function generatePageHTML(pageData) {
    return `
<div class="course-single-area py-120">
  <div class="container">
    <div class="course-single-wrapper">
      <div class="row">
        <div class="col-xl-8 col-lg-8">
          <div class="course-details">

            <img style="width:100%" src="${pageData.imageUrl}" alt="thumb">

            <br /><br />
            <h3>${pageData.title}</h3>

            <hr>

            <ul class="mb-20">
              ${pageData.description
                .slice(0, 1) // Get the first 8 items
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Educational Foundations</strong>

            <ul class="mb-20">
              ${pageData.description
                .slice(2, 3) // Get the first 8 items
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Curriculum Development</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(4, 5) // Get the first 8 items
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Teaching Methods</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(6, 7) // Get the first 8 items
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Field Experience</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(8, 9) // Get the first 8 items
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Specializations</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(10, 11) // Get the first 8 items
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Educational Technology</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(12, 13) // Get the first 8 items
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Diversity in Ministry</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(14, 15) // Get the first 8 items
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Professional Ethics</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(16, 17) // Get the first 8 items

                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Licensing and Certification</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(18, 19) // Get the first 8 items
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Career Opportunities</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(20, 21) // Get the first 8 items
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <strong>Graduate Studies</strong>
            <ul class="mb-20">
              ${pageData.description
                .slice(22, 23) // Get the first 8 items
                .map((item) => `<li>${item}</li>`)
                .join("")}
            </ul>

            <br />

            <hr>
            <!-- Display course outline in a structured format -->
            <ul>
              ${pageData.courseOutline
                .slice(0, 17) // Get the first 8 items
                .map(
                  (item) =>
                    `<li style="list-style-type: disc" class="ms-3">${item}</li>`
                )
                .join("")}
            </ul>

            <br />

            <strong>Total Major Credits</strong>

            <ul>
              ${pageData.courseOutline
                .slice(17, 23) // Get the first 8 items
                .map(
                  (item) =>
                    `<li style="list-style-type: disc" class="ms-3">${item}</li>`
                )
                .join("")}
            </ul>

            <br />

            <ul>
              ${pageData.courseOutline
                .slice(23, 30) // Get the first 8 items
                .map(
                  (item) =>
                    `<li style="list-style-type: disc" class="ms-3">${item}</li>`
                )
                .join("")}
            </ul>

            <br />
            <hr />


          </div>
        </div>
        <div class="col-xl-4 col-lg-4">
          <div class="course-single-sidebar">
            <div class="widget">
              <strong class="widget-title">Course Info</strong>
              <div class="mb-30"></div>
              <div class="course-single-info">
                <div class="single-info author">
                  <div class="author-img">
                    <img src="${pageData.professorImg}" alt="#">
                  </div>
                  <div class="single-info-content">
                    <strong>Teacher</strong>
                    <span>${pageData.professorName}</span>
                  </div>
                </div>
                <div class="single-info category">
                  <i class="far fa-bolt"></i>
                  <div class="single-info-content">
                    <strong>Category</strong>
                    <span>${pageData.category}</span>
                  </div>
                </div>
                <div class="single-info s-enroll">
                  <i class="far fa-users"></i>
                  <div class="single-info-content">
                    <strong>Enrolled</strong>
                    <span>${pageData.enrolled} Students</span>
                  </div>
                </div>
                <div class="single-info rattings">
                  <i class="far fa-clock"></i>
                  <div class="single-info-content">
                    <strong>Course Time</strong>
                    <span>${pageData.courseTime}</span>
                  </div>
                </div>
                <div class="single-info rattings">
                  <i class="far fa-dollar"></i>
                  <div class="single-info-content">
                    <strong>Course Fees</strong>
                    <span>${pageData.courseFees}</span>
                  </div>
                </div>
              </div>
              <a href="https://form.jotform.com/242364855582162" class="theme-btn">Enroll Now<i
                  class="fas fa-arrow-right-long"></i></a>
            </div>
            <div class="widget">
              <strong class="widget-title">Course Features</strong>
              <div class="course-feature-list">
                <a href="#"><i class="far fa-book-open"></i> Lectures <span>${
                  pageData.lectures
                }</span></a>
                <a href="#"><i class="far fa-pencil"></i> Quizes <span>${
                  pageData.quizes
                }</span></a>
                <a href="#"><i class="far fa-clock"></i> Duration <span>${
                  pageData.duration
                }</span></a>
                <a href="#"><i class="far fa-globe"></i> Language <span>${
                  pageData.language
                }</span></a>
                <a href="#"><i class="far fa-fill-drip"></i> Skill Level <span>${
                  pageData.skillLevel
                }</span></a>
                <a href="#"><i class="far fa-location-dot"></i> Location <span>${
                  pageData.location
                }</span></a>
                <a href="#"><i class="far fa-users"></i> Students <span>${
                  pageData.students
                }</span></a>
                <a href="#"><i class="far fa-graduation-cap"></i> Certificate <span>${
                  pageData.certificate
                }</span></a>
                <a href="#"><i class="far fa-check-circle"></i> Assessments <span>${
                  pageData.assessments
                }</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
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
  contentDiv.innerHTML = generatePageHTML(pagesData[pageIndex]);
});
