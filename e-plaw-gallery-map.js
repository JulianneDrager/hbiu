document.addEventListener("DOMContentLoaded", () => {
  const galleryDescription = document.getElementById("gallery-description");
  const galleryItemsContainer = document.getElementById("gallery-items");

  galleryDescription.textContent = galleryData[0].description;

  galleryData[0].items.slice(0, 47).forEach((item, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = `col-md-4 wow fadeInUp`;
    galleryItem.setAttribute("data-wow-delay", `${0.15 * (index + 1)}s`);

    galleryItem.innerHTML = `
      <div class="gallery-item" style=${item.hideClass}>
        <div class="gallery-img">
          <img src="${item.imgSrc}" alt="${item.imgAlt}" />
        </div>

      </div>
    `;

    galleryItemsContainer.appendChild(galleryItem);
  });
});
