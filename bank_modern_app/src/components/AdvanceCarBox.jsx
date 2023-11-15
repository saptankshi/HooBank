import React from "react";
import MajorModules from "./modules";

const AdvanceCarBox = ({ handleClose }) => {
  return (
    <div
      className="w-full h-screen bg-[#3b3a3aed] fixed z-[9999] top-0 flex justify-center"
      id="grayBackground"
      onClick={(e) => (e.target.id === "grayBackground" ? handleClose() : "")}
    >
      <div className="w-95/100 bg-white overflow-scroll flex flex-col items-center mt-5 rounded-2xl py-3.5 sm:w-1/2 sm:mt-1.5 sm:min-w-[768px]">
        <div className="w-full mb-6 py-0 pr-[1px] pl-[30px] border-b border-light_gray_1 flex justify-between items-center sm:pr-5">
          <p className="poppinsBold text-2xl">Electric Vehicle & Design</p>
          <img
            alt="cross"
            className="cursor-pointer"
            onClick={handleClose}
            style={{ width: "42px" }}
            src={"/assets/images/PopupBoxLogos/cross-svgrepo-com.svg"}
          />
        </div>
        <div className="shadow-box-2 w-92/100 rounded-xl sm:min-w-[705px]">
          <MajorModules />
          <div className="pt-4">
            <p className="poppinsBold text-2xl mb-2 ml-2">Software Learn</p>
            <div className="flex justify-center flex-wrap">
              <div className="w-[118px] p-1 flex items-center justify-center sm:m-2.5 sm:w-[116px]">
                {/* <img
                  alt="matlab"
                  src={"/assets/images/PopupBoxLogos/Matlab.png"}
                  className="w-full"
                /> */}
              </div>
              <div className="w-[118px] p-1 flex items-center justify-center sm:m-2.5 sm:w-[165px]">
                {/* <img
                  alt="creo"
                  src={"/assets/images/PopupBoxLogos/Creo_logo 1.png"}
                  className="w-full"
                /> */}
              </div>
              <div className="w-[110px] p-1 flex items-center justify-center sm:m-2.5 sm:w-[213px]">
                {/* <img
                  alt="Simcenter"
                  src={"/assets/images/PopupBoxLogos/Simcenter_MS_Final_c 1.png"}
                  className="w-[41%]"
                /> */}
              </div>
              <div className="w-[118px] p-1 flex items-center justify-center sm:m-2.5 sm:w-[186px]">
                {/* <img
                  alt="psim"
                  src={"/assets/images/PopupBoxLogos/PSIM_logo 1.png"}
                  className="w-[83%]"
                /> */}
              </div>
              <div className="w-[118px] p-1 flex items-center justify-center sm:m-2.5 sm:w-[186px]">
                {/* <img
                  alt="simea"
                  src={"/assets/images/PopupBoxLogos/simea.png"}
                  className="w-[117%]"
                /> */}
              </div>
            </div>
          </div>
          {/* <Projects />
          <ExpertProfiles /> */}
        </div>
      </div>
    </div>
  );
};

export default AdvanceCarBox;
