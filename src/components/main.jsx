import React, { useState } from "react";
import NumericInput from "./validator";
import CodeSender from "./codeSender";
import LogoAndContent from "./logoAndContent";
import videoSrc from "../media/videos/Glowing clean_horizontal.mp4";

function Main() {
    const [currentStep, setCurrentStep] = useState("phone"); 
    const [phoneNumber, setPhoneNumber] = useState(""); 
    const handlePhoneSubmit = (phone) => {
        setPhoneNumber(phone); 
        setCurrentStep("code");
    };

    return (
        <div className="main z-0 flex justify-center items-center relative">
            <div className="video-wrapper w-screen h-screen">
                <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    className="object-cover"
                ></video>
            </div>

            <div className="content absolute text-cyan-500">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <LogoAndContent />
                    {currentStep === "phone" ? (
                        <NumericInput onSubmit={handlePhoneSubmit} />
                    ) : (
                        <CodeSender phoneNumber={phoneNumber} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Main;
