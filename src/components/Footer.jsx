export default function Footer() {
  return (
    <section
      className="footer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign:'center',
        paddingTop:'70px'
        
      }}
    >
      <div>
        <h1
          style={{
            color: "ghostwhite",
            fontFamily: "verdana",
            fontSize: "60px",
            lineHeight: "10px",
            fontWeight: 800,
            display:'inline',
           textAlign:'center',
          }}
        >
          Movi
          <span style={{ color: "orangered", textDecoration: "none" }}>
            X<p>-------- One Platform To Go</p>
          </span>
        </h1>
        <p style={{ fontSize: "16px" }}>Copyright 2025 by MoviX</p>
      </div>
    </section>
  );
}
