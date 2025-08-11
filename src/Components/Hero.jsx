import { HeroImage } from '../Constants';
import styles from './Hero.module.css';
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.one}>
        <h1>Developer</h1>
        <div>
          <p>Contact now to build your imagination into real world</p>
          <p>Presented By: Ayan Sharma</p>
        </div>
      </div>
      <div className={styles.two}>
        <p>Web</p>
        <img src={HeroImage} alt="" />
      </div>
    </section>
  );
}
