import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/Home";
import CategoryPage from "@/pages/Category";
import ProductDetailPage from "@/pages/ProductDetail";
import CheckoutPage from "@/pages/Checkout";
import RootLayout from "@/pages/Root";
import ErrorPage from "@/pages/Error";

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
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/category/:slug", element: <CategoryPage /> },
        { path: "/product/:slug", element: <ProductDetailPage /> },
        { path: "/checkout", element: <CheckoutPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterConfig;
