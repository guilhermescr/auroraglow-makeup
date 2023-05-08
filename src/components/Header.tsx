import { useState, useRef, useEffect } from 'react';
import { navbarItems } from './navbarItems';
import HeaderContent from './HeaderContent';
import SmallSearchIcon from './navbar/SmallSearchIcon';
import CloseMenuButton from './navbar/CloseMenuButton';
import AuroraGlowLogo from '../assets/imgs/auroraglow-makeup-logo.png';
import NavbarItem from './navbar/NavbarItem';

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
                <NavbarItem
                  title={title}
                  id={index + 1}
                  hasChildren={hasChildren}
                  itemChildren={children}
                />
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
