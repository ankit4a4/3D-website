export default function AboutUs() {
  return (
    <section
      id="about"
      className="w-full min-h-[100vh] flex items-center justify-center px-[4vw] py-[6vh] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[20vh] h-[20vh] md:w-[15vw] md:h-[15vw] bg-[#3298c9]/20 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 animate-spin-slow"></div>
      <div className="absolute bottom-0 right-0 w-[25vh] h-[25vh] md:w-[18vw] md:h-[18vw] bg-[#3298c9]/20 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw] w-full max-w-[90vw] relative z-10">
        {/* Left Column - Intro Text */}
        <div className="flex flex-col justify-center text-gray-800">
          <div className="mb-[2vh]">
            <span className="text-[#3298c9] font-semibold text-[3vh] md:text-[1.5vw] tracking-wider">
              WHO WE ARE
            </span>
            <h2 className="text-[5vh] md:text-[3vw] font-bold leading-tight text-white mt-[1vh]">
              About <span className="text-[#3298c9]">Us</span>
            </h2>
            <div className="h-[0.8vh] w-[10vh] md:w-[5vw] bg-[#3298c9] mt-[2vh] rounded-full"></div>
          </div>

          <p className="text-[2.8vh] md:text-[1.5vw] leading-relaxed text-gray-200">
            We are a dedicated SEO & SMM agency helping businesses grow their
            online presence. From improving search rankings to creating viral
            social media campaigns, we deliver strategies that bring real
            results.
          </p>

          <div className="flex mt-[4vh] space-x-[2vw]">
            <div className="flex items-center">
              <div className="w-[3vh] h-[3vh] md:w-[1.5vw] md:h-[1.5vw] bg-[#3298c9]/30 rounded-full flex items-center justify-center mr-[1vw]">
                <svg
                  className="w-[2vh] h-[2vh] md:w-[1vw] md:h-[1vw] text-[#3298c9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="text-[2.5vh] md:text-[1.2vw] text-gray-200">SEO Experts</span>
            </div>
            <div className="flex items-center">
              <div className="w-[3vh] h-[3vh] md:w-[1.5vw] md:h-[1.5vw] bg-[#3298c9]/30 rounded-full flex items-center justify-center mr-[1vw]">
                <svg
                  className="w-[2vh] h-[2vh] md:w-[1vw] md:h-[1vw] text-[#3298c9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="text-[2.5vh] md:text-[1.2vw] text-gray-200">SMM Specialists</span>
            </div>
          </div>
        </div>

        {/* Center Column - Animated Graphic */}
        <div className="flex items-center justify-center relative">
          <div className="relative w-[60vh] h-[60vh] md:w-[35vw] md:h-[35vw] max-w-full flex items-center justify-center">
            {/* Outer circle */}
            <div className="absolute w-[80%] h-[80%] border-[0.5vh] md:border-[0.4vw] border-[#3298c9]/30 rounded-full animate-pulse-slow"></div>

            {/* Middle circle */}
            <div className="absolute w-[60%] h-[60%] border-[0.5vh] md:border-[0.4vw] border-[#3298c9]/30 rounded-full animate-spin-slow"></div>

            {/* Inner circle with icon */}
            <div className="absolute w-[40%] h-[40%] bg-[#3298c9] rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-[50%] h-[50%] text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-[1vh] left-[8vw] w-[6vh] h-[6vh] md:w-[3vw] md:h-[3vw] bg-white rounded-lg shadow-md flex items-center justify-center animate-float">
              <svg
                className="w-[4vh] h-[4vh] md:w-[2vw] md:h-[2vw] text-[#3298c9]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                ></path>
              </svg>
            </div>

            <div className="absolute -bottom-[1vh] right-[8vw] w-[6vh] h-[6vh] md:w-[3vw] md:h-[3vw] bg-white rounded-lg shadow-md flex items-center justify-center animate-float-reverse">
              <svg
                className="w-[4vh] h-[4vh] md:w-[2vw] md:h-[2vw] text-[#3298c9]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column - More Details */}
        <div className="flex flex-col justify-center ">
          <p className="text-[2.8vh] md:text-[1.5vw] leading-relaxed text-gray-200">
            Our team combines creativity and data-driven strategies to boost
            traffic, enhance engagement, and generate high-quality leads for
            your business.
          </p>

          <div className="mt-[4vh] space-y-[3vh] md:space-y-[1.5vw]">
            {["Customized strategies for your business goals",
              "Transparent reporting and analytics",
              "Continuous optimization for maximum ROI"].map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="flex-shrink-0 mt-[0.5vh]">
                  <div className="w-[2.5vh] h-[2.5vh] md:w-[1.2vw] md:h-[1.2vw] bg-[#3298c9]/30 rounded-full flex items-center justify-center">
                    <div className="w-[0.9vh] h-[0.9vh] md:w-[0.5vw] md:h-[0.5vw] bg-[#3298c9] rounded-full"></div>
                  </div>
                </div>
                <p className="ml-[1vw] text-[2.5vh] md:text-[1.3vw] text-gray-200">{item}</p>
              </div>
            ))}
          </div>

          <button className="mt-[4vh] px-[6vh] md:px-[2vw] py-[2vh] md:py-[1vw] bg-[#3298c9] text-white rounded-[1vh] md:rounded-[0.5vw] text-[2.5vh] md:text-[1.3vw] font-semibold hover:bg-[#2877a6] transition-all duration-300 transform hover:-translate-y-[0.5vh] w-fit flex items-center shadow-md hover:shadow-lg">
            Learn More
            <svg
              className="ml-[1vw] w-[2.5vh] h-[2.5vh] md:w-[1.2vw] md:h-[1.2vw]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-slow {0%,100%{opacity:0.7}50%{opacity:1}}
        @keyframes spin-slow {from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes float {0%,100%{transform:translateY(0)}50%{transform:translateY(-2vh)}}
        @keyframes float-reverse {0%,100%{transform:translateY(0)}50%{transform:translateY(2vh)}}
        .animate-pulse-slow{animation:pulse-slow 6s infinite;}
        .animate-spin-slow{animation:spin-slow 20s linear infinite;}
        .animate-float{animation:float 4s ease-in-out infinite;}
        .animate-float-reverse{animation:float-reverse 4s ease-in-out infinite;}
      `}</style>
    </section>
  );
}
