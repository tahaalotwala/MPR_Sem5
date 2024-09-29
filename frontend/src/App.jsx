import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./pages/HomeLayout";
import { Landing } from "./pages/Landing";
import { FindHotels } from "./pages/FindHotels";
import { TravelForm } from "./pages/TravelForm";
import { ContactUs } from "./pages/ContactUs";
import { AboutUs } from "./pages/AboutUs";
import { SignUp } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatBot } from "./pages/ChatBot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      // Landing Page
      {
        index: true,
        element: <Landing />,
      },
      // Nav - Links
      {
        path: "/hotels",
        element: <FindHotels />,
      },
      {
        path: "/plan",
        element: <TravelForm />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      // Auth routes
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      // Features
      {
        path: "/chat",
        element: <ChatBot />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthContextProvider>
    </>
  );
}

export default App;
