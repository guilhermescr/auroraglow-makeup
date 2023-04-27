import AuroraGlowLogo from '../assets/imgs/auroraglow-makeup-logo.png';
import SearchIcon from '../assets/icons/search-icon.svg';

export default function Header() {
  return (
    <header className="header">
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

        <div className="search-bar">
          <button type="button" className="search-bar__search-button">
            Search
          </button>

          <img src={SearchIcon} alt="Search Icon" />
        </div>
      </div>
    </header>
  );
}
