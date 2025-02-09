
export default function WorkBox({ title, desc, timeline, order }) {
    return <div className="min-h-[8rem] w-full relative">
        <div>
            <div className="hidden sm:flex justify-center items-center rounded-full bg-primary-500 z-20 w-4 h-4 absolute" style={{ left: "calc(50% - 0.5rem + 0.125rem)", top: "calc(50% - 0.5rem)" }}>
                <div className="hidden sm:block rounded-full bg-white z-20 w-2 h-2" />
            </div>
            <div className="flex justify-center items-center sm:hidden rounded-full bg-primary-500 z-20 w-4 h-4 absolute" style={{ left: "calc(-0.5rem + 0.125rem)", top: "calc(50% - 0.5rem)" }}>
                <div className="sm:hidden rounded-full bg-white z-20 w-2 h-2" />
            </div>
        </div>
        <div className={`sm:w-1/2 ${order ? "pl-5 sm:pl-0 sm:mr-auto sm:pr-6" : "pl-5 sm:ml-auto sm:pl-6"} h-full p-2`}>
            <div className={`shadow-md from-primary-400 via-primary-500 to-primary-600 dark:from-gray-600 dark:via-gray-600 dark:to-gray-500 h-full w-full rounded-xl relative p-6 transition-transform duration-200 ease-out ${order ? "sm:hover:-translate-x-1 bg-gradient-to-r" : "sm:hover:translate-x-1 bg-gradient-to-l"} hover:translate-x-0`}>
                <div className={`hidden sm:block absolute border-[7px] border-solid border-transparent ${order ? "border-l-primary-600 dark:border-l-gray-500 left-full" : "border-r-primary-600 dark:border-r-gray-500 right-full"} h-0 w-0`} style={{ top: "calc(50% - 0.5rem)" }} />
                <div className={`sm:hidden absolute border-[7px] border-solid border-transparent border-r-primary-600 dark:border-r-gray-500 right-full h-0 w-0`} style={{ top: "calc(50% - 0.5rem)" }} />
                <div className="flex flex-col justify-evenly h-full">
                    <div className="text-sm text-white my-2 font-medium">{timeline}</div>
                    <h2 className="text-slate-50 font-bold text-2xl">{title}</h2>
                    <div className="text-slate-50 text-sm">
                        {desc.map((elem, idx) => {
                            return <p key={idx} dangerouslySetInnerHTML={{ __html: elem }} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
}