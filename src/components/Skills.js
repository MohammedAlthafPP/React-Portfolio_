import React from 'react'
import HTML from '../assets/img/html.png'
import CSS from '../assets/img/css.png'
import JS from '../assets/img/javascript.png'
import Reacticon from '../assets/img/react.png'
import Node from '../assets/img/node.png'
import Mongo from '../assets/img/mongo.png'
import Express from '../assets/img/express.png'
import Bootstrap from '../assets/img/bootstrap.png'
import AWS from '../assets/img/aws.png'
import Figma from '../assets/img/figma.png'
import Github from '../assets/img/github.png'
import Tailwind from '../assets/img/tailwind.png'

function Skills() {
  return (
    <div className='bg-[#121316] w-full h-full pt-12 pb-10 ' id='skills' name='skills'>
            <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center  pt-12 mt-12'>
                <div className=''>
                    <p className='text-white font-bold text-4xl border-b-4 inline border-blue-400'>Skills</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 text-center mt-5'>
                    <div className='shadow-md hover:shadow-orange-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={HTML} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>HTML</p>
                    </div>
                    <div className='shadow-md hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg'>
                        <img src={CSS} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>CSS</p>
                    </div>
                    <div className='shadow-md hover:shadow-yellow-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={JS} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>JavaScript</p>
                    </div>
                    <div className='shadow-md hover:shadow-blue-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Reacticon} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>React</p>
                    </div>
                    <div className='shadow-md hover:shadow-green-400 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Node} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Node Js</p>
                    </div>
                    <div className='shadow-md hover:shadow-green-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Mongo} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>MongoDB</p>
                    </div>
                    <div className='shadow-md hover:shadow-gray-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Express} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Express Js</p>
                    </div>
                    <div className='shadow-md hover:shadow-white hover:scale-110 duration-700 rounded-lg'>
                        <img src={Github} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Github</p>
                    </div>
                    <div className='shadow-md hover:shadow-yellow-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={AWS} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>AWS</p>
                    </div>
                    <div className='shadow-md hover:shadow-sky-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Tailwind} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>TailwindCSS</p>
                    </div>
                    <div className='shadow-md hover:shadow-violet-700 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Bootstrap} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Bootstrap</p>
                    </div>
                    <div className='shadow-md hover:shadow-rose-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Figma} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Figma</p>
                    </div>
                </div>
            </div>
        </div>  
  )
}

export default Skills