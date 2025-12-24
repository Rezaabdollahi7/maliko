"use client";

import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import screenShot from "@/public/images/screenshot.png";
import flotingImg1 from "@/public/images/float-1.png";
import flotingImg3 from "@/public/images/float-3.png";
import flotingImg4 from "@/public/images/float-4.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 header-bg">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="order-2 lg:order-1 col-span-3 text-center lg:text-right space-y-8 ">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-primary leading-tight animate-fade-in-up">
              مالیکو
            </h1>
            <h3
              className="text-3xl font-bold text-gray-700 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              پلتفرم هوشمند مدیریت مالی شخصی
            </h3>
            <p
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              مالیکو یک اپلیکیشن هوشمند مدیریت مالی شخصی است که با خواندن خودکار
              پیامک‌های بانکی، به شما کمک می‌کند بدون ثبت دستی، خرج‌ها و
              درآمدهای خود را بشناسید، آن‌ها را تحلیل کنید و کنترل دقیق‌تری روی
              پول‌تان داشته باشید.
            </p>
            <div
              className="flex animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="#download"
                className="bg-[#0e60c9] text-white flex gap-12 items-center justify-center px-2 hover:gap-16 pr-5 py-1 rounded-[50px] font-bold text-lg border-4 border-primary hover:bg-white hover:text-primary transition-all hover:scale-105 active:scale-95"
              >
                <span className="text-xl">نصبم کن</span>
                <div className="p-3 size-12 bg-white rounded-full text-primary">
                  <ArrowDownToLine />
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:order-2 col-span-2 relative flex items-center justify-center  ">
            <Image
              alt="اسکرین‌شات اپلیکیشن مالیکو"
              src={screenShot}
              height={600}
              width={400}
              className="rounded-[100px] animate-fade-in-up"
            />

            <Image
              alt="تحلیل هوشمند مالی"
              src={flotingImg1}
              height={700}
              width={300}
              className=" absolute top-1/2 -translate-y-1/2 border border-gray-200 shadow-2xl -left-20 rounded-xl animate-float-1 hover-lift"
            />

            <Image
              alt="دسته‌بندی خودکار"
              src={flotingImg3}
              height={600}
              width={300}
              className="absolute bottom-1/4 -right-1/6 shadow-2xl rounded-xl animate-float-2 hover-lift"
            />

            <Image
              alt="گزارش‌های مالی"
              src={flotingImg4}
              height={400}
              width={250}
              className="absolute -z-10 top-1/6 -right-1/5 rotate-4 shadow-2xl rounded-xl animate-float-3 hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
