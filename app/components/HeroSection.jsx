"use client";

import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import screenShot from "@/public/images/unnamed.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 ">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 header-bg">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className=" col-span-3 text-center lg:text-right space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-primary leading-tight">
              مالیکو
            </h1>
            <h3 className="text-3xl font-bold text-gray-700">
              پلتفرم هوشمند مدیریت مالی شخصی
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0 text-justify">
              مالیکو یک اپلیکیشن هوشمند مدیریت مالی شخصی است که با خواندن خودکار
              پیامک‌های بانکی، به شما کمک می‌کند بدون ثبت دستی، خرج‌ها و
              درآمدهای خود را بشناسید، آن‌ها را تحلیل کنید و کنترل دقیق‌تری روی
              پول‌تان داشته باشید.
            </p>

            <div className="flex ">
              <Link
                href="#download"
                className="bg-[#0e60c9] text-white flex gap-12 items-center justify-center px-2 hover:gap-16 pr-5 py-1 rounded-[50px] font-bold text-lg border-4 border-primary hover:bg-white hover:text-primary  transition-all  hover:scale-105 active:scale-95"
              >
                <span className="text-xl"> نصبم کن</span>
                <div className="p-3 size-12 bg-white rounded-full  text-primary">
                  <ArrowDownToLine className="  " />
                </div>
              </Link>
            </div>
          </div>

          <div className=" col-span-2 relative flex items-center justify-center">
            {/* image here */}
            <Image
              alt=""
              src={screenShot}
              height={600}
              width={400}
              className="rounded-[100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
