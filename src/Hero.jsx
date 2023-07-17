import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptatum saepe soluta
            perferendis rerum incidunt! Amet, officiis eum aspernatur eaque suscipit iusto fuga
            numquam tempora, inventore repellendus perspiciatis quibusdam autem?
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='women and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
