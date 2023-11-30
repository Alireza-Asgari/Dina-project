import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

const Tab = () => (
  <Tabs.Root
    data-aos="fade-down"
    data-aos-duration="1000"
    dir="rtl"
    className="flex flex-col rounded-t-xl w-full shadow-[0_2px_10px] shadow-blackA2 dark:shadow-violet-950"
    defaultValue="tab1"
  >
    <Tabs.List className="shrink-0  flex flex-col sm:flex-row border-b border-mauve6 dark:border-violet11">
      <Tabs.Trigger
        className="bg-white text-lg h-auto py-4 rounded-t-xl dark:text-mauve8 dark:bg-bgDarkInner sm:rounded-se-none active:text-borderDark px-5 sm:h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] outline-none cursor-default"
        value="tab1"
      >
        بیانیه چشم انداز
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white text-lg h-auto py-4 dark:text-mauve8 dark:bg-bgDarkInner active:text-borderDark px-5 sm:h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] outline-none cursor-default"
        value="tab2"
      >
        بیانیه ماموریت
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white text-lg h-auto py-4 rounded-b-xl sm:rounded-b-none dark:text-mauve8 dark:bg-bgDarkInner sm:rounded-se-xl active:text-borderDark px-5 sm:h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none select-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] outline-none cursor-default"
        value="tab3"
      >
        ارزش های ما
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow p-5 transition-all duration-1000 bg-white dark:bg-bgDarkInner rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-mauve8"
      value="tab1"
      data-aos="zoom-out-left"
      data-aos-duration="1000"
    >
      <div data-aos="zoom-out-left" data-aos-duration="1000">
        <p className="py-2 leading-8 rounded-xl mt-2 mb-0 text-mauve11 dark:text-white">
          چشم انداز شرکت نرم افزاری داده کاوان دینا نوآوری و ایجاد رشد پویا در
          حوزه فناوری اطلاعات در تمامی سازمان ها و نهاد های دولتی و خصوصی ایران
          و خارج از مرزهای کشور عزیزمان است .
        </p>
        <p className="py-2 leading-8 rounded-xl mt-2 mb-0 text-mauve11 dark:text-white">
          ایجاد مزیت های رقابتی موثر در تولید و ارائه محصولات و خدمات نرم افزاری
          مبتنی بر دانش به روز دنیا با تکیه بر تلاش جمعی از جوانان متخصص کشور و
          به کارگیری خلاقیت های فنی و فکری درسایه ی توکل خداوند متعال دستاورد
          هایی است که به داشتن آنها می بالیم
        </p>
      </div>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white dark:bg-bgDarkInner rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-mauve8"
      value="tab2"
    >
      <div
        data-aos="zoom-out-left"
        data-aos-duration="1000"
        className=" p-4 w-full
          dark:text-white text-justify tracking-tight "
      >
        <ul className="max-w-2xl space-y-2 text-gray-500  list-inside dark:text-gray-200 list-disc">
          <li>
            ارائه راهکارهای نرم افزاری و مکانیزه کردن فرآیند های کاری در
            .سازمانها و نهادها
          </li>
          <li>ارائه راهکارهای مبتنی بر فناوری اطلاعات.</li>
          <li>
            مشاوره ، طراحی و تولید سامانه های نرم افزاری مبتنی بر وب و اپلیکیشن.
          </li>
          <li>خدمات آموزش ، نصب و اجرا.</li>
          <li>خدمات مشاوره ، نظارت و مدیریت پروژه.</li>
          <li>خدمات پشتیبانی و توسعه نرم افزار.</li>
        </ul>
      </div>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white dark:bg-bgDarkInner rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-mauve8"
      value="tab3"
    >
      <div
        data-aos="zoom-out-left"
        data-aos-duration="1000"
        className=" p-4 w-full
          dark:text-white text-justify tracking-tight "
      >
        <ul className="space-y-2 text-gray-500  list-inside dark:text-gray-200 list-disc">
          <li>تمرکز اصلی بر فناوری های نوین روز دنیا.</li>
          <li>پشتیبانی موثر و رفع نیازمندی های مشتری.</li>
          <li>
            توانمندسازي کارمندان و تقویت تیم بر توان خود مدیریتی و ارائه
            راهکارهای خلاقانه از سوی تمامی اعضا.
          </li>
          <li>ارتباط مستمر در ارائه آموزشهای کاربردی در بخش خدمات مشتریان.</li>
          <li>یادگیری از تجربیات گذشته و تغییر بهنیه روشها.</li>
          <li>حفظ اعتبار معنوی و پایبندی به اصل مشتری مداری.</li>
          <li>محیطی سالم ، صمیمی و دوستانه و درعین حال متعهد و منضبط.</li>
          <li>پایبندی به وظایف و اخلاقیات حرفه ای.</li>
        </ul>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

export default Tab;
