import AuroraGlowLogo from '../assets/imgs/auroraglow-makeup-logo.png';
import SearchIcon from '../assets/icons/search-icon.svg';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isSearching, setIsSearching] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearching) {
      if (searchInput.current !== null) {
        searchInput.current.focus();
      }
    }
  }, [isSearching]);

  return (
    <header className={`header ${isSearching && 'white-bg'}`}>
      <img
        className="auroraglow-logo"
        src={AuroraGlowLogo}
        alt="AuroraGlow Makeup Logo"
      />

      <div className="header__content">
        <nav className="header__navbar">
          <ul>
            <li>Beauty Services</li>
            <li>Gifts</li>
            <li>Makeup</li>
            <li>Skincare</li>
            <li>Fragrances</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        <div className="search-bar" onClick={() => setIsSearching(true)}>
          <button type="button" className="search-bar__search-button">
            Search
          </button>

          <img src={SearchIcon} alt="Search Icon" />
        </div>
      </div>

      {isSearching && (
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
