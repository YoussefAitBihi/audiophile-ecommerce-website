import PrimaryFooter from "@/components/Layout/PrimaryFooter";
import PrimaryHeader from "@/components/Layout/PrimaryHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <PrimaryHeader />
      <Outlet />
      <PrimaryFooter />
    </>
  );
};

export default RootLayout;
