document.addEventListener("DOMContentLoaded", () => {
  const galleryDescription = document.getElementById("gallery-description");
  const galleryItemsContainer = document.getElementById("gallery-items");

  galleryDescription.textContent = galleryData[0].description;

  galleryData[0].items.slice(0, 88).forEach((item, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = `col-12 col-sm-6 col-md-4 col-lg-3 wow fadeInUp`;
    // galleryItem.setAttribute("data-wow-delay", `${0.1 * (index + 1)}s`);

    galleryItem.innerHTML = `
    <div class="team-item wow fadeInUp" data-wow-delay=".25s">
      <div class="gallery-item">
        <div class="gallery-img">
          <img src="${item.imgSrc}" alt="${item.imgAlt}" class="gallery-thumb" data-index="${index}" />
        </div>
        <div class="gallery-content">
          <div style="display:flex">
            <a class="popup-img gallery-link" href="${item.popupLink}" data-index="${index}">
              <i class="fal fa-plus"></i>
            </a>
          </div>
        </div>
      </div>
              <p>${item.description}</p>
      </div>



      
`;

    galleryItemsContainer.appendChild(galleryItem);
  });

  // Lightbox functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("caption");
  const closeBtn = document.getElementsByClassName("close")[0];
  const prevBtn = document.getElementsByClassName("prev")[0];
  const nextBtn = document.getElementsByClassName("next")[0];
  let currentIndex = 0;

  function showImage(index) {
    const item = galleryData[0].items[index];
    lightboxImg.src = item.imgSrc;
    captionText.innerHTML = item.imgAlt;
    currentIndex = index;
  }

  document.querySelectorAll(".popup-img").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const index = parseInt(link.getAttribute("data-index"));
      lightbox.style.display = "block";
      showImage(index);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + galleryData[0].items.length) %
      galleryData[0].items.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryData[0].items.length;
    showImage(currentIndex);
  });
});
