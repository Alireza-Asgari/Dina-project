import React, { useEffect } from "react";
import heroImg from "../assets/images/businessman-animate.svg";
//components:
import ButtonComponent from "../components/ButtonComponent";
//context :
import { useStateContext } from "../context/ContextProvider";
import Modal from "../components/Modal";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const { open, setOpen } = useStateContext();
  return (
    // <div className='w-full h-screen mx-auto px-8 grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16'>
    //     <div data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up" className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
    //         <h1 className='text-3xl text-dinaColor lg:text-4xl font-medium text-black-600 leading-tight'>
    //             لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
    //         </h1>
    //         <p className="text-black-500 mt-4 mb-6" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون </p>
    //         <ButtonComponent click={()=>setOpen(!open)} >تماشای ویدیو</ButtonComponent>
    //     </div>
    //     <div data-aos="fade-up" data-aos-duration="1000" >
    //         <img src={heroImg}  />
    //     </div>
    //      <Modal />

    // </div>
    <section>
      <div className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner dark:shadow-borderDark dark:shadow-lg rounded-xl">
        <div className="items-center lg:flex">
          <div
            className="w-full lg:w-1/2 dark:text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="lg:max-w-lg text-justify">
              <h1 className="font-semibold text-xl ">
                Help Desk دینا انتخاب هوشمندانه مدیران ارشد و مهندسین جامعه
                فناوری اطلاعات
              </h1>
              <p className="py-2 md:py-4 leading-8">
                وجود سطح کلانی از دستگاه ها ، کامپیوترها ، تجهیزات شبکه به همراه
                نیازمندی سازمان به مدیریت چرخه حیات آنها در سیستمی مدون و
                یکپارچه حقایقی از این دنیای جدید است که همیشه همراه کارشناسان و
                مدیران ارشد بود است که با ارائه یک سیستم یکپارچه Help Desk دینا
                می‌توانید بر بستر وب و موبایل آمار جامعی از موجودیت های یادشده
                را به همراه رضایت کاربران و مالکین آنها همیشه همراه داشته باشید.
              </p>
              <ButtonComponent
                addClass="ms-2 mt-2 "
                click={() => setOpen(!open)}
              >
                تماشای ویدیو
              </ButtonComponent>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          >
            <img
              src={heroImg}
              alt="heroimage"
              className="animated w-full h-full lg:max-w-3xl"
            />
          </div>
          <Modal />
        </div>
      </div>
    </section>
  );
};

export default Hero;
