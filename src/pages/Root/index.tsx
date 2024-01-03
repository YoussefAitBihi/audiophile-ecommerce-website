import PrimaryFooter from "@/components/Layout/PrimaryFooter";
import PrimaryHeader from "@/components/Layout/PrimaryHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <PrimaryHeader />
      <main>
        <Outlet />
      </main>
      <PrimaryFooter />
    </>
  );
};

export default RootLayout;
