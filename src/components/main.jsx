// import React, { useState, useEffect } from "react";
// import videoBgDesk from "../media/videos/Glowing clean_horizontal.mp4";
// import videoBgMobile from "../media/videos/Glowing clean_vertical.mp4";
// import NumericInput from "./validator";
// import LogoAndContent from "./logoAndContent"; 

// function Main() {
//   const [videoSrc, setVideoSrc] = useState(videoBgDesk);

//   useEffect(() => {
//     const updateVideoSrc = () => {
//       if (window.innerWidth <= 768) {
//         setVideoSrc(videoBgMobile);
//       } else {
//         setVideoSrc(videoBgDesk);
//       }
//     };

//     updateVideoSrc();
//     window.addEventListener("resize", updateVideoSrc);
//     return () => window.removeEventListener("resize", updateVideoSrc);
//   }, []);

//   return (
//     <div className="main z-0 flex justify-center items-center relative">
//       <div className="video-wrapper">
//         <video src={videoSrc} autoPlay loop muted className="video-bg"></video>
//       </div>
//       <div className="content absolute text-cyan-500">
//         <div className="flex justify-center items-center  ">
//           <div><LogoAndContent/></div>
//           <div><NumericInput /></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;


import React from "react";
import NumericInput from "./validator";
import LogoAndContent from "./logoAndContent";
import videoSrc from "../media/videos/Glowing clean_horizontal.mp4";

function Main() {
  return (
    <div className="main z-0 flex justify-center items-center relative">
      
      <div className="video-wrapper w-screen h-screen ">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          className="object-cover"
        ></video>
      </div>

      
      <div className="content absolute text-cyan-500 ">
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <LogoAndContent />
          <NumericInput />
        </div>
      </div>
    </div>
  );
}

export default Main;
