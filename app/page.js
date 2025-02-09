import Image from "next/image"
import myself from '@/public/images/mypic.png'
import Writer from "@/components/utilities/Writer"
import { ResumeBtn } from "@/components/utilities/Buttons"
import SocialIcons from "@/components/utilities/SocialIcons"


export const metadata = {
    title: 'Shivam Kumar | Portfolio',
    description: "Welcome, I am Shivam Kumar. Explore the collection of my projects, skills, and experiences in web development, graphic design and software development. Witness my journey and passion for creating meaningful Projects."
}

export default function Home() {
    return <>
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2">
            <div className="w-full h-min lg:h-full flex flex-col md:flex-row lg:flex-col justify-evenly lg:justify-center items-center">
                <div className="rounded-full w-48 lg:w-72 xl:w-96 h-48 lg:h-72 xl:h-96 from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 bg-gradient-to-l overflow-hidden p-1">
                    <div className="w-full h-full pt-3 rounded-full overflow-hidden border-4 border-white dark:border-primary-999">
                        <Image priority className="saturate-[1.2] rounded-full w-96 relative -top-6" src={myself} alt="Shivam Kumar" />
                    </div>
                </div>
                <ResumeBtn className="my-6" />
                <SocialIcons />
            </div>
            <div className="dark:text-gray-400 mt-6 sm:mt-0">
                <div className="flex flex-col font-fancy mt-4 md:mt-12 lg:mt-0 items-center lg:items-start ">
                    <span className="text-5xl sm:text-6xl">I am</span>
                    <h1 className="pl-4 dark:text-primary-400 my-5 text-6xl sm:text-7xl font-black">
                        <Writer />
                    </h1>
                </div>
                <article className="font-light px-4 text-gray-800 dark:text-gray-200 dark:font-extralight text-base mt-8 lg:mt-12 leading-7 text-justify">
                    Self-taught developer with innovative design skills and UX expertise. Seeking a team-oriented environment to maximize learning. Determined undergrad at <b>National Institute of Technology Delhi</b>, adept at out-of-the-box thinking, eager to develop new software applications.
                </article>

                <Skills />

            </div>

        </div>
    </>
}

const skills = [
    "C++", "HTML", "CSS", "JavaScript", "ReactJs", "NextJs", "Tailwind"
]

export function Skills() {
    return <ul className="max-w-sm flex justify-center sm:justify-normal mx-4 flex-wrap mt-10 sm:mt-12 gap-2">
        {skills.map((elem, idx) => {
            const effect = idx % 3 == 0 ? "cursor-default from-primary-500 to-primary-600 bg-gradient-to-r" : idx % 3 == 1 ? "from-gray-200 to-gray-300 bg-gradient-to-r text-black" : "from-gray-800 to-gray-900 bg-gradient-to-l"
            return <li key={elem} className="text-white">
                <button className={`${effect} cursor-default border border-neutral-400 dark:border-neutral-600 font-fancy hover:shadow-sm font-semibold px-3 sm:px-4 py-2 sm:py-3 text-sm tracking-widest uppercase rounded-lg transition-colors duration-200 ease-in-out`}>
                    {elem}
                </button>
            </li>
        }
        )}
    </ul>
}