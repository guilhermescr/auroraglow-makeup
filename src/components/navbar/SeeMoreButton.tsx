type Props = {
  isCollapse: boolean;
  setIsCollapse: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SeeMoreButton({ isCollapse, setIsCollapse }: Props) {
  function toggleCollapseDiv(): void {
    setIsCollapse(!isCollapse);
  }

  return isCollapse ? (
    <span className="navbar__see-more" onClick={toggleCollapseDiv}>
      <span className="navbar-see-more__black-bar"></span>
      <span className="navbar-see-more__black-bar"></span>
    </span>
  ) : (
    <span className="navbar__see-less" onClick={toggleCollapseDiv}>
      <span className="navbar-see-less__black-bar"></span>
    </span>
  );
}
