import Heading from "@/components/utilities/Heading";
import { works } from "@/components/work/data";
import WorkBox from "@/components/work/WorkBox";


export const metadata = {
    title: 'Work | Shivam Kumar',
    description : "Discover my educational background and qualifications. This section outlines my academic journey, highlighting my degrees, certifications, and relevant coursework."
}

export default function Home() {
    return <>
        <Heading subheading="Academics" heading="Education" className="text-center mb-4" />

        <div className="w-full flex flex-col relative rounded-lg">

            <div className="h-full bg-primary-500 w-1 sm:left-1/2 absolute z-10" />
            {works.map((elem, idx) => {
                return <WorkBox title={elem.title} desc={elem.desc} timeline={elem.timeline} order={idx % 2 == 0} key={idx} />
            })}
        </div>
    </>
}
