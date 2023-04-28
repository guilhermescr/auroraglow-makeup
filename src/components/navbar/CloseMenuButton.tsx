type Props = {
  onclick: () => void;
};

export default function CloseMenuButton({ onclick }: Props) {
  return (
    <button className="close-menu-button" type="button" onClick={onclick}>
      <span className="close-menu-button__x-bar"></span>
      <span className="close-menu-button__x-bar"></span>
    </button>
  );
}
