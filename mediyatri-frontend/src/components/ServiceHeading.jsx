import React from "react";

import { Img, Text } from "components";

const DesignServicesHeadingbody = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start max-w-[715px] w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
            size="txtPoppinsSemiBold24"
          >
            {props?.expertguidancetext}
          </Text>
          <Text
            className="leading-[31.00px] max-w-[715px] md:max-w-full text-base text-gray-700"
            size="txtPoppinsRegular16Gray700"
          >
            {props?.descriptiontwotext}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start rounded-lg w-[38%] md:w-full">
          <Img
            className="h-[360px] md:h-auto object-cover rounded-lg w-full"
            alt="rectangleFifteen"
            src={props?.rectanglefifteenimage}
          />
        </div>
      </div>
    </>
  );
};

DesignServicesHeadingbody.defaultProps = {
  expertguidancetext: "Expert Guidance",
  descriptiontwotext:
    "Benefit from our team of experienced healthcare professionals who guide you through every step of your medical travel. From selecting the right hospital to coordinating appointments, we ensure a seamless experience.",
  rectanglefifteenimage: "images/img_rectangle15.png",
};

export default DesignServicesHeadingbody;
