import React from "react";

const Section2 = () => {
  return (
    <div className="w-auto flex flex-col items-center lg:flex-row text-justify mt-4 tracking-tight dark:text-white">
      <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
        <p className="py-2 leading-8 mt-2 text-xl text-mauve12 dark:text-mauve2">
          اراک، بلوار قدس، مجتمع اداری آسمان، بلوک ۱، واحد ۸
        </p>
        <p className="py-2 leading-8 mt-2 text-xl text-mauve12 dark:text-mauve2">
          کد پستی: ۳۸۱۸۱۴۵۶۱۹
        </p>
        <p className="py-2 leading-8 mt-2 text-xl text-mauve12 dark:text-mauve2">
          شماره تماس: ۰۸۶۳۴۰۶۴۴۸۲
        </p>
        <p className="py-2 leading-8 mt-2 text-xl text-mauve12 dark:text-mauve2">
          شماره واتسپ واحد فروش و بازرگانی : ۰۹۳۸۱۱۵۰۲۵
        </p>
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13216.216354568847!2d49.7155032!3d34.0937548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xecbc02be6a1a96b1!2z2K_Yp9iv2Ycg2qnYp9mI2KfZhiDYr9uM2YbYpw!5e0!3m2!1sen!2s!4v1657535061816!5m2!1sen!2s"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-none rounded-md "
        ></iframe>
      </div>
    </div>
  );
};

export default Section2;
