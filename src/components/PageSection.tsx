import { useRef } from 'react';

type Props = {
  children: JSX.Element;
  section: string;
};

interface References {
  cosmeticsSection: HTMLElement;
}

export const references: References = {
  cosmeticsSection: document.body
};

export default function PageSection({ children, section }: Props) {
  const sectionReference = useRef<HTMLElement>(null);
  references.cosmeticsSection = sectionReference.current as HTMLElement;
  console.log(sectionReference.current);

  return (
    <section className="page-section" id={section} ref={sectionReference}>
      {children}
    </section>
  );
}
