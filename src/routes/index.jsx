// Core imports
import React from 'react';
import {Route, Routes } from "react-router-dom";

// Local imports
import Landing from "../pages/landing";
import AppLayout from "../layout/AppLayout";

function Router() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <AppLayout />
                }
            >
                <Route index element={<Landing/>}/>
            </Route>
        </Routes>
    );
}

export default Router;