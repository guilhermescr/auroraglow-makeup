import MakeupUnboxingGIF from '../../assets/videos/auroraglow-makeup-unboxing-gif.gif';

export default function Home() {
  return (
    <>
      <div className="makeup-unboxing-background">
        <img src={MakeupUnboxingGIF} alt="Makeup Unboxing GIF" />
      </div>

      <section className="discover-container">
        <h2>Makeup For Empowered Women</h2>
        <button type="button">Discover</button>
      </section>
    </>
  );
}
