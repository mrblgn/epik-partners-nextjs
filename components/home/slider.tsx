import React from "react";

const Slider = () => (
  <section className="index-first">
    <div className="slider" />
    <div className="slider_texts">
      <span className="slider_p">
        Ekibimiz sizlere en etkili çözümleri sunar.
        <hr className="slider_hr" />
      </span>
      <h2 className="slider_h2">
        Etkili ve Güvenli Hukuki Çözümler
      </h2>
    </div>
  </section>
  // <section className="relative flex mx-auto overflow-hidden w-screen h-screen">
  //   <div className="absolute flex flex-1 w-screen h-screen bg-[url(@/assets/images/index-slider-1.jpg)] bg-cover animate-move" />
  //   <div className="flex flex-1 flex-col z-10 justify-center items-start p-16 text-white">
  //     <span className="text-3xl text-shadow-page">
  //       Ekibimiz sizlere en etkili çözümleri sunar.
  //       <hr className="" />
  //     </span>
  //     <h2 className="text-6xl font-semibold text-shadow-page my-10 tracking-wide">
  //       Etkili ve Güvenli Hukuki Çözümler
  //     </h2>
  //   </div>
  // </section>
);

export default Slider;
