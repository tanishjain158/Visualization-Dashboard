import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard></Dashboard>
    }
]);

export default router;