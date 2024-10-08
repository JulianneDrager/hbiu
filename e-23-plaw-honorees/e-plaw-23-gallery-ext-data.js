const galleryAWData = [
  {
    title: "Gallery",
    description:
      "Heart Bible International University with its founder Dr. Mcintosh is honored to celebrate great men and women who have served their community.",
    items: Array.from({ length: 77 }, (_, i) => {
      const index = i + 1;
      return {
        imgSrc: `../assets/img/plaw/aw-23-${index}.jpg`,
        imgAlt: `Gallery Image ${index}`,
        popupLink: `../assets/img/plaw/aw-23-${index}.jpg`,
      };
    }),
  },
];
