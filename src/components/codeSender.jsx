import React, { useState, useEffect } from "react";
import keyPhone from "../media/icons/key_17489768.png";
import { motion } from "framer-motion";

const CodeSender = () => {
    const savedState = JSON.parse(localStorage.getItem('codeSenderState')) || {
        code: "",
        timer: 60,
        isCodeExpired: false,
        isButtonEnabled: false,
        error: "",
    };

    const [state, setState] = useState(savedState);

    const codePattern = /^\d{5}$/;

    // شروع تایمر زمانی که کامپوننت mount می‌شود
    useEffect(() => {
        if (state.timer > 0) {
            const interval = setInterval(() => {
                setState((prev) => {
                    const newState = { ...prev, timer: prev.timer - 1 };
                    localStorage.setItem('codeSenderState', JSON.stringify(newState));
                    return newState;
                });
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setState((prev) => {
                const newState = { ...prev, isCodeExpired: true };
                localStorage.setItem('codeSenderState', JSON.stringify(newState));
                return newState;
            });
        }
    }, [state.timer]);  // زمانی که timer تغییر می‌کند، این effect اجرا می‌شود

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setState((prev) => {
                const newState = {
                    ...prev,
                    code: value,
                    isButtonEnabled: codePattern.test(value),
                    error: "",
                };
                localStorage.setItem('codeSenderState', JSON.stringify(newState));
                return newState;
            });
        }
    };

    const handleSubmit = () => {
        if (!codePattern.test(state.code)) {
            setState((prev) => ({ ...prev, error: "کد وارد شده معتبر نیست" }));
            return;
        }
        console.log("کد تایید وارد شد:", state.code);
    };

    const handleResendCode = () => {
        if (state.timer > 0) return;
        
        setState((prev) => {
            const newState = {
                ...prev,
                isCodeExpired: false,
                timer: 60,
                code: "",
                error: "",
            };
            localStorage.setItem('codeSenderState', JSON.stringify(newState));
            return newState;
        });
        console.log("کد مجدد ارسال شد");
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();  // اگر Enter فشرده شد، متد handleSubmit اجرا می‌شود
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="max-w-md sm:max-w-sm space-y-8">
                <div className="text-end">
                    <h2 className="mt-6 text-3xl font-extrabold text-white font-kalameh">
                         کد پیامکی
                    </h2>
                </div>

                <div className="sendCode">
                    <div className="w-full flex flex-row bg-white rounded-xl">
                        <div className="flex justify-between items-center pr-4 w-full rounded-xl md:w-[20rem]">
                            <input
                                type="text"
                                value={state.code}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}  
                                maxLength={5}
                                className="h-12 w-full text-center appearance-none bg-transparent focus:outline-none text-[#a8a8a8] bg-[#dcddde] text-xl font-kalameh"
                                placeholder="کد 5 رقمی"
                                inputMode="numeric"
                            />
                        </div>
                        <div className="phoneContent w-[20%] rounded-md flex items-center justify-center">
                            <div className="w-8">
                                <img src={keyPhone} alt="key icon" />
                            </div>
                        </div>
                    </div>
                </div>

                {state.error && <p className="text-red-500 text-center">{state.error}</p>}

                <div className="flex justify-center items-center space-x-4 ">
                    <div className="flex items-center space-x-2 ">
                        <a
                            href="#"
                            onClick={handleResendCode}
                            className={`py-2 px-4 bg-[#dbdbdb] rounded-lg text-[#6b6b6b] font-kalameh text-sm `}
                            disabled={state.timer > 0}
                        >
                            ارسال مجدد کد&nbsp;&nbsp;&nbsp;
                            {state.isCodeExpired ? (
                                <span className="text-red-500 font-bold"><br />کد منقضی شد</span>
                            ) : (
                                <span className="text-black font-semibold  border-r-2 border-[#72bef6] ">&nbsp;&nbsp;&nbsp;00:{String(state.timer).padStart(2, '0')}</span>
                            )}
                        </a>
                    </div>
                    <motion.button
                        onClick={handleSubmit}
                        className={`group relative flex justify-center py-2 px-10 font-kalameh border border-gray-300 border-opacity-50 text-sm font-medium rounded-md text-white ${state.isButtonEnabled
                            ? "bg-gradient-to-l from-customBlueLight to-customBlueDark hover:bg-gradient-to-r"
                            : "bg-slate-400 cursor-not-allowed"
                            } focus:outline-none focus:ring-1 transition-colors duration-300`}
                        whileHover={state.isButtonEnabled ? { scale: 1.23 } : {}}
                        whileTap={state.isButtonEnabled ? { scale: 0.98 } : {}}
                        disabled={!state.isButtonEnabled}
                    >
                        ورود
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default CodeSender;