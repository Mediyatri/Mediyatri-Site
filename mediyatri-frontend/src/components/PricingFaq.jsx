import React, {useState} from "react";

import { Button, Img, Text } from "components";

const DesignPricingFaq = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);

  const handleButtonClick = () => {
    setShowAnswer(!showAnswer);
  };
    const answerText = props?.answertext || "Default answer text goes here";
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-8 py-2 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="flex-1 text-gray-900_01 text-lg w-auto"
              size="txtPoppinsSemiBold18"
            >
              {props?.questiontext}
            </Text>
            <Button
              className="flex h-11 items-center justify-center w-11"
              shape="square"
              color="white_A700"
              size="sm"
              variant="fill"
              onClick={handleButtonClick}
            >
              <Img
                className="h-6"
                src="images/img_iconplus.svg"
                alt="iconplus"
              />
            </Button>
          </div>
          {showAnswer && (
            <Text className="text-gray-900_01 mt-2" size="txtPoppinsRegular16">
              {answerText}
            </Text>
          )}
        </div>
      </div>
    </>
  );
};

DesignPricingFaq.defaultProps = {
  questiontext: "What are the pricing plans offered by MediYatri?",
  answertext: "MediYatri provides flexible pricing plans tailored to your healthcare needs. Our plans encompass various services, including hospital connections, travel arrangements, accommodations, and visa assistance. Explore the options to find the perfect plan for your unique healthcare journey.",
};

export default DesignPricingFaq;
