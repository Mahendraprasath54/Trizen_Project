const Hero = () => {
  return (
    <div style={styles.hero}>
      <h1>Welcome to Trizen Store</h1>
      <p>Best deals on electronics, fashion, accessories & more!</p>
    </div>
  );
};

const styles = {
  hero: {
    padding: "60px 20px",
    textAlign: "center",
    background: "#4f46e5",
    color: "#fff",
    borderRadius: "10px",
    margin: "20px 0",
  },
};

export default Hero;
