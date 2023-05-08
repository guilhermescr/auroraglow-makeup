import MakeupUnboxingGIF from '../../assets/videos/auroraglow-makeup-unboxing-gif.gif';
import PageSection, { references } from '../PageSection';

export default function Home() {
  function scrollToASection(element: HTMLElement) {
    element.scrollIntoView();
  }

  return (
    <>
      <div className="makeup-unboxing-background">
        <img src={MakeupUnboxingGIF} alt="Makeup Unboxing GIF" />
      </div>

      <section className="discover-container">
        <h2>Makeup For Empowered Women</h2>
        <button
          type="button"
          onClick={() => scrollToASection(references.cosmeticsSection)}
        >
          Discover
        </button>
      </section>

      <PageSection section="cosmetics">
        <h2>Test</h2>
      </PageSection>
    </>
  );
}
