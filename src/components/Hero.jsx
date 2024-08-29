import React from "react";

export default function Hero() {
  return (
    <section className="p-20 h-screen flex flex-col items-center">
      {/* <div className="py-2 -ml-60 relative z-10 text-xl font-bold text-left whitespace-nowrap">
        <h2>Rexdan Tautho</h2>
      </div> */}

      <div className="flex relative">
        <div className="w-110 h-170 border-4 border-white bg-transparent relative z-0">
          <div className="w-60 h-120 bg-white"></div>
        </div>

        <div className="py-20 px-20 -ml-90 relative z-10">
          <div className="bg-gray-950 p-3">
            <h1 className="text-9xl font-aileron text-white font-bold">
              REXDAN
            </h1>
            <h1 className="text-9xl font-aileron text-white font-bold">
              TAUTHO.
            </h1>

            <h2 className="text-3xl font-bold text-left whitespace-nowrap">
              Junior Software Developer
            </h2>
            <h2 className="text-3xl font-bold text-left whitespace-nowrap">
              Information Technology Specialist
            </h2>
            <h2 className="text-5xl font-bold text-left whitespace-nowrap px-20 -mt-9">
              ______________
            </h2>
          </div>
        </div>
      </div>
      {/* <div className="py-2 -ml-80 relative z-10 text-xl font-bold text-left whitespace-nowrap">
        <h3>2020 - 2024</h3>
      </div> */}
    </section>
  );
}
