import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import DesignHomepageColumnFour from "components/HomePageColumn4";
import DesignHomepageColumnOne from "components/HomePageColumn1";
import DesignHomepageFooterwhite from "components/HomePageFooter";
import DesignHomepageHomepagesignup from "components/HomePageSignup";
import DesignHomepageHospitalcard from "components/HospitalCard";
import DesignHomepageOnboardedcard from "components/OnboardedCard";
import DesignHomepagePricingbronze from "components/PricingBronze";
import DesignHomepagePricingcustom from "components/PricingCustom";
import DesignHomepagePricinggold from "components/PricingGold";
import DesignHomepagePricingsilver from "components/PricingSilver";
import Header from "components/Header";

import axios from 'axios';


const DesignHomepagePage = () => {
  const designHomepageOnboardedcardPropList = [
    {},
    {
      doctorsonboardedcount: "50+",
      userimage: "images/img_image70.png",
      doctorsonboardedtext: "hospitals tied up",
    },
    { doctorsonboardedtext: "lives impacted", doctorsonboardedcount: "10K+" },
    {
      doctorsonboardedcount: "3",
      userimage: "images/img_image70.png",
      doctorsonboardedtext: "countries",
    },
  ];

    const [showMore, setShowMore] = useState(false);

    const [cardsToShow, setCardsToShow] = useState(4);

    const handleSeeMoreClick = (e) => {
      setShowMore(!showMore);
      if (!showMore) {
        setCardsToShow(hospitals.length);
        e.preventDefault();
      } else {
        setCardsToShow(4);
        e.preventDefault();
      }
    };

      const [cities, setCities] = useState([]);
      const [selectedCity, setSelectedCity] = useState("");
      const [hospitals, setHospitals] = useState([]);

        useEffect(() => {
    // Fetch cities from the backend
    axios.get("http://localhost:5000/api/cities")
      .then(response => {
        setCities(response.data);
        setSelectedCity(response.data[0]); // Set default selected city
      })
      .catch(error => {
        console.error("Error fetching cities:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch hospitals based on selected city
    if (selectedCity) {
      axios.get(`http://localhost:5000/api/hospitals/${selectedCity}`)
        .then(response => {
          setHospitals(response.data);
        })
        .catch(error => {
          console.error("Error fetching hospitals:", error);
        });
    }
  }, [selectedCity]);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };


  const handleSelectCityClick = () => {
    const cityDropdown = document.getElementById("cityDropdown");
    cityDropdown.classList.toggle("hidden");
  };



  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-10 h-20 md:h-auto items-center justify-between md:px-5 px-[100px] py-2 w-full" />
        <div className="flex flex-col gap-10 items-start justify-start md:px-10 sm:px-5 px-[100px] w-auto md:w-full">
          <div className="md:h-[1561px] h-[820px] relative w-full">
            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[100%]">
              <div className="flex md:flex-col flex-row gap-5 h-[820px] md:h-auto items-start justify-between max-w-[1240px] py-[60px] w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start max-w-[715px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="leading-[55.00px] max-w-[715px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                      size="txtPoppinsBold36"
                    >
                      <span className="text-gray-900 font-poppins text-left font-bold">
                        Your Healthcare Journey{" "}
                      </span>
                      <span className="text-light_blue-900 font-poppins text-left font-bold">
                        Made Easy with MediYatri
                      </span>
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="leading-[29.00px] max-w-[715px] md:max-w-full text-base text-gray-900"
                        size="txtPoppinsRegular16"
                      >
                        <>
                          Imagine a friend who knows everything about hospitals,
                          doctors, travel plans, and places to stay. That&#39;s
                          us! We&#39;re like your personal guide, making sure
                          you have all the info you need.
                        </>
                      </Text>
                      <Text
                        className="leading-[29.00px] max-w-[715px] md:max-w-full text-base text-gray-900"
                        size="txtPoppinsRegular16"
                      >
                        Come on in! MediYatri is where your health adventure
                        begins. Each click is a step toward a healthier, happier
                        you.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start rounded-lg w-full">
                    <Img
                      className="h-[413px] md:h-auto object-cover rounded-lg w-full"
                      src="images/img_image65.png"
                      alt="imageSixtyFive"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-10 h-[760px] md:h-auto items-center justify-center w-auto sm:w-full">
                  <DesignHomepageHomepagesignup className="bg-white-A700 flex flex-col gap-6 items-start justify-start sm:px-5 px-8 py-[60px] rounded-lg shadow-bs w-[400px] sm:w-full" />
                  <div className="bg-white-A700 border-2 border-light_blue-900 border-solid flex flex-col items-center justify-center px-5 py-2.5 rounded-lg w-[336px]">
                    <Text
                      className="text-base text-light_blue-900 w-auto"
                      size="txtPoppinsBold16"
                    >
                      Watch MediYatri Demo
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <DesignHomepageColumnFour className="fixed bottom-[5%] flex flex-col gap-4 h-[265px] md:h-auto items-end justify-end right-[0] w-[249px]" />
          </div>

    <div className="flex flex-col gap-10 items-center justify-start max-w-[1240px] mx-auto py-8 w-full">
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <Text
          className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 w-full"
          size="txtPoppinsBold36"
        >
          Explore Top Hospitals
        </Text>
        <Text
          className="text-center text-gray-900 text-lg w-full"
          size="txtPoppinsRegular18"
        >
          Explore the network of hospitals we are tied with, and rest assured that you're in capable hands.
        </Text>
      </div>

      <div className="flex flex-col gap-4 items-end justify-start w-auto md:w-full">
        <Button
          onClick={handleSelectCityClick}
          className="border border-blue_gray-400 border-solid cursor-pointer flex items-center justify-center min-w-[138px] rounded"
          rightIcon={
            <div className="h-6 mb-px ml-1.5 pl-[7px] pr-1.5 w-6 bg-white-A700 py-[9px]">
              <Img
                className="rounded-[1px]"
                src="images/img_arrowdown.svg"
                alt="arrow_down"
              />
            </div>
          }
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-gray-900 font-medium leading-[normal] text-base text-center">
            Select City
          </div>
        </Button>

        <div
          id="cityDropdown"
          className="absolute mt-14 w-[138px] bg-white-A700 rounded shadow-md hidden"
        >
          {cities.map((city, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setSelectedCity(city);
                handleSelectCityClick();
              }}
            >
              {city}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 items-start justify-end w-auto md:w-full">
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-auto md:w-full">

        {/* Map hospitals based on cardsToShow */}
        {hospitals.slice(0, cardsToShow).map((hospitalName, index) => (
            <DesignHomepageHospitalcard
                key={index}
                hospitalName={hospitalName}
                city={selectedCity}
                className="bg-white-A700 flex flex-col gap-2.5 items-start justify-start px-5 py-6 rounded-lg shadow-bs2 w-full"
            />
        ))}

          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-3 w-auto">
        <a
          href="/"
          className="text-light_blue-A700 text-right text-sm tracking-[0.30px] w-auto"
          onClick={handleSeeMoreClick}
        >
          <Text size="txtPoppinsRegular14">{showMore ? 'See Less' : 'See More'}</Text>
        </a>
      </div>
    </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1240px] mx-auto py-8 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 w-full"
                size="txtPoppinsBold36"
              >
                We are expanding
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              {designHomepageOnboardedcardPropList.map((props, index) => (
                <React.Fragment key={`DesignHomepageOnboardedcard${index}`}>
                  <DesignHomepageOnboardedcard
                    className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-start justify-start px-5 py-6 rounded-lg shadow-bs3 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-center justify-start max-w-[1240px] mx-auto py-8 w-full">
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-light_blue-900 text-xl w-full"
                size="txtPoppinsMedium20"
              >
                WHY US?
              </Text>
              <Text
                className="leading-[48.00px] max-w-[611px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900 tracking-[0.50px]"
                size="txtPoppinsBold32"
              >
                Empowering Your Healthcare Journey with Excellence and
                Compassion
              </Text>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="leading-[34.00px] max-w-[611px] md:max-w-full text-gray-900 text-lg"
                  size="txtPoppinsRegular18"
                >
                  <>
                    At MediYatri, we understand that your health is a priority,
                    and navigating the intricacies of healthcare can be
                    overwhelming. Here&#39;s why choosing MediYatri is the right
                    decision for your medical journey in India:
                  </>
                </Text>
                <Link to="/services">
                  <Button
                    className="border-2 border-light_blue-900 border-solid cursor-pointer font-bold min-w-[131px] text-base text-center"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col h-[360px] md:h-auto items-center justify-start w-auto md:w-full">
              <Img
                className="md:h-[360px] sm:h-auto h-full object-cover rounded-bl-lg rounded-br-lg w-[609px] md:w-full"
                src="images/img_layer01.png"
                alt="layerOne"
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-center max-w-[1240px] mx-auto py-8 w-full">
            <div className="flex flex-col gap-2 items-center justify-center w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 w-full"
                size="txtPoppinsBold36"
              >
                Tailored Excellence
              </Text>
              <Text
                className="leading-[34.00px] max-w-[1240px] md:max-w-full text-center text-gray-900 text-lg"
                size="txtPoppinsRegular18"
              >
                <>
                  At MediYatri, we recognise that each individual&#39;s
                  healthcare needs are unique. That&#39;s why we proudly present
                  our meticulously crafted Silver, Gold, and Platinum services,
                  designed to cater to a variety of preferences and
                  requirements.
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex md:flex-col flex-row gap-5 items-center justify-center w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                  orientation="horizontal"
                >
                  <DesignHomepagePricingbronze className="bg-white-A700 hover:cursor-pointer flex flex-col gap-6 h-full items-start justify-between hover:outline hover:outline-[1px] hover:outline-amber-A400 sm:px-5 px-6 py-8 rounded-[16px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full" />
                  <DesignHomepagePricingsilver className="bg-white-A700 hover:cursor-pointer flex flex-col gap-6 h-full items-start justify-between hover:outline hover:outline-[1px] hover:outline-amber-A400 sm:px-5 px-6 py-8 rounded-[16px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full" />
                  <DesignHomepagePricinggold
                    className="bg-white-A700 hover:cursor-pointer flex flex-col gap-5 h-full items-start justify-start hover:outline outline hover:outline-[1px] outline-[1px] hover:outline-amber-A400 outline-amber-A400 sm:px-5 px-6 py-8 rounded-[16px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full"
                    checkmark="images/img_checkmark_gray_900.svg"
                    linktext1="Premium Hospitals"
                    checkmarkOne="images/img_checkmark_gray_900.svg"
                    linktext2="Luxury Travel Services"
                    checkmarkTwo="images/img_checkmark_gray_900.svg"
                    linktext3="White-Glove Visa Service"
                    checkmarkThree="images/img_checkmark_gray_900.svg"
                    linktext4="Elite VIP Accommodation"
                    checkmarkFour="images/img_checkmark_gray_900.svg"
                    linktext5="24/7 VIP Customer Concierge"
                  />
                </List>
                <DesignHomepagePricingcustom className="bg-white-A700 flex flex-1 flex-col gap-6 h-full items-start justify-between sm:px-5 px-6 py-8 rounded-[16px] shadow-bs3 w-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-center max-w-[1240px] mx-auto py-8 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 w-full"
                size="txtPoppinsBold36"
              >
                Our Customers Love us !
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              {new Array(3).fill({}).map((props, index) => (
                <React.Fragment key={`DesignHomepageColumnOne${index}`}>
                  <DesignHomepageColumnOne
                    className="flex flex-1 flex-col gap-5 items-start justify-start rounded-lg shadow-bs5 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
        </div>
        <footer className="flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-light_blue-900 flex md:flex-col flex-row md:gap-10 gap-[125px] items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[100px] py-8 w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtPoppinsBold24"
                  >
                    Connect with Us for Tailored Assistance
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsRegular16WhiteA700"
                  >
                    We will help to customise your travel journey, we are just a
                    click away.
                  </Text>
                </div>
                <Link to="/getintouch">
                  <Button
                    className="border-2 border-light_blue-900 border-solid cursor-pointer font-bold min-w-[142px] text-base text-center"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <div className="flex flex-row gap-[17px] items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconphone.svg"
                    alt="iconphone"
                  />
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    +91 9876543210
                  </Text>
                </div>
                <div className="flex flex-row gap-[17px] items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconemail.svg"
                    alt="iconemail"
                  />
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    info@mediyatri.com
                  </Text>
                </div>
              </div>
            </div>
            <DesignHomepageFooterwhite className="flex flex-col items-center justify-center w-full md:w-full" />
          </div>
        </footer>
    </>
  );
};

export default DesignHomepagePage;
