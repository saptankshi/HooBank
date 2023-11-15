import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img , image}) => (
  <div className="flex justify-between flex-col bg-[#3a403c] px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
    <img src={img} alt={name} className="w-[50%] h-[50%] border-[6px] ml-[55px] object-contain rounded-full align-center" />
    <div className="flex flex-col ml-[58px]">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
         {title}
       </p>

        <img src={image} alt={name} className="w-[55%] h-[51%] object-contain" /> 

        {/* <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ml-7">
         
          {title}
        </p> */}
      </div>

    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white ">
      {content}
    </p>

    <div className="flex flex-row">
      {/* <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" /> */}
      {/* <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div> */}
    </div>
  </div>
);


export default FeedbackCard;