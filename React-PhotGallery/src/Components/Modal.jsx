
export default function Modal({ image, onClose }) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
        onClick={onClose}
      >
        <div
          style={{ backgroundColor: "grey", padding: "1rem", borderRadius: "10px" }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>{image.title}</h3>
          <img
            src={image.url}
            alt={image.title}
            style={{ width: "600px", borderRadius: "8px" }}
          />
          <br />
          <button onClick={onClose} style={{ marginTop: "1rem" }}>
            Close
          </button>
        </div>
      </div>
    );
  }