import Services from "@/components/skills/Services";
import Skills from "@/components/skills/Skills";
import Heading from "@/components/utilities/Heading";

export const metadata = {
    title: 'Skills | Shivam Kumar',
    description: 'My skills and Services. This section provides an overview of my technical and soft skills, ranging from web development and graphic design to communication and problem-solving.'
}

export default function Home() {
    return <>
        <Heading subheading= "Expertise" heading = "My Skills & Tools" className="text-md text-center"/>
        <Skills/>

        <Heading className="text-md mt-12 sm:mt-24 text-center"/>
        <div className="mt-8 sm:mt-16">
            <Services />
        </div>
        
    </>
}



