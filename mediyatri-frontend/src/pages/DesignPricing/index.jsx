import React, {useState} from "react";

import { Button, CheckBox, Img, List, Text } from "components";
import DesignHomepageColumnFour from "components/HomePageColumn4";
import DesignHomepagePricingbronze from "components/PricingBronze";
import DesignHomepagePricingcustom from "components/PricingCustom";
import DesignHomepagePricinggold from "components/PricingGold";
import DesignHomepagePricingsilver from "components/PricingSilver";
import DesignPricingFaq from "components/PricingFaq";
import Footer from "components/Footer";
import Header from "components/Header";

const DesignPricingPage = () => {
  const designPricingFaqPropList = [
    {},
    { questiontext: 
        "How does MediYatri determine the cost of its services?",
      answertext: 
        "Our pricing considers the complexity of your healthcare requirements, travel arrangements, and the level of support needed. We strive to provide transparent and competitive pricing, ensuring that you receive exceptional value for the comprehensive services we offer.",
   },
    {
      questiontext:
        "Are there additional fees beyond the listed pricing plans?",
      answertext:
        "MediYatri is committed to transparency. Our pricing plans are designed to cover a wide range of services, and we strive to minimize additional fees. Any potential extra costs will be clearly communicated to you upfront, ensuring no surprises in your healthcare journey.",
    },
    {
      questiontext: 
        "Can I customize a pricing plan to fit my specific needs?",
      answertext: 
        "Absolutely! MediYatri understands that every healthcare journey is unique. Contact our customer support to discuss your specific requirements, and we'll work with you to tailor a pricing plan that aligns with your individual needs and preferences."
    },
    { questiontext: 
        "Is there a refund policy for MediYatri pricing plans?",
      answertext: 
        "MediYatri stands by its commitment to customer satisfaction. If, for any reason, you are dissatisfied with our services, please refer to our refund policy outlined in the terms and conditions. We aim to address your concerns promptly and ensure a positive experience with MediYatri.",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-10 h-20 md:h-auto items-center justify-between md:px-5 px-[100px] py-2 w-full" />
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1440px] mt-[60px] md:px-10 sm:px-5 px-[100px] w-full">
          <div className="md:h-[1829px] sm:h-[737px] h-[746px] relative w-full">
            <div className="absolute flex flex-col gap-8 h-max inset-y-[0] items-center justify-center left-[0] max-w-[1240px] my-auto w-full">
              <div className="flex flex-col gap-2 items-center justify-center w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
                  size="txtPoppinsBold36Black900"
                >
                  Choose the Plan that suits you
                </Text>
                <Text
                  className="leading-[34.00px] max-w-[1240px] md:max-w-full text-black-900 text-center text-lg"
                  size="txtPoppinsRegular18Black900"
                >
                  <>
                    At MediYatri, we recognise that each individual&#39;s
                    healthcare needs are unique. That&#39;s why we proudly
                    present our meticulously crafted Silver, Gold, and Platinum
                    services, designed to cater to a variety of preferences and
                    requirements.
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex md:flex-col flex-row gap-5 items-center justify-center w-full">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                    orientation="horizontal"
                  >
                    <DesignHomepagePricingbronze className="bg-white-A700 flex flex-col gap-6 h-full items-start justify-between sm:px-5 px-6 py-8 rounded-[16px] shadow-bs3 w-full" />
                    <DesignHomepagePricingsilver
                      className="bg-white-A700 flex flex-col gap-6 h-full items-start justify-between sm:px-5 px-6 py-8 rounded-[16px] shadow-bs3 w-full"
                      trendingicon="images/img_icontrending_light_blue_900.svg"
                    />
                  </List>
                  <DesignHomepagePricinggold className="bg-white-A700 flex flex-1 flex-col gap-6 h-full items-start justify-between outline outline-[1px] outline-amber-A400 sm:px-5 px-6 py-8 rounded-[16px] shadow-bs4 w-full" />
                  <DesignHomepagePricingcustom
                    className="bg-white-A700 flex flex-1 flex-col gap-6 h-full items-start justify-start sm:px-5 px-6 py-8 rounded-[16px] shadow-bs3 w-full"
                    makepackagetext="Craft your unique path to well-being with MediYatri Healthcare Concierge. Tailor your journey by handpicking the services you need – from hospital and doctor information to flight and visa arrangements, and hassle-free hotel bookings. Our dedicated customer service is at your service 24/7. Elevate your healthcare journey with MediYatri, because individualized well-being is our commitment to you."
                  />
                </div>
              </div>
            </div>
            <DesignHomepageColumnFour className="fixed bottom-[5%] flex flex-col gap-4 h-[265px] md:h-auto items-end justify-end right-[0] w-[249px]" />
          </div>
          <div className="flex flex-col gap-10 items-center justify-center max-w-[630px] mx-auto w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
              size="txtPoppinsSemiBold28"
            >
              Frequently Asked Questions
            </Text>
            <div className="flex flex-col gap-8 items-start justify-center w-auto md:w-full">
              <List
                className="flex flex-col gap-5 items-start w-auto"
                orientation="vertical"
              >
                {designPricingFaqPropList.map((props, index) => (
                  <React.Fragment key={`DesignPricingFaq${index}`}>
                    <DesignPricingFaq
                      className="flex flex-col items-start justify-start max-w-[1240px] my-0 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
              <div className="flex flex-row gap-2 items-center justify-start sm:px-5 px-8 w-auto sm:w-full">
                <Text
                  className="text-gray-900_02 text-sm tracking-[0.30px] w-auto"
                  size="txtPoppinsRegular14Gray90002"
                >
                  If you need further information,
                </Text>
                <div className="flex flex-col items-start justify-start py-3 w-auto">
                  <Text
                    className="text-light_blue-A700 text-right text-sm tracking-[0.30px] w-auto"
                    size="txtPoppinsRegular14"
                  >
                    please contact us.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-[110px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default DesignPricingPage;
