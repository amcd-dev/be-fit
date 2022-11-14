import NavBar from "../components/NavBar";
import TopNav from "../components/TopNav";
import {useState} from "react";


export default function Layout({ children }) {

    return (
        <>
            <TopNav/>
            <main>{children}</main>
        </>
    )
}