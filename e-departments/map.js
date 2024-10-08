function generatePageDataHTML(pageData) {
  return `
<div class="col-md-6 col-lg-4">
  <div class="course-item wow fadeInUp" data-wow-delay=".25s">
    <span class="course-tag"><i class="far fa-bookmark"></i> ${
      pageData.tag
    }</span>
    <div class="course-img">
      <img src="${pageData.imgSrc}" alt="${pageData.tag}" />
      <a href="${pageData.link}" class="btn"><i class="far fa-link"></i></a>
    </div>
    <div class="course-content">
      <div class="course-meta">
        <div class="course-rating">
          ${'<i class="fas fa-star"></i>'.repeat(Math.floor(pageData.rating))}
          ${'<i class="far fa-star"></i>'.repeat(
            5 - Math.floor(pageData.rating)
          )}
          <span>(${pageData.rating})</span>
        </div>
      </div>
      <h4 class="course-title"><a href="${pageData.link}">${
    pageData.title
  }</a></h4>
      <p class="course-text">${pageData.description}</p>
      <div class="course-bottom">
        <div class="course-bottom-left">
          <a href="${
            pageData.link
          }"><span><i class="far fa-users"></i>EXPLORE MORE</span></a>
        </div>
      </div>
    </div>
  </div>
</div>
`;
}

document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");
  pageData.forEach((page) => {
    contentDiv.innerHTML += generatePageDataHTML(page);
  });
});
