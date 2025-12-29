import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import footerRectangle from "../../public/images/rectangle-footer.webp";
import malikoLogo from "../../public/web-app-manifest-512x512-removebg-preview.png";

const TelegramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    className="size-8"
  >
    <path
      d="M16,2c-7.732,0-14,6.268-14,14s6.268,14,14,14,14-6.268,14-14S23.732,2,16,2Zm6.489,9.521c-.211,2.214-1.122,7.586-1.586,10.065-.196,1.049-.583,1.401-.957,1.435-.813,.075-1.43-.537-2.218-1.053-1.232-.808-1.928-1.311-3.124-2.099-1.382-.911-.486-1.412,.302-2.23,.206-.214,3.788-3.472,3.858-3.768,.009-.037,.017-.175-.065-.248-.082-.073-.203-.048-.29-.028-.124,.028-2.092,1.329-5.905,3.903-.559,.384-1.065,.571-1.518,.561-.5-.011-1.461-.283-2.176-.515-.877-.285-1.574-.436-1.513-.92,.032-.252,.379-.51,1.042-.773,4.081-1.778,6.803-2.95,8.164-3.517,3.888-1.617,4.696-1.898,5.222-1.907,.116-.002,.375,.027,.543,.163,.142,.115,.181,.27,.199,.379,.019,.109,.042,.357,.023,.551Z"
      fill="currentColor"
      fillRule="evenodd"
    ></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    className="size-8"
  >
    <path
      d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"
      fill="currentColor"
    ></path>
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    className="size-8"
  >
    <path
      d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"
      fill="currentColor"
    ></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white rounded-2xl py-12 px-6 md:px-12 lg:px-16 relative mt-48 mb-16 container mx-auto">
      <div className="absolute right-1/2 translate-x-1/2 -top-4">
        <Image
          alt="footer-rectangle"
          src={footerRectangle}
          width={350}
          height={96}
        />
      </div>
      <Image
        src={malikoLogo}
        alt="maliko-logo"
        height={80}
        width={80}
        className="absolute -top-4 lg:top-0 right-1/2 translate-x-1/2 rounded-full w-12 h-12 lg:w-[80px] lg:h-[80px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 mt-24">
        <div className="space-y-6 text-center md:text-right">
          <h3 className="text-2xl font-bold text-gray-800">دسترسی سریع</h3>
          <ul className="space-y-3 lg:list-disc md:pr-4">
            <li>
              <Link
                href="#home"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                خدمات ما
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                درباره ما
              </Link>
            </li>
            <li>
              <Link
                href="#blog"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                بلاگ
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6 text-center md:text-right">
          <h3 className="text-2xl font-bold text-gray-800">خدمات ما</h3>
          <ul className="space-y-3 lg:list-disc md:pr-4">
            <li>
              <Link
                href="#transactions"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                ثبت خودکار تراکنش‌های بانکی
              </Link>
            </li>
            <li>
              <Link
                href="#categories"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                دسته‌بندی هوشمند هزینه‌ها و درآمدها
              </Link>
            </li>
            <li>
              <Link
                href="#charts"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                گزارش‌ها و نمودارهای مالی
              </Link>
            </li>
            <li>
              <Link
                href="#analysis"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                تحلیل رفتار مالی و الگوی خرج‌کرد
              </Link>
            </li>
            <li>
              <Link
                href="#goals"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                هدف‌گذاری و چالش‌های مالی
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6 text-center md:text-right">
          <h3 className="text-2xl font-bold text-gray-800">ارتباط با ما</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="text-pink-600">
                <InstagramIcon />
              </div>
              <a
                href="https://instagram.com/maliko_ir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors font-semibold"
              >
                maliko_ir@
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="text-blue-500">
                <TelegramIcon />
              </div>
              <a
                href="https://t.me/maliko_ir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors font-semibold"
              >
                maliko_ir@
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="text-black">
                <TwitterIcon />
              </div>
              <a
                href="https://twitter.com/maliko_ir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors font-semibold"
              >
                maliko_ir@
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="text-red-500 size-8" />
              <a
                href="mailto:malikosupport@gmail.com"
                className="text-gray-600 hover:text-red-500 transition-colors font-semibold"
              >
                malikosupport@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 font-semibold">
              <Phone className="text-green-500 size-8" />
              <span className="text-gray-600">۰۹۲۱۹۸۱۱۹۸۰</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-center md:text-right">
          <h3 className="text-2xl font-bold text-gray-800">درباره مالیکو</h3>
          <p className="text-gray-600 leading-relaxed text-justify">
            مالیکو یک اپلیکیشن هوشمند مدیریت مالی شخصی است که با خواندن خودکار
            پیامک‌های بانکی، به شما کمک می‌کند کنترل کامل روی پول‌تان داشته
            باشید.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-12 pt-8 text-center">
        <p className="text-gray-600">
          تمامی حقوق این وبسایت متعلق به{" "}
          <span className="text-primary font-bold">مالیکو</span> می‌باشد ۱۴۰۴
        </p>
      </div>
    </footer>
  );
}
