"use client";

import CountUp from "../components/CountUp";

export default function SocialProofs() {
  return (
    <section className="max-w-6xl mx-auto  md:rounded-full py-6 mt-16 mb-32 px-6 grid grid-cols-1 md:grid-cols-3 gap-5 bg-primary border-r-12 border-yellow-400 border-l-12">
      <div className="item col-span-1 flex gap-2 items-center justify-center text-xl md:text-2xl text-white/70 border-b-4 md:border-b-0 md:border-l-4 border-double pb-4 md:pb-0">
        <p className="font-bold text-4xl md:text-5xl text-white">
          <CountUp end={5000} duration={2000} suffix="+" />
        </p>
        کاربر فعال
      </div>

      <div className="item col-span-1 flex gap-2 items-center justify-center text-xl md:text-2xl text-white/70 border-b-4 md:border-b-0 md:border-l-4 border-double pb-4 md:pb-0">
        <p className="font-bold text-4xl md:text-5xl text-white">
          <CountUp end={200} duration={1000} />
        </p>
        هزار تراکنش ثبت شده
      </div>

      <div className="item col-span-1 flex gap-2 items-center justify-center text-xl md:text-2xl text-white/70 pb-4 md:pb-0">
        <p className="font-bold text-4xl md:text-5xl text-white">
          <CountUp end={4.8} duration={1000} />
        </p>
        امتیاز کافه بازار
      </div>
    </section>
  );
}
