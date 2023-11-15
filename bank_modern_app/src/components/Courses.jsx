import { domains } from "../constants";
import styles from "../style";
import Domains from "./Domains";

const Courses = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full container flex justify-between text-[#000] items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2} style={{marginLeft: '10%', color: 'black'}}>
      Building industry ready workforce 
      <br className="ml-10" style={{marginLeft: '5%'}}/>in  High-demand Domains
        {/* What People are <br className="sm:block hidden" /> saying about us */}
      </h2>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div> */}
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {domains.map((card) => <Domains key={card.id} {...card} />)}
    </div>
  </section>
);

export default Courses;