document.addEventListener("DOMContentLoaded", () => {
  const galleryDescription = document.getElementById("gallery-ge-description");
  const galleryItemsContainer = document.getElementById("ge-gallery-items");
  const readMoreBtn = document.getElementById("readMoreBtn");

  galleryDescription.textContent = galleryGeData[0].description;

  // Function to render gallery items based on the provided range
  function renderGalleryItems(start, end) {
    galleryGeData[0].items.slice(start, end).forEach((item, index) => {
      const galleryItem = document.createElement("div");
      galleryItem.className = `col-md-4 wow fadeInUp`;
      galleryItem.setAttribute("data-wow-delay", `${0.15 * (index + 1)}s`);

      galleryItem.innerHTML = `
        <div class="gallery-item" style="${item.hideClass}">
          <div class="gallery-img">
            <img src="${item.imgSrc}" alt="${item.imgAlt}" />
          </div>
        </div>
      `;

      galleryItemsContainer.appendChild(galleryItem);
    });
  }

  // Initially render the first three images
  renderGalleryItems(0, 3);

  readMoreBtn.addEventListener("click", () => {
    // Render the next set of images (e.g., from 3 to 9)
    renderGalleryItems(3, 9);
    readMoreBtn.style.display = "none"; // Hide "Read More" button after click
  });
});
