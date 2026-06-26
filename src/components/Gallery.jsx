import "../styles/Gallery.css";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200",
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200",
    "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1200",
  ];

  return (
    <section className="gallery">
      <h2>Our Gallery</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}