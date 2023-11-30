import toast from "react-hot-toast";

export const notify = () =>
  toast.success("اطلاعات با موفقیت ارسال شد.", {
    duration: 1500,
    style: {
      borderRadius: "10px",
      background: "#8351a8",
      color: "#fff",
    },
  });
