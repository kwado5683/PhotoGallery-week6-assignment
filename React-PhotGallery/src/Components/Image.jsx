


export default function Image({ data }) {
    return (
      <a
        href={data.links.html}
        target="_blank"
        rel="noreferrer"
        className="block hover:scale-105 transition-transform"
      >
        <img
          src={data.urls.small}
          alt={data.alt_description || "Unsplash image"}
          className="h-72 w-full object-cover rounded-lg shadow-md"
        />
      </a>
    );
  }
  