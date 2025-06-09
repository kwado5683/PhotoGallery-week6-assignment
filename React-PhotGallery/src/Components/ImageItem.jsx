

export default function ImageItem({ image, onClick }) {
  return (
    <button
      onClick={() => onClick(image)}
      onKeyDown={(event) =>
        (event.key === "Enter" || event.key === " ") && onClick(image)
      }
      style={{ border: "none", background: "black" }}
    >
      <img
        src={image.url}
        alt={image.title}
        tabIndex={0}
        style={{ width: "150px", cursor: "pointer" }}
      />
    </button>
  );
}