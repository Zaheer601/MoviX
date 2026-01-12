function Hero() {
  return (
    <section className="hero-sec">
      <div className="wrapper">
        <h1>Free Movies Online, Watch Anytime Anywhere.</h1>
        <p>
          The search is over! Let Plex help you find the perfect movie to watch
          tonight for free.
        </p>
        {/* <input type="text" style={{ }}/> */}
          <button
            style={{
              backgroundColor: "orangered",
              color: "whitesmoke",
              fontFamily: "verdana",
              fontSize: "16px",
              fontWeight: 600,
              border: "none",
              borderRadius: "100px",
              padding: "16px 40px",
              cursor:'pointer',
            }}
          >
            Watch Free
          </button>
      
            </div>
    </section>
  );
}

export default Hero;
