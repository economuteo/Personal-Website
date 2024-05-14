import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout, Home, AboutMe, Services, Portofolio, ContactMe, Error, Hire } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <AboutMe />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "portofolio",
                element: <Portofolio />,
            },
            {
                path: "contact",
                element: <ContactMe />,
            },
            {
                path: "hire",
                element: <Hire />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
