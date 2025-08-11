import { IntroImage } from '../Constants';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.text}>
        <h1>Welcome to My Portfolio</h1>
        <p>
          As a passionate web developer, I create modern, responsive, and
          userfriendly websites tailored to your needs. With experience in HTML,
          CSS, JavaScript, and popular frameworks, I turn ideas into engaging
          digital experiences. Whether you're a business looking to boost your
          online presence or an individual wanting a custom solution, I’m here
          to build it for you. Browse my projects below or get in touch to start
          your web journey
        </p>
        <button>
          <span>Learn More</span> <i class="ri-arrow-right-line"></i>
        </button>
      </div>
      <div className={styles.image}>
        <img src={IntroImage} alt="" />

      </div>
    </section>
  );
}
