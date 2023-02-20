import { apple, bill, google, headphones } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse} ml-20 mr-20`}>
    <div className={layout.sectionImgReverse}>
      <img
        src={headphones}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Experience the Power of Livestreaming <br className="sm:block hidden" />{" "}
        with Streamfling
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our mission is to provide artists with the tools and resources they need
        to build a successful online presence. Whether you're a singer,
        songwriter, or musician, we're here to help you take your music career
        to the next level. With our live streaming platform, you can share your
        music with the world and connect with your fans in a meaningful way.
      </p>
    </div>
  </section>
);

export default Billing;
