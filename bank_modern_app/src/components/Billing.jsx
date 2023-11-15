import { apple,about, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={about} alt="about" className="w-full ml-20 mr-5 h-full object-contain relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2 } >
     <div className='ml-10'> About Capabl
      <br className="sm:block hidden" />    
      </div>    </h2>
      <p className={`${styles.paragraph} max-w-[470px] ml-10 mt-5`}>
      Capabl from Elite Techno Groups, an industry consultant and Ed-Tech backed by 200+ 
      leading MNC's & Startups, is dedicated to creating a top-notch learning ecosystem.
       Our mission is to bridge the industry-academia gap while considering the complexities of the 
       Indian degree ecosystem. 
       <br /><br />
             Our NaukriSaksham initiatives aim to protect students from the exploitation of commercial Edtech 
      companies that charge exorbitant fees for placement and training. Our pocket-friendly model allows 
      students to learn, secure a job, and pay fees, relieving the financial burden on their parents.
      <br /><br />
<div className='text-[#71ad8a]'>
      With Capabl, students become Capable!
      </div>
           </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>
    </div>
  </section>
);

export default Billing;