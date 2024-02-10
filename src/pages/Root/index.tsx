import { useEffect } from "react";

import PrimaryFooter from "@/components/Layout/PrimaryFooter";
import PrimaryHeader from "@/components/Layout/PrimaryHeader";
import SectionCategory from "@/components/Root/SectionCategory";
import SectionCta from "@/components/Root/SectionCta";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
<<<<<<< HEAD
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
=======
    scrollTo(0, 0);
>>>>>>> e4c19773c553d3a06dfd7ff09bba5af6e70c058c
  }, [pathname]);

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
