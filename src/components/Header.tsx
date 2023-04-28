import AuroraGlowLogo from '../assets/imgs/auroraglow-makeup-logo.png';
import SearchIcon from '../assets/icons/search-icon.svg';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const searchInput = useRef<HTMLInputElement>(null);
  const headerElement = useRef<HTMLElement>(null);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function handleResize() {
    const headerWidth: number = headerElement.current?.clientWidth || 0;

    setScreenWidth(headerWidth);
  }

  window.addEventListener('resize', handleResize);

  useEffect(() => {
    function handleClickOutside({ target }: Event) {
      const headerChildren = headerElement.current?.querySelectorAll(
        '*'
      ) as NodeListOf<Element>;
      const isClickOutsideHeaderChildren =
        [...headerChildren].filter(headerChild => headerChild === target)
          .length === [].length;
      const isHeaderNotClicked = target !== headerElement.current;

      if (isHeaderNotClicked && isClickOutsideHeaderChildren) {
        // clicked outside
        document.removeEventListener('click', handleClickOutside);
        setIsSearchBarOpen(false);
      }
    }

    if (isSearchBarOpen && searchInput.current !== null) {
      searchInput.current.focus();

      document.addEventListener('click', handleClickOutside);
    }
  }, [isSearchBarOpen]);

  return (
    <header
      ref={headerElement}
      className={`header ${isSearchBarOpen ? 'white-bg' : ''}`.trim()}
    >
      {isSearchBarOpen && screenWidth <= 1024 && (
        <section className="small-screen-search-bar-container">
          <div className="search-container">
            <button type="button">
              <img
                className="small-search-icon"
                src={SearchIcon}
                alt="Search Icon"
              />
            </button>

            <input
              type="search"
              name="small-screen-search-input"
              id="small-screen-search-input"
              placeholder="Look for a makeup..."
            />

            <button
              className="close-menu-button"
              type="button"
              onClick={() => setIsSearchBarOpen(false)}
            >
              <span className="close-menu-button__x-bar"></span>
              <span className="close-menu-button__x-bar"></span>
            </button>
          </div>
        </section>
      )}

      {screenWidth <= 1024 && isBurgerMenuOpen && (
        <section className="small-screen-navbar-container">
          <div className="darker-background"></div>

          <button
            className="close-menu-button"
            type="button"
            onClick={() => setIsBurgerMenuOpen(false)}
          >
            <span className="close-menu-button__x-bar"></span>
            <span className="close-menu-button__x-bar"></span>
          </button>

          <nav className="small-screen-navbar-container__navbar">
            {/* I'm going to change this key later... */}
            <ul>
              <li key="sm-0">
                <div className="topic">
                  <h3 className="topic__title">Beauty Services</h3>

                  <span className="navbar__see-more">
                    <span className="navbar-see-more__black-bar"></span>
                    <span className="navbar-see-more__black-bar"></span>
                  </span>
                </div>
              </li>

              <li key="sm-1">
                <div className="topic">
                  <h3 className="topic__title">Gifts</h3>

                  <span className="navbar__see-more">
                    <span className="navbar-see-more__black-bar"></span>
                    <span className="navbar-see-more__black-bar"></span>
                  </span>
                </div>
              </li>

              <li key="sm-2">
                <div className="topic">
                  <h3 className="topic__title">Makeup</h3>

                  <span className="navbar__see-more">
                    <span className="navbar-see-more__black-bar"></span>
                    <span className="navbar-see-more__black-bar"></span>
                  </span>
                </div>
              </li>

              <li key="sm-3">
                <div className="topic">
                  <h3 className="topic__title">Skincare</h3>

                  <span className="navbar__see-more">
                    <span className="navbar-see-more__black-bar"></span>
                    <span className="navbar-see-more__black-bar"></span>
                  </span>
                </div>
              </li>

              <li key="sm-4">
                <div className="topic">
                  <h3 className="topic__title">Fragrances</h3>

                  <span className="navbar__see-more">
                    <span className="navbar-see-more__black-bar"></span>
                    <span className="navbar-see-more__black-bar"></span>
                  </span>
                </div>
              </li>

              <li key="sm-5">
                <div className="topic">
                  <h3 className="topic__title">Contact Us</h3>

                  <span className="navbar__see-more">
                    <span className="navbar-see-more__black-bar"></span>
                    <span className="navbar-see-more__black-bar"></span>
                  </span>
                </div>
              </li>
            </ul>
          </nav>
        </section>
      )}

      {screenWidth <= 1024 ? (
        <>
          <button
            type="button"
            className="small-screen-search-button"
            onClick={() => setIsSearchBarOpen(true)}
          >
            <img
              className="small-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
          </button>

          <img
            className="auroraglow-logo"
            src={AuroraGlowLogo}
            alt="AuroraGlow Makeup Logo"
          />

          <button
            className="hamburger-button"
            onClick={() => setIsBurgerMenuOpen(true)}
          >
            <span className="hamburger-button__black-bar"></span>
            <span className="hamburger-button__black-bar"></span>
            <span className="hamburger-button__black-bar"></span>
          </button>
        </>
      ) : (
        <img
          className="auroraglow-logo"
          src={AuroraGlowLogo}
          alt="AuroraGlow Makeup Logo"
        />
      )}

      {screenWidth > 1024 && (
        <div className="header__content">
          <nav className="header__navbar">
            <ul>
              <li key="lg-0">Beauty Services</li>
              <li key="lg-1">Gifts</li>
              <li key="lg-2">Makeup</li>
              <li key="lg-3">Skincare</li>
              <li key="lg-4">Fragrances</li>
              <li key="lg-5">Contact Us</li>
            </ul>
          </nav>

          <div className="search-bar" onClick={() => setIsSearchBarOpen(true)}>
            <button type="button" className="search-bar__search-button">
              Search
            </button>

            <img
              className="small-search-icon"
              src={SearchIcon}
              alt="Search Icon"
            />
          </div>
        </div>
      )}

      {isSearchBarOpen && screenWidth > 1024 && (
        <section className="open-search-bar">
          <input
            type="search"
            name="search-input"
            id="search-input"
            ref={searchInput}
            placeholder="Look For a Makeup..."
          />

          <img src={SearchIcon} alt="Search Icon" />
        </section>
      )}
    </header>
  );
}
