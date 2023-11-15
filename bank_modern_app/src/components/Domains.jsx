import { quotes } from "../assets";
import Getstarted from "./EnrollButton"
const FeedbackCard = ({ content, name, title, img ,image, backgroundColor}) => (
  <div className="flex justify-between flex-col  px-10 py-12 rounded-[20px]  max-w-[265px] md:mr-10 sm:mr-5 mr-0 my-5 domain-card" style={{ backgroundColor }}>
    {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
    <img src={img} alt={name} className="w-[50.6px] h-[50.6px] object-contain" />
    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
          {name}
        </h4>

    {/* <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p> */}

    <div className="flex flex-row">
      {/* <img src={image} alt={name} className="w-[48px] h-[48px] rounded-full" /> */}
      <div className="flex flex-col ">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
          {/* {name} */}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimBlack">
          {title}
        </p>
        <div className="flex flex-row">

        <img src={image} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <img src={image} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <img src={image} alt={name} className="w-[48px] h-[48px] rounded-full" />
        </div>
<Getstarted/>
      </div>
    </div>
  </div>
);


export default FeedbackCard;