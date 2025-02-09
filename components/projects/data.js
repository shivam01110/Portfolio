import scie from '@/public/images/projects/scie.png'
import visualizertool from '@/public/images/projects/visualizertool.png'
import Harmonika from '@/public/images/projects/Harmonika.png'
import todojquery from '@/public/images/projects/todojquery.png'
import icsccat from '@/public/images/projects/iccscat.png'
import icecsp from '@/public/images/projects/icecsp.png'
import peertalks from "@/public/images/projects/peertalks.png"

export const projects = [
    {
        title: "Peer Talks",
        desc : "A Chatting platform for peers of inter and intra campus to talk with. Real-Time Chatting, Peer-to-Peer Communication and User-Friendly Interface.",
        tags : ["mySql", "Web Development", "DBMS"],
        link : "https://github.com/shivam01110/PeerTalks",
        image : peertalks
    },
    {
        title: "Visualizer Tool",
        desc: "A Tool to Visualize Figures using Coordinates. Created whole GUI using C language.",
        tags: ["C","CSS"],
        link: "https://github.com/shivam01110/-Visualizer_Tool-",
        image: visualizertool
    },
    {
        title: "Harmonika",
        desc: "A Flask-based music recommendation system integrating ML algorithms, scraping 10,000+ music records, and improving recommendation accuracy.",
        tags: ["NextJs", "ReactJs", "TailWind"],
        link: "https://harmonika.onrender.com/",
        image: Harmonika
    }
]