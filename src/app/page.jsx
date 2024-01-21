import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creativer Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quod,
          non voluptate nihil delectus maxime officia laboriosam reprehenderit
          voluptas quasi sit quo perspiciatis nisi, nam, itaque in architecto
          accusantium eligendi.
        </p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Conatct</button>
        </div>

        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>

      </div>

      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>

    </div>
  );
};

export default Home;
