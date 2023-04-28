import AuroraGlowLogo from '../assets/imgs/auroraglow-makeup-logo.png';
import { useState, useRef, useEffect } from 'react';
import HeaderContent from './HeaderContent';
import SmallSearchIcon from './navbar/SmallSearchIcon';
import CloseMenuButton from './navbar/CloseMenuButton';

export default function Header() {
  const searchInput = useRef<HTMLInputElement>(null);
  const headerElement = useRef<HTMLElement>(null);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isNavbarItemOpen, setIsNavbarItemOpen] = useState(false);
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
              <SmallSearchIcon />
            </button>

            <input
              type="search"
              name="small-screen-search-input"
              id="small-screen-search-input"
              placeholder="Look for a makeup..."
            />

            <CloseMenuButton onclick={() => setIsSearchBarOpen(false)} />
          </div>
        </section>
      )}

      {screenWidth <= 1024 && isBurgerMenuOpen && (
        <section className="small-screen-navbar-container">
          <div
            className="darker-background"
            onClick={() => setIsBurgerMenuOpen(false)}
          ></div>

          <CloseMenuButton onclick={() => setIsBurgerMenuOpen(false)} />

          <nav className="small-screen-navbar-container__navbar">
            {/* I'm going to change this key later... */}
            <ul>
              <li className="navbar__item" key="sm-0">
                <div className="topic">
                  <h3 className="topic__title">Beauty Services</h3>

                  {isNavbarItemOpen ? (
                    <span
                      className="navbar__see-less"
                      onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                    >
                      <span className="navbar-see-less__black-bar"></span>
                      <span className="navbar-see-less__black-bar"></span>
                    </span>
                  ) : (
                    <span
                      className="navbar__see-more"
                      onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                    >
                      <span className="navbar-see-more__black-bar"></span>
                      <span className="navbar-see-more__black-bar"></span>
                    </span>
                  )}
                </div>

                {isNavbarItemOpen && (
                  <ul className="topic__options">
                    <li className="topic topic-option">
                      Skin Precision Analyzer
                    </li>
                    <li className="topic topic-option">Foundation Finder</li>
                    <li className="topic topic-option">Virtual Try-On</li>
                    <li className="topic topic-option">Fragrance Finder</li>
                    <li className="topic topic-option">Olfactive Signature</li>
                  </ul>
                )}
              </li>

              <li className="navbar__item" key="sm-1">
                <div className="topic">
                  <h3 className="topic__title">Gifts</h3>

                  {isNavbarItemOpen ? (
                    <span
                      className="navbar__see-less"
                      onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                    >
                      <span className="navbar-see-less__black-bar"></span>
                      <span className="navbar-see-less__black-bar"></span>
                    </span>
                  ) : (
                    <span
                      className="navbar__see-more"
                      onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                    >
                      <span className="navbar-see-more__black-bar"></span>
                      <span className="navbar-see-more__black-bar"></span>
                    </span>
                  )}
                </div>
              </li>

              <li className="navbar__item" key="sm-2">
                <div className="topic">
                  <h3 className="topic__title">Makeup</h3>

                  {isNavbarItemOpen ? (
                    <span
                      className="navbar__see-less"
                      onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                    >
                      <span className="navbar-see-less__black-bar"></span>
                      <span className="navbar-see-less__black-bar"></span>
                    </span>
                  ) : (
                    <span
                      className="navbar__see-more"
                      onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                    >
                      <span className="navbar-see-more__black-bar"></span>
                      <span className="navbar-see-more__black-bar"></span>
                    </span>
                  )}
                </div>
              </li>

              <li className="navbar__item" key="sm-3">
                <div className="topic">
                  <h3 className="topic__title">Skincare</h3>

                  {isNavbarItemOpen ? (
                    <span
                      className="navbar__see-less"
                      onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                    >
                      <span className="navbar-see-less__black-bar"></span>
                      <span className="navbar-see-less__black-bar"></span>
                    </span>
                  ) : (
                    <span
                      className="navbar__see-more"
                      onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                    >
                      <span className="navbar-see-more__black-bar"></span>
                      <span className="navbar-see-more__black-bar"></span>
                    </span>
                  )}
                </div>
              </li>

              <li className="navbar__item" key="sm-4">
                <div className="topic">
                  <h3 className="topic__title">Fragrances</h3>

                  {isNavbarItemOpen ? (
                    <span
                      className="navbar__see-less"
                      onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                    >
                      <span className="navbar-see-less__black-bar"></span>
                      <span className="navbar-see-less__black-bar"></span>
                    </span>
                  ) : (
                    <span
                      className="navbar__see-more"
                      onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                    >
                      <span className="navbar-see-more__black-bar"></span>
                      <span className="navbar-see-more__black-bar"></span>
                    </span>
                  )}
                </div>
              </li>

              <li className="navbar__item" key="sm-5">
                <div className="topic">
                  <h3 className="topic__title">Contact Us</h3>

                  {isNavbarItemOpen ? (
                    <span
                      className="navbar__see-less"
                      onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                    >
                      <span className="navbar-see-less__black-bar"></span>
                      <span className="navbar-see-less__black-bar"></span>
                    </span>
                  ) : (
                    <span
                      className="navbar__see-more"
                      onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                    >
                      <span className="navbar-see-more__black-bar"></span>
                      <span className="navbar-see-more__black-bar"></span>
                    </span>
                  )}
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
            <SmallSearchIcon />
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
        <HeaderContent setIsSearchBarOpen={setIsSearchBarOpen} />
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

          <SmallSearchIcon hasClasses={false} />
        </section>
      )}
    </header>
  );
}
