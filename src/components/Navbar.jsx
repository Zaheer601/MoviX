import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {





  return (
    <>
      <div className="navbar">
        <Link to="/">
        <div className="navbar-container">
        <div><img src="icon.png" width="50px" /></div>
          <div className="logo">
            <h1
              style={{
                color: "ghostwhite",
                fontFamily: "verdana",
                fontSize: "40px",
                fontWeight: 800,
                display: "inline",
                textDecoration: "none",
              }}
            >
              Movi
              <span style={{ color: "orangered", textDecoration: "none" }}>
                X
              </span>
            </h1>
          </div>
          </div>
        </Link>

        <div className="navitems">
          <Link to="favorites">
            <button className="fvrt-btn"
              style={{
                backgroundColor: "orangered",
                color: "ghostwhite",
                padding: "13px 30px",
                borderRadius: "100px",
                border: "none",
                fontFamily: "verdana",
                fontSize: "14px",
                fontWeight: 600,
            
                cursor:'pointer',
              }}
            >
              Favorites
            </button>
          </Link>
          <button className="signupbtn"
            style={{
              backgroundColor: "transparent",
              color: "ghostwhite",
              padding: "13px 30px",
              borderRadius: "100px",
              border: "1px solid orangered",
              fontFamily: "verdana",
              fontSize: "14px",
              fontWeight: 600,
              cursor:'pointer',
            }}
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
