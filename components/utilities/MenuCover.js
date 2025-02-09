"use client"
import { useState } from "react";
import NavBar from "../Navbar";
import DarkMode from "./DarkMode";

export default function MenuCover({ children }) {
    const [menu, setMenu] = useState(false)
    return <>
        <NavBar setMenu={setMenu} menu={menu} />
        <div className="dark:bg-gray-700 dark:border-b-[1px] dark:border-gray-500 flex justify-between items-center sm:hidden fixed z-40 top-0 w-full h-14 bg-white shadow-md">
            <svg onClick={()=>setMenu(true)} className="fill-stone-500 dark:fill-stone-100 w-8 h-8 ml-4" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32" >
                <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
            <div className="mr-4 h-8">
            <DarkMode/>
            </div>
        </div>
        <div onClick={()=>setMenu(false)} className="sm:hidden absolute inset-0 z-40 bg-black/60" style={{ display: menu ? "block" : "none" }}></div>
        <main className={`p-4 sm:p-10 sm:ml-40 mt-16 sm:mt-6`}>
            {children}
        </main>
    </>
}