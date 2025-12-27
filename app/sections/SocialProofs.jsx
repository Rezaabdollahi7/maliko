"use client";

import CountUp from "../components/CountUp";
import Title from "../components/Title";

export default function SocialProofs() {
  return (
    <section className="flex flex-col my-32">
      <Title highlightText="متمایز میکند" underlineWidth={50}>
        آنچه مالیکو را
      </Title>
      <section className="w-full md:max-w-6xl mx-auto md:rounded-full py-6 mt-16 mb-32 px-6 grid grid-cols-1 md:grid-cols-3 gap-5 bg-primary">
        <div className="item col-span-1 flex flex-col md:flex-row gap-2 items-center justify-center text-base md:text-xl lg:text-2xl text-white/70 border-b-4 md:border-b-0 md:border-l-4 border-double pb-4 md:pb-0">
          <p className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            <CountUp end={5000} duration={2000} suffix="+" />
          </p>
          کاربر فعال
        </div>

        <div className="item col-span-1 flex flex-col md:flex-row gap-2 items-center justify-center text-base md:text-xl lg:text-2xl text-white/70 border-b-4 md:border-b-0 md:border-l-4 border-double pb-4 md:pb-0">
          <p className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            <CountUp end={200} duration={1000} />
          </p>
          <span className="text-center">هزار تراکنش ثبت شده</span>
        </div>

        <div className="item col-span-1 flex flex-col md:flex-row gap-2 items-center justify-center text-base md:text-xl lg:text-2xl text-white/70 pb-4 md:pb-0">
          <p className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            <CountUp end={4.8} duration={1000} />
          </p>
          امتیاز کافه بازار
        </div>
      </section>
    </section>
  );
}
