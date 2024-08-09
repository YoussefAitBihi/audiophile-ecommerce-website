import { useEffect } from "react";

import PrimaryFooter from "@/components/Layout/PrimaryFooter";
import PrimaryHeader from "@/components/Layout/PrimaryHeader";
import SectionCategory from "@/components/Root/SectionCategory";
import SectionCta from "@/components/Root/SectionCta";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "@/store/slices/ui-slice";

const RootLayout = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    dispatch(uiActions.init());
  }, [pathname, dispatch]);

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
