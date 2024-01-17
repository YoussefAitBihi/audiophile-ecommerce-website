import PrimaryHeader from "@/components/Layout/PrimaryHeader";
import PrimaryFooter from "@/components/Layout/PrimaryFooter";
import { useRouteError } from "react-router-dom";
import AstronautIcon from "@/assets/icons/Astronaut";
import PrimaryButton from "@/components/UI/Buttons/Primary";

const ErrorBoundaryPage = () => {
  const error = useRouteError();

  return (
    <>
      <PrimaryHeader />
      <main>
        <article className="error-boundary-article">
          <div className="container">
            <div className="error-boundary-article__content">
              <div className="product-detail-grid">
                <h1 className="primary-heading primary-heading--black">{error.data.title}</h1>
                <p>{error.data.message}</p>
                <PrimaryButton tag="link" href="/" modifier="orange">
                  Go home
                </PrimaryButton>
              </div>
              <div className="error-boundary-article__illustration">
                <AstronautIcon />
              </div>
            </div>
          </div>
        </article>
      </main>
      <PrimaryFooter />
    </>
  );
};

export default ErrorBoundaryPage;
