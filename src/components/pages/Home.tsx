import MakeupUnboxingVideo from '../../assets/videos/makeup-unboxing-background.mp4';
import SearchIcon from '../../assets/icons/search-icon.svg';

export default function Home() {
  return (
    <>
      <div className="body-video-background">
        <video autoPlay loop>
          <source src={MakeupUnboxingVideo} type="video/mp4" />
          <p>Your browser does not support the HTML5 video element</p>
        </video>
      </div>

      <section className="open-search-bar">
        <input type="search" name="search-input" id="search-input" />

        <img src={SearchIcon} alt="Search Icon" />
      </section>

      <h1>Home</h1>
    </>
  );
}
