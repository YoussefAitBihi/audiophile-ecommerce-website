import PrimaryFooter from "@/components/Layout/PrimaryFooter";
import PrimaryHeader from "@/components/Layout/PrimaryHeader";
import SectionCategory from "@/components/Root/SectionCategory";
import SectionCta from "@/components/Root/SectionCta";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <PrimaryHeader />
      <main className="main-content">
        <Outlet />
        <SectionCategory />
        <SectionCta />
      </main>
      <PrimaryFooter />
    </>
  );
};

export default RootLayout;
