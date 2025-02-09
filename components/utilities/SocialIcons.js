import Image from "next/image"
import github from "@/public/images/social/github.png"
import instagram from "@/public/images/social/instagram.png"
import leetcode from "@/public/images/social/leetcode.png"
import linkedin from "@/public/images/social/linkedin.png"
import mail from "@/public/images/social/mail.png"

const icons = [
    { icon: linkedin, title : "linkedin", link: "https://www.linkedin.com/in/shivam-kumar-0303a42b4/" },
    { icon: github,title : "github", link: "https://github.com/shivam01110" },
    { icon: mail,title : "email", link: "mailto:shivam30csk@gmail.com" },
    { icon: leetcode,title: "leetcode", link: "https://leetcode.com/u/shivam-kumar/" },
    // { icon: instagram,title : "instagram", link: "https://www.instagram.com/s.h.r.e.y.a.n.s.h_g.u.p.t.a/" },

]

export default function SocialIcons({ large }) {
    return <ul className={`flex justify-center items-center flex-wrap dark:rounded-lg dark:overflow-hidden`}>
        {icons.map((elem, idx) => {
            return (
                <a key={idx} href={elem.link} target="_blank" title={elem.title}>
                    <li className="border-2 border-gray-200 hover:border-primary-400 hover:bg-primary-50 dark:bg-gray-600 dark:border-transparent dark:hover:bg-gray-500 transition-colors bg-primary-25 p-2 px-4">
                        <Image className={`${large ? "w-6 h-6 sm:w-12 sm:h-12 sm:p-1" : "w-6 h-6 sm:w-8 sm:h-8"} dark:brightness-125`} src={elem.icon} alt={elem.link} />
                    </li>
                </a>
            )
        })}
    </ul>
}