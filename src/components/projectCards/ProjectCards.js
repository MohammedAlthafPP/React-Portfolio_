import React, { Fragment } from 'react'
import {IoLogoGithub} from "react-icons/io5"
import {AnimatePresence,motion} from "framer-motion"

function ProjectCards({project}) {
  return (
    <AnimatePresence>
    <Fragment>
        <div key={project.id} className='border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out '> 
       <a href={project.live}> <p className='text-md text-textBase font-medium uppercase'>{project.name.length > 25 ? `${project.name.slice(0,25)}...` : project.name}
       </p> </a>
      <a href={project.live}>  <img src={project.image} alt="ImgName" className='w-full h-full object-cover rounded-md my-4' /></a>

        <div className='flex flex-1 items-center justify-between'>
            <p className='text-lg text-gray-300 '>Technologies
            <span className='block text-sm text-gray-500'>{project.techs.length > 34 ? `${project.techs.slice(0,34)}...` : project.techs}</span>
            </p>

            <a href={project.github}>
                <motion.div whileTap={{scale: 0.8}}>
                    <IoLogoGithub className='text-textBase text-3xl cursor-pointer'/>
                </motion.div>
            </a>

        </div>




        </div>

    </Fragment>
    </AnimatePresence>
  )
}

export default ProjectCards