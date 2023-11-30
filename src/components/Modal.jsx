import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useStateContext } from "../context/ContextProvider";
const Modal = () => {
  const { open, setOpen } = useStateContext();

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(!open)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-mauve11 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white dark:bg-dinaColor px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="z-20">
                    <iframe
                      src="https://www.aparat.com/video/video/embed/videohash/5VOH0/vt/frame"
                      allow="autoplay; encrypted-media"
                      type="text/html"
                      width="100%"
                      height="400"
                      allowFullScreen
                      title="video"
                    ></iframe>
                  </div>
                </div>
                <div className="bg-white dark:bg-dinaColor px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-borderDark px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    بستن
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
