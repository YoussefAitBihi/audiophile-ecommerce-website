import CloseIcon from "@/assets/icons/Close";
import SuccessCheckIcon from "@/assets/icons/SuccessCheck";
import { FC } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

type NotificationProps = {
  title: string;
  action: "add" | "remove";
  onClick: () => void;
};

/**
 * Allows to show a notification
 * @returns
 */
const NotificationUI: FC<NotificationProps> = ({ title, action, onClick }) => {
  const notificationUIContent = (
    <motion.div
      className="notification-ui"
      variants={{
        show: { opacity: 1, y: 0 },
        hide: { opacity: 0, y: -20 },
      }}
      initial="hide"
      animate="show"
      transition={{ duration: 0.2 }}
      exit="hide"
    >
      <div className="notification-ui__content">
        <div className="notification-ui__icon-left">
          <SuccessCheckIcon />
        </div>
        <div className="notification-ui__infos">
          <h3 className="notification-ui__title">Success!</h3>
          <p>
            <strong>{title}</strong> have been successfully{" "}
            {action === "add" ? "added to" : "removed from"} your cart.
          </p>
        </div>
      </div>
      <button className="notification-ui__icon-right" onClick={onClick}>
        <span className="visually-hidden">Click to close the notification</span>
        <CloseIcon />
      </button>
    </motion.div>
  );
  const portalElement = document.getElementById("notifications-wrapper") as HTMLElement;

  return createPortal(notificationUIContent, portalElement);
};

export default NotificationUI;
