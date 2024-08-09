import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/pages/Root";
import ErrorBoundaryPage from "@/pages/ErrorBoundary";
import { Provider } from "react-redux";
import store from "@/store";
import { lazy, Suspense } from "react";
import SpinnerLoading from "@/components/UI/SpinnerLoading";
import { LoaderDefinition } from "@/types";

/**
 * Router - Allow to take the url and render the adequate page.
 *
 * @returns
 */
const RouterConfig = () => {
  const HomePage = lazy(() => import("@/pages/Home"));
  const CategoryPage = lazy(() => import("@/pages/Category"));
  const ProductDetailPage = lazy(() => import("@/pages/ProductDetail"));
  const CheckoutPage = lazy(() => import("@/pages/Checkout"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorBoundaryPage />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<SpinnerLoading />}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "category/:slug",
          element: (
            <Suspense fallback={<SpinnerLoading />}>
              <CategoryPage />
            </Suspense>
          ),
          loader: (meta: LoaderDefinition) =>
            import("./loaders/productsPreviewByCategory").then((module) => module.default(meta)),
        },
        {
          path: "product/:slug",
          element: (
            <Suspense fallback={<SpinnerLoading />}>
              <ProductDetailPage />
            </Suspense>
          ),
          loader: (meta: LoaderDefinition) =>
            import("./loaders/productDetail").then((module) => module.default(meta)),
        },
        {
          path: "checkout",
          element: (
            <Suspense fallback={<SpinnerLoading />}>
              <CheckoutPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default RouterConfig;
