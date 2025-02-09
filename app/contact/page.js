import { ResumeBtn } from "@/components/utilities/Buttons";
import Heading from "@/components/utilities/Heading";
import SocialIcons from "@/components/utilities/SocialIcons";

export const metadata = {
    title: 'Contact | Shivam Kumar',
    description : "Feel free to Contact me for any Projects"
}

export default function Home() {
    return <>
        <Heading subheading="Contact Me" heading="Get In Touch" className="text-center mb-4" />
        <article className="text-lg max-w-2xl mx-auto px-3 sm:px-0 py-5 text-justify dark:text-stone-300">
            Don't hesitate to drop me a message via email or connect with me on any of the social platforms listed. I'm constantly on the lookout for fresh and thrilling opportunities. Feel free to reach out—I'm excited to hear from you!
        </article>
        <div className="mx-auto w-fit my-6 sm:my-12">
            <SocialIcons large/>  
        </div>

        <div className="my-12 sm:my-2 mx-auto w-fit">
            <ResumeBtn/>
        </div>
    </>
}