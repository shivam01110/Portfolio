export default function Heading({subheading, heading, className}) {
    return <div className={className}>
        {
        subheading && <div>
            <LineHeading text={subheading} />
        </div>
        }
        <h1 className="px-2 text-[2em] sm:text-[2.25em] font-bold text-primary-500 dark:text-primary-400">{heading}</h1>
    </div>
}


export function LineHeading({ text }) {
    return <span className="inline-flex gap-x-1 items-center">
        <span className="rounded-full h-[0.16em] w-[2em] sm:w-[2.8em] bg-gray-600 dark:bg-gray-300"/>
        <span className="rounded-full h-[0.16em] w-[1em] sm:w-[1.5em] bg-gray-600 dark:bg-gray-300"/>
        <span className="rounded-full h-[0.16em] w-[0.2em] sm:w-[0.3em] bg-gray-600 dark:bg-gray-300"/>
        <span className="tracking-wide ml-2 font-medium text-gray-600 dark:text-gray-300">
            {text}
        </span>
    </span>
}