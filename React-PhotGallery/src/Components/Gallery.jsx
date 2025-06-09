

import { useState, useEffect } from "react";
import ImageItem from "./ImageItem";
import Modal from "./Modal";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await res.json();
      setImages(data);
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h2 className="text-xl mb-4">Image Gallery</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {images.map((img) => (
          <ImageItem key={img.id} image={img} onClick={setSelectedImage} />
        ))}
      </div>
      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}