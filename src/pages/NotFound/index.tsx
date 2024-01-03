import PrimaryHeader from "@/components/Layout/PrimaryHeader";
import PrimaryFooter from "@/components/Layout/PrimaryFooter";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const NotFoundPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    console.log(error);
  }

  // useEffect(() => {
  //   console.log(error.data);
  // }, [error]);

  return (
    <>
      <PrimaryHeader />
      <main></main>
      <PrimaryFooter />
    </>
  );
};

export default NotFoundPage;
