import HeroVideo from "../../assets/videos/ml.mp4";
export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-video__wrapper'>
        <video autoPlay loop muted className='hero-video'>
          <source src={HeroVideo} type='video/mp4' />
        </video>
        <div className='wrapper'>
          <div className='hero-text'>
            <h1 className='hero-text__title'>
              ARTIFICIAL INTELLIGENCE & <br />
              MACHINE LEARNING SOLUTIONS
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
