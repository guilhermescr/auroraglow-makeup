import { useState, useRef, useEffect } from 'react';
import { NavbarItems, navbarItems } from './navbarItems';
import HeaderContent from './HeaderContent';
import SmallSearchIcon from './navbar/SmallSearchIcon';
import CloseMenuButton from './navbar/CloseMenuButton';
import AuroraGlowLogo from '../assets/imgs/auroraglow-makeup-logo.png';

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

  function renderTopicOptions(topicChildren: NavbarItems) {
    return (
      <ul className="topic__options">
        {topicChildren.map(({ title }) => (
          <li className="topic topic-option" key={`sm-${title}`}>
            {title}
          </li>
        ))}
      </ul>
    );
  }

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
            <ul>
              {navbarItems.map(({ title, hasChildren, children }, index) => (
                <li className="navbar__item" key={`sm-${index + 1}`}>
                  <div className="topic">
                    <h3 className="topic__title">{title}</h3>

                    {hasChildren && isNavbarItemOpen && (
                      <span
                        className="navbar__see-less"
                        onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                      >
                        <span className="navbar-see-less__black-bar"></span>
                        <span className="navbar-see-less__black-bar"></span>
                      </span>
                    )}

                    {hasChildren && !isNavbarItemOpen && (
                      <span
                        className="navbar__see-more"
                        onClick={() => setIsNavbarItemOpen(!isNavbarItemOpen)}
                      >
                        <span className="navbar-see-more__black-bar"></span>
                        <span className="navbar-see-more__black-bar"></span>
                      </span>
                    )}
                  </div>

                  {hasChildren &&
                    isNavbarItemOpen &&
                    renderTopicOptions(children)}
                </li>
              ))}
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

          <SmallSearchIcon />
        </section>
      )}
    </header>
  );
}
