import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Summer Sale is Here on TRIZEN!",
      subtitle: "Up to 70% OFF on Electronics",
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      title: "New Fashion Collection",
      subtitle: "Trending styles at unbeatable prices",
      bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Smart Home Gadgets @ TRIZEN",
      subtitle: "Transform your living space",
      bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      image: "https://gadgetstripe.com/wp-content/uploads/2021/08/smart-gadgets-gadgetstripe.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div style={styles.heroContainer}>
      <div style={styles.sliderWrapper}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              ...styles.slide,
              background: slide.bg,
              opacity: currentSlide === index ? 1 : 0,
            }}
          >
            <div className="slide-content" style={styles.slideContent}>
              <div className="text-section" style={styles.textContent}>
                <h1 className="hero-title" style={styles.title}>{slide.title}</h1>
                <p className="hero-sub" style={styles.subtitle}>{slide.subtitle}</p>
                <button style={styles.shopNowBtn}>
                  Shop Now <span style={styles.arrow}>→</span>
                </button>
              </div>

              <div className="image-section" style={styles.imageContent}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="hero-img"
                  style={styles.slideImage}
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          style={{ ...styles.navButton, left: "20px" }}
        >
          ‹
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          style={{ ...styles.navButton, right: "20px" }}
        >
          ›
        </button>

        <div style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                ...styles.dot,
                background: currentSlide === index ? "#fff" : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="feature-wrapper" style={styles.featuresContainer}>
        {[
          ["🚚", "Free Delivery"],
          ["💳", "Secure Payment"],
          ["🔄", "Easy Returns"],
          ["⭐", "Best Quality"],
        ].map(([icon, title]) => (
          <div key={title} className="feature-card" style={styles.featureCard}>
            <div style={styles.featureIcon}>{icon}</div>
            <h3 style={styles.featureTitle}>{title}</h3>
          </div>
        ))}
      </div>

      <style>
        {`
        @media (max-width: 600px) {
          .slide-content {
            flex-direction: column !important;
            padding: 15px !important;
            gap: 10px !important;
            text-align: center !important;
          }

          .text-section {
            order: 2 !important;
          }

          .image-section {
            order: 1 !important;
          }

          .hero-img {
            width: 90% !important;
            height: 200px !important;
          }

          .hero-title {
            font-size: 22px !important;
          }

          .hero-sub {
            font-size: 14px !important;
          }

          .feature-wrapper {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }

          .feature-card {
            padding: 12px !important;
          }
        }

        @media (max-width: 900px) and (min-width: 601px) {
          .slide-content {
            padding: 20px !important;
            gap: 20px !important;
          }

          .hero-title {
            font-size: 38px !important;
          }

          .hero-sub {
            font-size: 18px !important;
          }

          .hero-img {
            max-width: 380px !important;
            height: 260px !important;
          }
        }
      `}
      </style>
    </div>
  );
};

const styles = {
  heroContainer: {
    width: "100%",
    marginBottom: "30px",
  },
  sliderWrapper: {
    position: "relative",
    width: "100%",
    height: "500px",
    overflow: "hidden",
  },
  slide: {
    position: "absolute",
    width: "100%",
    height: "100%",
    transition: "opacity 0.8s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  slideContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    width: "100%",
    padding: "0 60px",
    gap: "40px",
  },
  textContent: {
    flex: 1,
    color: "#fff",
  },
  imageContent: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  slideImage: {
    width: "100%",
    maxWidth: "500px",
    height: "350px",
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  },
  title: {
    fontSize: "56px",
    fontWeight: "800",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "22px",
    marginBottom: "30px",
  },
  shopNowBtn: {
    padding: "16px 40px",
    fontSize: "18px",
    borderRadius: "50px",
    border: "none",
    background: "#fff",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    width: "50px",
    height: "50px",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "50%",
    border: "none",
    fontSize: "30px",
    cursor: "pointer",
    color: "#fff",
    zIndex: 10,
  },
  dotsContainer: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
    
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "none",
  },
  featuresContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "20ppx 20px",
    

  },
  featureCard: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  },
  featureIcon: { fontSize: "40px" },
  featureTitle: { fontSize: "16px", marginTop: "8px" },
};

export default Hero;
