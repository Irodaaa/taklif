import React, { useState } from "react";
import Resizer from "react-image-file-resizer";
import "./GalleryUpload.css";

const GalleryUpload = ({ onImagesChange }) => {
  const [galleryImages, setGalleryImages] = useState([]);

  const handleGalleryImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const promises = files.map((file) =>
      new Promise((resolve) => {
        Resizer.imageFileResizer(
          file,
          800, // Width
          800, // Height
          "JPEG",
          80,
          0,
          (uri) => {
            resolve(uri); // Resize each image
          },
          "base64"
        );
      })
    );

    Promise.all(promises).then((resizedImages) => {
      setGalleryImages((prev) => {
        const updatedGallery = [...prev, ...resizedImages];
        onImagesChange(updatedGallery); // Notify parent component
        return updatedGallery;
      });
    });
  };

  return (
    <div className="gallery-upload-container">
      <label htmlFor="galleryImageUpload">Добавьте фотографии (опционально):</label>
      <input
        type="file"
        id="galleryImageUpload"
        onChange={handleGalleryImageUpload}
        multiple
        accept="image/*"
      />
      {galleryImages.length > 0 && (
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryUpload;
