"use client"
import { Typewriter } from "react-simple-typewriter"

export default function Writer() {
    return <>
        <Typewriter
            words={['Shivam','Developer' ,'Coder', 'Designer']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
        />
    </>
}