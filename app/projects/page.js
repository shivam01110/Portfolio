import Heading from '@/components/utilities/Heading'
import { projects } from '@/components/projects/data'
import ProjectItem from '@/components/projects/ProjectItem'

export const metadata = {
    title: 'Projects | Shivam Kumar',
    description:"Explore my projects to view a collection from web development and design to graphic designing. Discover the projects that define my journey and expertise."
}

export default function Home() {
    return <>
        <Heading subheading="Projects" heading="My Creative Work" className="text-center mb-6 sm:mb-12" />
        <div className="flex flex-wrap gap-x-8 gap-y-12 justify-center">
            {
                projects.map((elem, idx) => {
                    return <ProjectItem key={idx} project={elem} />
                })
            }
        </div>
    </>
}
