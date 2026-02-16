import { Bounce, ToastContainer } from "react-toastify";
import type { NotificationProps } from "../../types/Notification/notification";

export function Notification({ children }: NotificationProps) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
    </>
  );
}
