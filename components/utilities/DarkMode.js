"use client"

import { useState, useEffect } from "react";

export default function DarkMode() {
    const [activeTheme, setActiveTheme] = useState("light");
    const setDarkTheme = () => {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";

        setActiveTheme("dark");
    };

    const setLightTheme = () => {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";

        setActiveTheme("light");
    };

    const switchTheme = () => {
        if (activeTheme == "light") setDarkTheme();
        else setLightTheme();
    }

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkTheme();
        } else {
            setLightTheme();
        };
    }, []);
    return <>
            <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" checked={activeTheme == "light"} onChange={switchTheme} type="checkbox" />
                <div className="flex justify-between w-14 h-8 bg-primary-100 peer-checked:bg-stone-100 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-stone-100 after:border-gray-300 active:after:bg-stone-200 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:after:left-[-2px]">
                    <svg className={`p-1 h-8 text-primary-700`} viewBox="0 0 24 24">
                        <path fill="currentColor" d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" />
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" />
                    </svg>
                    <svg className={`p-1 h-8`} viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="currentColor" fill="none" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke="currentColor" fill="none" d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" />
                    </svg>
                </div>
            </label>
    </>
}