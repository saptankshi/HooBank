import React, { useState } from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import AdvanceCarBox from "./AdvanceCarBox";

const GetStarted = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={`${styles.flexCenter} `}>
      <div className={`${styles.flexCenter} flex-col mt-10 bg-[#d9d9d9] w-[70%] h-[50%] border-2 cursor-pointer rounded-2xl`} onClick={openPopup}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-black">View Details</span>
          </p>
          {/* <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" /> */}
        </div>
        {/* Add additional content as needed */}
      </div>

      {isPopupOpen && <AdvanceCarBox handleClose={closePopup} />}
    </div>
  );
};

export default GetStarted;
