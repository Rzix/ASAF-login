import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumericInput from "./validator";
import CodeSender from "./codeSender";
import LogoAndContent from "./logoAndContent";



function Main() {
    const [currentStep, setCurrentStep] = useState("phone");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const handlePhoneSubmit = (phone) => {
        setPhoneNumber(phone);
        navigate(`/login/${phone}`);
        setCurrentStep("code");
    };

    return (
        <div className="main z-0 flex justify-center items-center relative overflow-hidden">
            <div className="video-wrapper w-screen h-screen">
                <video
                    src="/media/videos/Glowing clean_horizontal.mp4"
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="content absolute text-cyan-500 w-full">
                <div className="flex flex-col md:flex-row justify-center items-center w-full flex-wrap">
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

