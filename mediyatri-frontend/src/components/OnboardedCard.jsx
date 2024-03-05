import React from "react";

import { Img, Text } from "components";

const DesignHomepageOnboardedcard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2.5 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              className="h-[220px] md:h-auto object-cover rounded-bl rounded-br w-full"
              alt="imageSixtyNine"
              src={props?.userimage}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-center text-light_blue-900 w-full"
                size="txtPoppinsBold40"
              >
                {props?.doctorsonboardedcount}
              </Text>
              <Text
                className="text-center text-gray-900 text-lg w-full"
                size="txtPoppinsMedium18"
              >
                {props?.doctorsonboardedtext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesignHomepageOnboardedcard.defaultProps = {
  userimage: "images/img_image69.png",
  doctorsonboardedcount: "100+",
  doctorsonboardedtext: "doctors onboarded",
};

export default DesignHomepageOnboardedcard;
