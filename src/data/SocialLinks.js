import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube,IoLogoFacebook } from "react-icons/io5";

export const SocialLinks = 
[
    {
        id: 1,
        icon : <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>,
        name: "GitHub",
        link : "https://github.com/MohammedAlthafPP"
    },
    {
        id: 2,
        icon : <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer"/>,
        name: "LinkedIn",
        link : "https://www.linkedin.com/in/mohammed-althaf-pp"
    },
    {
        id: 3,
        icon : <IoLogoInstagram className="text-fuchsia-700 text-3xl cursor-pointer"/>,
        name: "Instagram",
        link : "https://www.instagram.com/althaf_mongam/"
    },
    {
        id: 4,
        icon : <IoLogoFacebook className="text-blue-600 text-3xl cursor-pointer"/>,
        name: "Facebook",
        link : "https://www.facebook.com/mohammedalthaf.mongam"
    },
    
    {
        id: 5,
        icon : <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer"/>,
        name: "Twitter",
        link : "https://twitter.com"
    },
   
]