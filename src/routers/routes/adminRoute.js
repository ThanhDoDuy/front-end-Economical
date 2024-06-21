import { lazy } from "react";

const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));

export const AdminRoutes = [
    {
        path: 'admin/dashboard',
        element: <AdminDashboard />,
        role: 'Admin'
    }
]