import { StyledToastContainer } from "./Toast.styles.ts";
import "react-toastify/dist/ReactToastify.min.css";

const ToastContainer = () => {
  return <StyledToastContainer newestOnTop={false} />;
};

export default ToastContainer;
