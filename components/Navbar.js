import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkMode from "./utilities/DarkMode";

const links = [
    { text: "About Me", link: "/", linkid: "/" },
    { text: "Projects", link: "/projects", linkid: "/projects" },
    { text: "Skills", link: "/skills", linkid: "/skills" },
    // { text: "Education", link: "/work", linkid: "/work" },
    { text: "Contact", link: "/contact", linkid: "/contact" },
]

export default function NavBar({menu, setMenu}) {
    const pathname = usePathname();
    return <>
        <header className={`${menu ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 transition-transform duration-300 ease-linear top-0 left-0 h-screen flex min-w-[10rem] fixed z-50 items-center bg-primary-500 dark:from-gray-700 dark:to-gray-800 dark:bg-gradient-to-b`}>
            <div className="absolute w-6 h-6 top-4 right-4 sm:hidden dark:fill-stone-300 fill-stone-100" onClick={() => setMenu(!menu)}>
                <svg className="transform rotate-45"  version="1.1" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
                </svg>
            </div>
            <nav className="w-full">
                <ul className="text-white flex flex-col">
                    {links.map(elem => {
                        const isActive = pathname == elem.link
                        return <li className={`${isActive ? "bg-primary-400 dark:bg-gradient-to-r from-primary-500 to-primary-600" : ""} flex select-none cursor-pointer font-medium relative justify-center transition-colors duration-300 ease-in-out hover:bg-primary-400`} key={elem.link}>
                            <span className={`${isActive ? "w-0.5" : "w-0"} dark:bg-primary-300 h-full bg-primary-950 absolute left-0 top-0 transition-[width] duration-300 ease-in-out`}></span>
                            <Link onClick={()=>setMenu(false)} className={`${isActive ? "text-white" : ""} w-full px-8 py-5`} href={elem.link}>{elem.text}</Link>
                        </li>
                    })}
                </ul>
            </nav>
            <div className="absolute bottom-4 right-4">
                <DarkMode />
            </div>
        </header>
    </>
}