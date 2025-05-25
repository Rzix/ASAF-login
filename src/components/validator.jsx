import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import phoneIcon from "../media/icons/phone_6416393.png";
import joi from "joi";

const phonePattern = /^(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$/;
const schema = joi.object({
  phone: joi.string()
    .pattern(phonePattern)
    .required()
    .messages({
      "any.required": "لطفا شماره تلفن را با 09 و درست وارد کنید",
      "string.empty": "لطفا شماره تلفن را با 09 و درست وارد کنید",
      "string.pattern.base": "لطفا شماره تلفن را با 09 و درست وارد کنید",
    }),
});

const formatPhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, "");
  return cleaned.replace(/^(\d{4})(\d{0,3})(\d{0,4}).*/, "$1 $2 $3").trim();
};

const NumericInput = ({ onSubmit }) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const input = e.target.value;
    setPhone(formatPhoneNumber(input));
  };

  const handleSubmit = () => {
    const cleanedPhone = phone.replace(/\s/g, "");
    const validationResult = schema.validate({ phone: cleanedPhone });
    
    if (validationResult.error) {
      setError(validationResult.error.details[0].message);
    } else {
      console.log("شماره تلفن ارسال شد:", cleanedPhone);
      setError("");
      onSubmit && onSubmit(cleanedPhone);
    }
  };

  const isButtonEnabled = phonePattern.test(phone.replace(/\s/g, ""));

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
    <div className="flex items-center justify-center">
      <div className="max-w-md sm:max-w-sm space-y-8">
        <div className="text-end">
          <h2 className="mt-6 text-3xl font-extrabold text-white font-kalameh">
            ورود/ثبت نام
          </h2>
        </div>
        <div className="sendPhone">
          <div className="w-full flex flex-row bg-white rounded-xl">
            <div className="flex justify-between items-center pr-4 w-full rounded-xl md:w-[20rem]">
              <input
                type="text"
                value={phone}
                onChange={handleInputChange}
                maxLength={13}
                className="h-12 w-full text-center appearance-none bg-transparent focus:outline-none text-[#a8a8a8] bg-[#dcddde] text-xl"
                placeholder="09** *** ****"
              />
              <div className="phoneContent w-[20%] rounded-md flex items-center justify-center">
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
            disabled={!isButtonEnabled}
            className={`group relative flex justify-center py-2 px-20 font-kalameh border border-gray-300 border-opacity-50 text-sm font-medium rounded-md text-white transition-transform duration-200 ${
              isButtonEnabled
                ? "bg-gradient-to-l from-customBlueLight to-customBlueDark hover:bg-gradient-to-r hover:scale-110 active:scale-95"
                : "bg-slate-400 cursor-not-allowed"
            }`}
          >
            ورود
          </motion.button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default NumericInput;