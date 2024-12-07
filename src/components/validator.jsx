import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import phoneIcon from "../media/icons/phone_6416393.png";

const NumericInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phonePattern = /^09\d{9}$/;

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const formatted = cleaned
      .replace(/^(\d{4})(\d{0,3})(\d{0,4}).*/, "$1 $2 $3")
      .trim();
    return formatted;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const formatted = formatPhoneNumber(value);
    setPhoneNumber(formatted);
  };

  const handleSubmit = () => {
    const cleanedPhone = phoneNumber.replace(/\s/g, "");
    if (!phonePattern.test(cleanedPhone)) {
      return;
    }
    console.log("شماره تلفن ارسال شد:", cleanedPhone);
  };

  const isButtonEnabled = phonePattern.test(phoneNumber.replace(/\s/g, ""));

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && isButtonEnabled) {
      handleSubmit();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isButtonEnabled]);

  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-md sm:max-w-sm space-y-8">
        <div className="text-end">
          <h2 className="mt-6 text-3xl font-extrabold text-white font-kalameh">
            ورود/ثبت نام
          </h2>
        </div>
        <div className="sendPhone">
          <div className="w-full flex flex-row bg-white rounded-xl">
            <div className="flex justify-between items-center  pr-4 w-full rounded-xl md:w-[20rem]">
              <input
                type="text"
                value={phoneNumber}
                onChange={handleInputChange}
                maxLength={13}
                className="h-12 w-full text-center appearance-none bg-transparent focus:outline-none text-[#a8a8a8] bg-[#dcddde] text-xl"
                placeholder="09** *** ****"
              />
              <div className="phoneContent w-[20%] rounded-md flex items-center justify-center ">
                <div className="w-8">
                  <img src={phoneIcon} alt="Phone icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <motion.button
            onClick={handleSubmit}
            className={`group relative flex justify-center py-2 px-20 font-kalameh border border-gray-300 border-opacity-50 text-sm font-medium rounded-md text-white ${
              isButtonEnabled
                ? "bg-gradient-to-l from-customBlueLight to-customBlueDark hover:bg-gradient-to-r"
                : "bg-slate-400 cursor-not-allowed"
            } focus:outline-none focus:ring-1 transition-colors duration-300`}
            whileHover={isButtonEnabled ? { scale: 1.23 } : {}}
            whileTap={isButtonEnabled ? { scale: 0.98 } : {}}
          >
            ورود
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NumericInput;
