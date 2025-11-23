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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={styles.heroContainer}>
      <div style={styles.sliderWrapper}>
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              ...styles.slide,
              background: slide.bg,
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 1 : 0,
            }}
          >
            <div style={styles.slideContent}>
              <div style={styles.textContent}>
                <h1 style={styles.title}>{slide.title}</h1>
                <p style={styles.subtitle}>{slide.subtitle}</p>
                <button style={styles.shopNowBtn}>
                  Shop Now
                  <span style={styles.arrow}>→</span>
                </button>
              </div>
              <div style={styles.imageContent}>
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  style={styles.slideImage}
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          style={{ ...styles.navButton, left: "20px" }}
          onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.3)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.2)"}
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          style={{ ...styles.navButton, right: "20px" }}
          onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.3)"}
          onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.2)"}
        >
          ›
        </button>

        <div style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                ...styles.dot,
                background: currentSlide === index ? "#fff" : "rgba(255,255,255,0.5)",
                width: currentSlide === index ? "30px" : "10px",
              }}
            />
          ))}
        </div>
      </div>

      <div style={styles.featuresContainer}>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🚚</div>
          <h3 style={styles.featureTitle}>Free Delivery</h3>
          <p style={styles.featureText}>On orders over $50</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>💳</div>
          <h3 style={styles.featureTitle}>Secure Payment</h3>
          <p style={styles.featureText}>100% secure transactions</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🔄</div>
          <h3 style={styles.featureTitle}>Easy Returns</h3>
          <p style={styles.featureText}>30-day return policy</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>⭐</div>
          <h3 style={styles.featureTitle}>Best Quality</h3>
          <p style={styles.featureText}>Premium products</p>
        </div>
      </div>
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
    borderRadius: "0",
  },
  slide: {
    position: "absolute",
    top: 0,
    left: 0,
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
    textAlign: "left",
    color: "#fff",
    animation: "fadeInLeft 0.8s ease-out",
  },
  imageContent: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    lineHeight: "1.2",
    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
  },
  subtitle: {
    fontSize: "22px",
    marginBottom: "30px",
    opacity: 0.95,
    fontWeight: "400",
  },
  shopNowBtn: {
    padding: "16px 40px",
    fontSize: "18px",
    fontWeight: "600",
    background: "#fff",
    color: "#333",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
  },
  arrow: {
    fontSize: "20px",
    transition: "transform 0.3s ease",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
    border: "none",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    fontSize: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(5px)",
  },
  dotsContainer: {
    position: "absolute",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
    zIndex: 10,
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  featuresContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "20px 20px 20px 20px",
  },
  featureCard: {
    background: "#fff",
    padding: "30px 20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  featureIcon: {
    fontSize: "48px",
    marginBottom: "15px",
  },
  featureTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "8px",
  },
  featureText: {
    fontSize: "14px",
    color: "#666",
    margin: 0,
  },
};

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    button:hover .arrow {
      transform: translateX(5px);
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 20px rgba(0,0,0,0.15);
    }
  `;
  document.head.appendChild(style);
}

export default Hero;