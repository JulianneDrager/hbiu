document.addEventListener("DOMContentLoaded", () => {
  const galleryDescription = document.getElementById("gallery-aw-description");
  const galleryItemsContainer = document.getElementById("aw-gallery-items");

  galleryDescription.textContent = galleryAWData[0].description;

  galleryAWData[0].items.slice(0, 79).forEach((item, index) => {
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
});
