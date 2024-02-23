import { useEffect } from "react";

import PrimaryFooter from "@/components/Layout/PrimaryFooter";
import PrimaryHeader from "@/components/Layout/PrimaryHeader";
import SectionCategory from "@/components/Root/SectionCategory";
import SectionCta from "@/components/Root/SectionCta";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <PrimaryHeader />
      <main
        className={`main-content ${pathname === "/" ? "main-content--homepage" : ""} ${
          pathname === "/checkout" ? "bg-neutral-200" : ""
        }`}
      >
        <Outlet />
        {pathname !== "/checkout" && <SectionCategory />}
        {pathname !== "/checkout" && <SectionCta />}
      </main>
      <PrimaryFooter />
    </>
  );
};

export default RootLayout;
