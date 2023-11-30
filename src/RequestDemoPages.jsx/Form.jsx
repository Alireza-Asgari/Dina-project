import React from "react";
import { useFormik } from "formik";
import { notify } from "../functions/toast.js";
const Form = () => {
  const myForm = useFormik({
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "وارد کردن نام اجباری است.";
      } else if (values.firstName.length < 3) {
        errors.firstName = "تعداد حروف حداقل ۳ حرف باشد";
      }

      if (!values.lastName) {
        errors.lastName = "وارد کردن نام خانوادگی اجباری است.";
      } else if (values.lastName.length < 3) {
        errors.lastName = "تعداد حروف حداقل ۳ حرف باشد";
      }

      if (!values.componeny) {
        errors.componeny = "وارد کردن این بخش اجباری است.";
      }

      if (!values.position) {
        errors.position = "وارد کردن این بخش اجباری است.";
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

      if ((values.product == "-1") | !values.product) {
        errors.product = "لطفا یک محصول را انتخاب کنید.";
      }

      if (!values.descriptions) {
        errors.descriptions = "وارد کردن این بخش اجباری است.";
      }

      return errors;
    },
    initialValues: {
      firstName: "",
      lastName: "",
      componeny: "",
      position: "",
      email: "",
      phone: "",
      product: "-1",
      descriptions: "",
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
    <form data-aos="fade-up-left" onSubmit={myForm.handleSubmit}>
      <div className="space-y-12 p-8">
        <div className="border-b border-gray-900/10 dark:border-borderColorLight pb-8">
          <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-mauve4 border-b border-gray-900/10 dark:border-borderColorLight pb-4">
            اطلاعات شما :
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
              >
                نام
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  type="text"
                  name="firstName"
                  value={myForm.values.firstName}
                  onChange={myForm.handleChange}
                  onBlur={myForm.handleBlur}
                  className="block w-full outline-none px-2 rounded-md border-0 dark:bg-bgDarkInner dark:ring-borderColorLight py-1.5 text-gray-900 dark:text-mauve4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-borderDark sm:text-sm sm:leading-6"
                />
                {myForm.errors.firstName && myForm.touched.firstName && (
                  <p dir="rtl" className="text-red-400 mt-2">
                    {myForm.errors.firstName}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
              >
                نام خانوادگی
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  type="text"
                  name="lastName"
                  value={myForm.values.lastName}
                  onChange={myForm.handleChange}
                  onBlur={myForm.handleBlur}
                  className="block w-full outline-none px-2 rounded-md dark:text-mauve4 border-0 dark:bg-bgDarkInner dark:ring-borderColorLight py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-borderDark sm:text-sm sm:leading-6"
                />
                {myForm.errors.lastName && myForm.touched.lastName && (
                  <p className="text-red-400 mt-2">{myForm.errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="componeny"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
              >
                نام سازمان و مجموعه شما
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
                  <p className="text-red-400 mt-2">{myForm.errors.componeny}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="position"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
              >
                سمت شما در سازمان
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={myForm.values.position}
                  onChange={myForm.handleChange}
                  onBlur={myForm.handleBlur}
                  className="block w-full outline-none px-2 rounded-md dark:text-mauve4 border-0 dark:bg-bgDarkInner dark:ring-borderColorLight py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-borderDark sm:text-sm sm:leading-6"
                />
                {myForm.errors.position && myForm.touched.position && (
                  <p className="text-red-400 mt-2">{myForm.errors.position}</p>
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

            <div className="sm:col-span-3 ">
              <label
                htmlFor="product"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
              >
                مایل به دریافت دموی کدام محصول هستید؟
              </label>
              <div className="mt-2">
                <select
                  id="product"
                  name="product"
                  value={myForm.values.product}
                  onChange={myForm.handleChange}
                  onBlur={myForm.handleBlur}
                  className="block outline-none w-full rounded-md border-0 dark:text-mauve9 dark:bg-bgDarkInner dark:ring-borderColorLight py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-borderDark sm:text-sm sm:leading-6"
                >
                  <option value={"-1"} className="text-mauve9" disabled>
                    انتخاب محصول
                  </option>
                  <option value="help-desk">سامانه Help Desk دینا</option>
                  <option value="china">نرم افزار چیدمان فروشگاهی</option>
                  <option value="dinaSood">سامانه فروشگاهی دینا سود</option>
                </select>
                {myForm.errors.product && myForm.touched.product && (
                  <p className="text-red-400 mt-2">{myForm.errors.product}</p>
                )}
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="descriptions"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
              >
                لطفا توضیحات بیشتری از نیازمندی خود برای ما شرح دهید{" "}
              </label>
              <div className="mt-2">
                <textarea
                  name="descriptions"
                  id="descriptions"
                  value={myForm.values.descriptions}
                  onChange={myForm.handleChange}
                  onBlur={myForm.handleBlur}
                  rows={3}
                  className="block w-full outline-none px-2 rounded-md dark:text-mauve4 border-0 dark:bg-bgDarkInner dark:ring-borderColorLight py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-borderDark sm:text-sm sm:leading-6"
                />
                {myForm.errors.descriptions && myForm.touched.descriptions && (
                  <p className="text-red-400 mt-2">
                    {myForm.errors.descriptions}
                  </p>
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
  );
};

export default Form;
