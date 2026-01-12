function FlexCard({
  title,
  description,
  subImage,
  buttonText,
  mainImage,
  variant,
  reverse,
  active,
}) {
  return (
    <div className={`flex-card ${active ? "active" : ""}`}>
      <div className={`flex-card-wrapper ${reverse ? "reverse" : ""}`}>
        <div className="flex-card-image">
          <img src={mainImage} style={{ width: "100%" }} />
        </div>
        <div className="flex-card-content">
          <h1>{title}</h1>
          <p>{description}</p>
          {subImage && <img src={subImage} style={{ width: "70%" }} />}
          {buttonText && (
            <button
              style={{
                backgroundColor: "orangered",
                padding: "16px 40px",
                borderRadius: "100px",
                border: "none",
                fontFamily: "geom",
                fontSize: "16px",
                fontWeight: 600,
                marginTop: "30px",
                color: "whitesmoke",
                cursor:'pointer',
              }}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlexCard;
