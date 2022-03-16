import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { routes } from "./routes"

export const Router = () => <BrowserRouter>
    <Routes>
        {routes.map(route => <Route key={route.path} path={route.path} element={<route.element />} />)}
        <Route path="*" element={<Navigate to={'/404'} />} />
    </Routes>
</BrowserRouter>