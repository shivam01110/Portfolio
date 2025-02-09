import { skills } from "@/components/skills/data";
import Image from "next/image";

export default function Skills() {
    return <ul className="flex flex-wrap gap-3 sm:gap-6 justify-center my-6 sm:my-8 max-w-4xl mx-auto">
        {skills.map((elem, idx) => {
            return <li key={idx}>
                <SkillCard key={idx} card={elem} />
            </li>
        })}
    </ul>
}

function SkillCard({ card }) {
    return <div className="flex flex-col max-w-[5.5rem] sm:max-w-[8.2rem] h-full sm:shadow-lg break-words rounded-md p-2 sm:pt-2 sm:px-6 sm:pb-0 sm:ring-2 sm:ring-gray-100 dark:ring-gray-800 dark:aspect-square dark:rounded-lg dark:bg-gray-900">
        <Image className="aspect-square w-full sm:bg-transparent p-2" src={card.image} alt={card.text} />
        <div className="font-medium tracking-wide text-[0.6rem] sm:text-sm text-center sm:py-4 dark:text-gray-300">{card.text}</div>
    </div>
}