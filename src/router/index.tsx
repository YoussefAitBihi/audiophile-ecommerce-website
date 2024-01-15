import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/Home";
import CategoryPage from "@/pages/Category";
import ProductDetailPage from "@/pages/ProductDetail";
import CheckoutPage from "@/pages/Checkout";
import RootLayout from "@/pages/Root";
import ErrorBoundaryPage from "@/pages/ErrorBoundary";
import { Provider } from "react-redux";
import store from "@/store";
import productsPreviewByCategoryLoader from "./loaders/productsPreviewByCategory";

/**
 * Router - Allow to take the url and render the adequate page.
 *
 * @returns
 */
const RouterConfig = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorBoundaryPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "category/:slug",
          element: <CategoryPage />,
          loader: productsPreviewByCategoryLoader,
        },
        { path: "product/:slug", element: <ProductDetailPage /> },
        { path: "checkout", element: <CheckoutPage /> },
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
