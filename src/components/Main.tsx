type Props = {
  children: JSX.Element;
};

export default function Main({ children }: Props) {
  return <main className="main">{children}</main>;
}
