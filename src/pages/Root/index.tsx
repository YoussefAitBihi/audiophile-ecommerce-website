import PrimaryFooter from "@/components/Layout/PrimaryFooter";
import PrimaryHeader from "@/components/Layout/PrimaryHeader";
import SectionCategory from "@/components/Root/SectionCategory";
import SectionCta from "@/components/Root/SectionCta";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <PrimaryHeader />
      <main className={`main-content ${pathname === "/" ? "main-content--homepage" : ""}`}>
        <Outlet />
        <SectionCategory />
        <SectionCta />
      </main>
      <PrimaryFooter />
    </>
  );
};

export default RootLayout;
