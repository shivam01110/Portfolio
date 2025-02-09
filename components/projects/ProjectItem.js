import Image from 'next/image'
import Link from 'next/link'
export default function ProjectItem({ project }) {
    return <div className="shadow-lg sm:shadow-xl from-gray-100 via-white to-gray-100 bg-gradient-to-t dark:bg-none max-w-[21rem] p-4 relative dark:bg-gray-900 dark:rounded-lg">
        <div className="flex items-center rounded-lg flex-col justify-center">
            <div>
                <Link href={project.link} target="_blank" className='text-left'>
                    <div className='relative w-fit rounded-md dark:rounded-none overflow-hidden group hover:-translate-y-1 transition-all duration-300'>
                        <Image 
                        placeholder='blur'
                        src={project.image} alt={project.title}
                        className='aspect-video saturate-[.75] transition-all group-hover:saturate-0 group-hover:-rotate-2 group-hover:scale-110 group-hover:blur-[1px] w-full shadow-md dark:shadow-2xl'  />
                        <div className='inset-0 hover:bg-black/60 absolute transition-colors duration-300 flex justify-center items-center'>
                            <button className='opacity-0 -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-gray-100 hover:bg-primary-500 font-bold text-primary-500 hover:text-gray-100 px-3 py-2 rounded-lg'>
                                Go to Project &rarr;
                            </button>
                        </div>
                    </div>
                    <h3 className='mt-5 w-fit font-semibold text-gray-800 hover:text-secondary-600 dark:text-gray-100 dark:hover:text-secondary-200 transition-colors duration-300 cursor-pointer text-lg tracking-wide' dangerouslySetInnerHTML={{__html : project.title}}></h3>
                </Link>
                <ul className='flex flex-wrap w-full mt-3 gap-2'>
                    {project.tags.map((elem) => {
                        return <li key={elem} className="px-3 py-1 text-xs rounded-full bg-gray-200 hover:bg-stone-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 transition-colors duration-200 cursor-default">{elem}</li>
                    })}
                </ul>
                <article dangerouslySetInnerHTML={{__html : project.desc}} className='my-4 text-sm dark:text-gray-300 dark:opacity-80 tracking-wider font-light text-justify' />
            </div>
        </div>
    </div>
}