import React from "react";


function Footer() {

  return (
    <footer className="footer has-background-grey-darker" >
      <div className="content has-text-centered has-text-white">
        <p>
          Built at <i className="fas fa-moon"></i> by{" "}
          <a href="https://github.com/nigamstiamoor" className="has-text-white">
            <strong>Taimoor Ahmed</strong>
          </a>
        </p>
        <p>
          <img
            width="512"
            height="96"
            src="https://bulma.io/images/made-with-bulma--semiwhite.png"
            className="bulma-image"
            alt=""
          />
        </p>
      </div>
    </footer>
    );
}

export default Footer;
