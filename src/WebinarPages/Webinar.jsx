import React from "react";
import { useFormik } from "formik";
import { notify } from "../functions/toast";
const Webinar = () => {
  const myForm = useFormik({
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "وارد کردن نام و نام خانوادگی اجباری است.";
      } else if (values.name.length < 3) {
        errors.name = "تعداد حروف حداقل ۳ حرف باشد";
      }

      if (!values.componeny) {
        errors.componeny = "وارد کردن این بخش اجباری است.";
      }

      if (!values.email) {
        errors.email = "وارد کردن ایمیل اجباری است.";
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
        errors.email = "ایمیل وارد شده معتبر نیست.";
      }

      if (!values.phone) {
        errors.phone = "وارد کردن شماره تماس اجباری است.";
      } else if (
        !/^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/g.test(values.phone)
      ) {
        errors.phone = "فرم شماره وارد شده صحیح نمی‌باشد.";
      }

      return errors;
    },
    initialValues: {
      name: "",
      email: "",
      phone: "",
      componeny: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log("values are : ", values);

      setTimeout(() => {
        setSubmitting(false);
        notify();
      }, 3000);
    },
  });
  return (
    <div>
      <form data-aos="fade-up-left" onSubmit={myForm.handleSubmit}>
        <h1 className="font-semibold text-xl dark:text-white p-2 pt-8 border-b-4 border-borderDark w-fit mx-auto">
          شرکت در وبینار
        </h1>
        <div className="space-y-12 p-8">
          <div className="border-b border-gray-900/10 dark:border-borderColorLight pb-8">
            <h2 className="text-sm font-semibold leading-7 text-gray-900 dark:text-mauve4 border-b border-gray-900/10 dark:border-borderColorLight pb-4">
              دوست ارجمند سلام ! ضمن تشکر از ارتباط شما لطفا مشخصات ذیل راجهت
              ثبت نام در جلسه وبینار دینا وارد کنید .
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="componeny"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
                >
                  نام سازمان / مجموعه :
                </label>
                <div className="mt-2">
                  <input
                    id="componeny"
                    type="text"
                    name="componeny"
                    value={myForm.values.componeny}
                    onChange={myForm.handleChange}
                    onBlur={myForm.handleBlur}
                    className="block w-full outline-none px-2 rounded-md dark:text-mauve4 border-0 dark:bg-bgDarkInner dark:ring-borderColorLight py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-borderDark sm:text-sm sm:leading-6"
                  />
                  {myForm.errors.componeny && myForm.touched.componeny && (
                    <p className="text-red-400 mt-2">
                      {myForm.errors.componeny}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
                >
                  نام و نام خانوادگی:
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={myForm.values.name}
                    onChange={myForm.handleChange}
                    onBlur={myForm.handleBlur}
                    className="block w-full outline-none px-2 rounded-md border-0 dark:bg-bgDarkInner dark:ring-borderColorLight py-1.5 text-gray-900 dark:text-mauve4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-borderDark sm:text-sm sm:leading-6"
                  />
                  {myForm.errors.name && myForm.touched.name && (
                    <p dir="rtl" className="text-red-400 mt-2">
                      {myForm.errors.name}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
                >
                  ایمیل
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={myForm.values.email}
                    onChange={myForm.handleChange}
                    onBlur={myForm.handleBlur}
                    className="block w-full outline-none px-2 rounded-md dark:text-mauve4 border-0 dark:bg-bgDarkInner dark:ring-borderColorLight py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-borderDark sm:text-sm sm:leading-6"
                  />
                  {myForm.errors.email && myForm.touched.email && (
                    <p className="text-red-400 mt-2">{myForm.errors.email}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
                >
                  شماره تماس
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    type="phone"
                    name="phone"
                    value={myForm.values.phone}
                    onChange={myForm.handleChange}
                    onBlur={myForm.handleBlur}
                    className="block w-full outline-none px-2 rounded-md dark:text-mauve4 border-0 dark:bg-bgDarkInner dark:ring-borderColorLight py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-borderDark sm:text-sm sm:leading-6"
                  />
                  {myForm.errors.phone && myForm.touched.phone && (
                    <p className="text-red-400 mt-2">{myForm.errors.phone}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 w-full flex justify-center ">
          <button
            type="submit"
            className={`rounded-md ${
              myForm.isSubmitting ? "opacity-40" : "opacity-100"
            } bg-borderDark px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            disabled={myForm.isSubmitting}
          >
            {myForm.isSubmitting ? "درحال‌ارسال ..." : "ثبت اطلاعات"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Webinar;
