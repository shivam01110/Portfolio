import { services } from "@/components/skills/data"
import Image from "next/image"

export default function Services() {
    return <div className="flex flex-wrap justify-center gap-y-8 sm:gap-x-6 items-stretch">
        {
            services.map(elem => {
                return <div key={elem.title} className="relative max-w-[20rem] flex group min-h-[20rem] sm:min-h-fit">
                    <div className=" absolute inset-0 h-full w-full -z-10 translate-x-4 -translate-y-4 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500 dark:text-stone-400" style={{
                        backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
                        backgroundSize: "calc(10 * 1px) calc(10 * 1px)"
                    }} />
                    <div className="rounded-md bg-gray-900 dark:bg-gray-900 dark:ring-1 dark:ring-gray-800 p-6">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-100 text-primary-500 mb-5 flex-shrink-0 p-2">
                            <Image src={elem.image} alt={elem.title} />
                        </div>
                        <div className="flex-grow text-gray-100">
                            <h2 className="text-xl title-font font-bold mb-2">{elem.title}</h2>
                            <hr className="border-none w-2/12 rounded-e-full mb-4 h-1 bg-primary-500" />
                            <p className="leading-relaxed text-gray-300 text-sm text-justify">{elem.text}</p>
                        </div>
                    </div>
                </div>
            })
        }

    </div>

}