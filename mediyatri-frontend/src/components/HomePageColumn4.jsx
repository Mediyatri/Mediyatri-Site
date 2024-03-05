import React from "react";

import { Img, Text } from "components";

const DesignHomepageColumnFour = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-green-A700 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-6 py-4 rounded-bl-[50px] rounded-tl-[50px] shadow-bs1 w-auto">
          <div className="flex flex-col h-8 items-center justify-start w-8">
            <Img
              className="h-8 md:h-auto object-cover w-8"
              src="images/img_image67.png"
              alt="imageSixtySeven"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="text-base text-white-A700 w-auto"
              size="txtPoppinsBold16WhiteA700"
            >
              {props?.helptext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DesignHomepageColumnFour.defaultProps = { helptext: "Need help?" };

export default DesignHomepageColumnFour;
