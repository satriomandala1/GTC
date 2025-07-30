import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Layout = (props) => {
  const data = useLocation();
  const { title, children, social } = props;
  // const path = props&&props.location&&props.location

  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          { <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a> }
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
            
              <li
                className={`nav-home  ${data.pathname.includes("/profile") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/profile`}>About</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/work") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/work`}>Introduction</Link>
              </li>
                <li
                className={`nav-home  ${data.pathname === "/sold" ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/sold`}>Documentation</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/news") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/news`}>Materials</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/artikel") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/artikel`}>Article</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/contact") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/contact`}>Contact</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/`}></Link>
              </li>
            </ul>
          </nav>
          {/* <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div> */}
          <div className="site-head-right">
            <div className="social-links">
              <Link
                to={`https://www.facebook.com/AretaCollege/${social.facebook}`}
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
              <Link
                to={`https://www.instagram.com/areta_informaticscollege/${social.twitter}`}
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>

              <Link
                to={`https://api.whatsapp.com/send?phone=6281285234904&text=Hallo%20kak%2C%20saya%20Desi.%20Ada%20yang%20bisa%20saya%20bantu%3F`}
                title="Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      {/* <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built by {""}
        <a
          href="https://pmb.aretacollege.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PT. ARETA INFORMATICS COLLEGE
        </a>
        {""}  {""}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </footer> */
      <footer className="site-foot">
          <a>Guest Teacher   
           </a>
        <a
          href="https://pmb.aretacollege.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PT. ARETA INFORMATICS COLLEGE
           </a>
      </footer>
      }
    </div>
  );
};

export default Layout;
