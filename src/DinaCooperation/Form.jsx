import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import { useStateContext } from "../context/ContextProvider";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { notify } from "../functions/toast";

const Form = () => {
  const fileInput = useRef(null);
  const acceptedTypes = ["image/jpeg", "image/png", "application/pdf"];
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const handleFile = (file) => {
    //you can carry out any file validations here...
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  const handleOndragOver = (event) => {
    event.preventDefault();
  };
  const handleOndrop = (event) => {
    //prevent the browser from opening the image
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
    //let's grab the image file
    handleFile(imageFile);
  };
  // console.log(image);
  // console.log(previewUrl);
  const { themeMood } = useStateContext();

  const myForm = useFormik({
    validate: (values) => {
      const validationType = acceptedTypes.find(
        (item) => item === values.fileUpload.type
      );
      const errors = {};
      if (!values.name) {
        errors.name = "وارد کردن نام و نام خانوادگی اجباری است.";
      } else if (values.name.length < 3) {
        errors.name = "تعداد حروف حداقل ۳ حرف باشد";
      }

      if (!values.email) {
        errors.email = "وارد کردن ایمیل اجباری است.";
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
        errors.email = "ایمیل وارد شده معتبر نیست.";
      }

      if (!values.descriptions) {
        errors.descriptions = "وارد کردن این بخش اجباری است.";
      }

      if (!values.fileUpload.name) {
        errors.fileUpload = "وارد کردن این بخش اجباری است.";
      } else if (!validationType) {
        errors.fileUpload = "پسوند فایل مجاز نیست.";
      } else if (values.fileUpload.size > 5000000) {
        errors.fileUpload = "حجم فایل نباید از ۵ مگابایت بیشتر باشد.";
      }

      return errors;
    },
    initialValues: {
      name: "",
      email: "",
      descriptions: "",
      searchInGoogle: false,
      SocialNetworks: false,
      IntroducingFriends: false,
      fileUpload: {},
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log("values are : ", values);

      setTimeout(() => {
        setSubmitting(false);
        notify();
      }, 3000);
    },
  });
  useEffect(() => {
    if (image) {
      myForm.values.fileUpload = image;
      console.log(myForm.values.fileUpload.name);
    }
  }, [image]);
  return (
    <>
      <div>
        <form data-aos="fade-up-left" onSubmit={myForm.handleSubmit}>
          <h1 className="font-semibold text-xl dark:text-white p-2 pt-8 border-b-4 border-borderDark w-fit mx-auto">
            فرم درخواست همکاری
          </h1>
          <div className="space-y-12 p-8">
            <div className="border-b border-gray-900/10 dark:border-borderColorLight pb-8">
              <h3 className="text-sm font-semibold leading-7 text-gray-900 dark:text-mauve4 border-b border-gray-900/10 dark:border-borderColorLight pb-4">
                لطفا فیلد های الزامی را وارد کنید
              </h3>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                      className="block w-full outline-none px-2 rounded-md border-0 dark:bg-bgDarkInner dark:ring-borderColorLight py-1.5 text-gray-900 dark:text-mauve4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-borderDark sm:text-sm sm:leading-6 "
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

                <div className="col-span-full">
                  <label
                    htmlFor="descriptions"
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
                  >
                    از خودتان بگویید
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
                    {myForm.errors.descriptions &&
                      myForm.touched.descriptions && (
                        <p className="text-red-400 mt-2">
                          {myForm.errors.descriptions}
                        </p>
                      )}
                  </div>
                </div>
                <fieldset className="sm:col-span-4">
                  <h3 className="block text-base font-medium leading-6 text-gray-900 dark:text-white">
                    از چه طریق با ما آشنا شدید
                  </h3>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="searchInGoogle"
                          name="searchInGoogle"
                          checked={myForm.values.searchInGoogle}
                          onChange={myForm.handleChange}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="searchInGoogle"
                          className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
                        >
                          سرچ در گوگل
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="SocialNetworks"
                          name="SocialNetworks"
                          checked={myForm.values.SocialNetworks}
                          onChange={myForm.handleChange}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="SocialNetworks"
                          className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
                        >
                          شبکه های اجتماعی
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="IntroducingFriends"
                          name="IntroducingFriends"
                          checked={myForm.values.IntroducingFriends}
                          onChange={myForm.handleChange}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="IntroducingFriends"
                          className="block text-sm font-medium leading-6 text-gray-900 dark:text-mauve8"
                        >
                          معرفی دوستان
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-base font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    رزومه خود را آپلود کنید
                  </label>
                  <div
                    onDragOver={handleOndragOver}
                    onDrop={handleOndrop}
                    onChange={myForm.handleChange}
                    onBlur={myForm.handleBlur}
                    className="mt-2 flex  justify-center items-center rounded-lg border border-dashed border-mauve11 px-6 py-10"
                    onClick={() => fileInput.current.click()}
                  >
                    <div className="text-center flex flex-col justify-center items-center">
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="fileUpload"
                          className="relative cursor-pointer rounded-md bg-white dark:bg-bgDarkInner font-semibold text-indigo-600 dark:text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span className="p-2">یک فایل آپلود کنید</span>
                          <input
                            type="file"
                            accept={[
                              "image/jpeg",
                              "image/png",
                              "application/pdf",
                            ]}
                            ref={fileInput}
                            hidden
                            name="fileInput"
                            onChange={(e) => handleFile(e.target.files[0])}
                          />
                          <p className="pr-1 dark:text-mauve6">
                            یا بکشید و رها کنید
                          </p>
                        </label>
                      </div>
                      <p className="text-xs leading-5 text-gray-600 dark:text-mauve6">
                        PNG, JPG, PDF تا 5MB
                      </p>
                      {previewUrl ? (
                        <div className=" text-gray-300">
                          <img
                            src={previewUrl}
                            alt="image"
                            className="h-40 w-4h-40 mx-auto"
                          />
                          <span> {image.name && image.name} </span>
                        </div>
                      ) : (
                        <PhotoIcon
                          className="mx-auto h-24 w-24 text-gray-300"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </div>
                  {myForm.errors.fileUpload && myForm.touched.fileUpload && (
                    <p className="text-red-400 mt-2">
                      {myForm.errors.fileUpload}
                    </p>
                  )}
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
    </>
  );
};

export default Form;
