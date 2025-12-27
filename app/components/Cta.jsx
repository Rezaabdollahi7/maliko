import React from "react";
import downloadImg from "../../public/images/phone-image.webp";
import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";

export default function Cta() {
  return (
    <section className="container mx-auto bg-primary rounded-3xl lg:rounded-full px-6 md:px-12 lg:px-20 py-8 md:py-9 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 relative cta-shadow">
      <div className="flex flex-col gap-3 md:gap-4 lg:border-r-4 border-white lg:px-4 text-center lg:text-right order-1">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black">
          اپلیکیشن هوشمند مالیکو
        </h2>
        <span className="text-base md:text-lg lg:text-xl text-white/70 font-semibold">
          مدیر جیب شما
        </span>
      </div>

      <div className="order-2 flex justify-center items-center lg:block">
        <Image
          className="lg:absolute lg:top-1/2 lg:right-1/2 lg:translate-x-1/2 lg:-translate-y-1/2 w-64 md:w-80 lg:w-auto"
          alt="دانلود اپلیکیشن مالیکو"
          src={downloadImg}
          height={320}
          width={460}
        />
      </div>

      <div className="order-3 bg-white rounded-full pr-4 pl-2 py-2 flex gap-6 md:gap-12 justify-center items-center w-full lg:w-max lg:mr-auto transition-all hover:scale-105 active:scale-95 hover:cursor-pointer mx-auto lg:mx-0 lg:my-auto">
        <span className="text-primary font-semibold text-lg md:text-xl">
          دانلود اپلیکیشن
        </span>
        <div className="p-3 size-12 bg-primary text-white rounded-full shrink-0">
          <ArrowDownToLine />
        </div>
      </div>
    </section>
  );
}
