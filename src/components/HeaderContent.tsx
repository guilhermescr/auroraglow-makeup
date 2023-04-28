import { navbarItems } from './navbarItems';
import SmallSearchIcon from './navbar/SmallSearchIcon';

type Props = {
  setIsSearchBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeaderContent({ setIsSearchBarOpen }: Props) {
  return (
    <div className="header__content">
      <nav className="header__navbar">
        <ul>
          {navbarItems.map(({ title }, index) => (
            <li key={`lg-${index + 1}`}>{title}</li>
          ))}
        </ul>
      </nav>

      <div className="search-bar" onClick={() => setIsSearchBarOpen(true)}>
        <button type="button" className="search-bar__search-button">
          Search
        </button>

        <SmallSearchIcon />
      </div>
    </div>
  );
}
