import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages/HomeLayout";
import { Landing } from "./pages/Landing";
import { FindHotels } from "./pages/FindHotels";
import { TravelForm } from "./pages/TravelForm";
import { ContactUs } from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/hotels",
        element: <FindHotels />,
      },
      {
        path: "/plan",
        element: <TravelForm />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
