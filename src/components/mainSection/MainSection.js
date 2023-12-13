import React, { Fragment } from "react";
import ProfilePic from "../../images/IMG-0504.jpg";
import { Projects } from "../../data/Projects";
import "react-vertical-timeline-component/style.min.css";
import VerticalTimeLine from "../verticalTimeline/VerticalTimeLine";
import ProjectCards from "../projectCards/ProjectCards";
import Contacts from "../followMe/Contacts";
import { AnimatePresence, motion } from "framer-motion"
import Skills from "../Skills";
// import Resume from "../../assets/file/Mohammed-Althaf-Resume.pdf"
function MainSection() {
  return (
    <AnimatePresence>
      <Fragment>
        <main className="w-[80%] mt-5">
          {/* About Section */}
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-24"
            id="about"
          >
            {/* image box */}
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340  bg-emerald-200 rounded-md relative">
                <img
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg"
                  src={ProfilePic}
                  alt="Profile"
                  
                />
              </div>
            </div>

            {/* content box */}
            <div className="w-full  flex flex-col items-center justify-center  h-fit md:mt-[150px]" id="download" >
              <p className="text-lg text-textBase text-center " >
                Passionate Self-taught Full Stack web developer specialising on MERN Stack with 
                application development experience and well-versed in a variety of front-end and 
                back-end technologies.Possess a solid commitment to the team environment and enjoy 
                working as a team member and independently.
              </p>
           <a href="#download" >   <motion.button whileTap={{ scale: 0.8 }}
                className="w-full md:w-auto relative mt-6 inline-flex items-center
             justify-center p-0.5 mb-2 mr-2 overflow-hidden  md:text-sm font-medium
              text-gray-900 rounded-lg group bg-gradient-to-br from-green-400
               to-blue-600 group-hover:from-green-400 group-hover:to-blue-600
                hover:text-white dark:text-white focus:ring-4 focus:ring-green-200
                 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50
                  hover:dark:shadow-lg hover:dark:shadow-teal-800/80 bg-primary"
              >
                <span
                  className="w-full md:w-auto  relative px-5 py-2.5 transition-all
               ease-in duration-75  bg-primary text-white dark:bg-gray-900 rounded-sm
                group-hover:bg-opacity-0"
                >
                  Download
                </span>
              </motion.button> </a>
            </div>
          </section>
          {/* Time line */}
          <section className="w-full flex items-center justify-center">
            <Skills />
          </section>
          {/* Time line */}
          <section className="w-full flex items-center justify-center my-10">
            <VerticalTimeLine />
          </section>
          {/* Project Section */}
          <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="projects"
          >
            {Projects &&
              Projects.map((project) => <ProjectCards project={project} />)}
          </section>
          {/* Contact */}
          <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
            <Contacts />

          </section>
        </main>
      </Fragment>
    </AnimatePresence>
  );
}

export default MainSection;
