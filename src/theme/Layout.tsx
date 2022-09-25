import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./containers/Navbar";
import Header from "../containers/Header";

export default function Layout() {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
        </>
    );
}
