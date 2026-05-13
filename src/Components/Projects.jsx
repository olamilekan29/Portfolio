// import Cofee from '../assets/images/cofee.png'

// const Projects = () =>{

//     const proj = [
//         {
//           id: '1',
//           image: Cofee,
//           name: 'Cofee Website',
//           details: 'A responsive coffee website built with React and Tailwind CSS, featuring a modern design to enhance user experience.',
//           link: 'https://cofee-farouq.vercel.app/',
//           span: 'React, Tailwind CSS',
          
//         },

//         {
//           id: '1',
//           image: Cofee,
//           name: 'Cofee Website',
//           details: 'A responsive coffee website built with React and Tailwind CSS, featuring a modern design to enhance user experience.',
//           link: 'https://cofee-farouq.vercel.app/',
//           span: 'React, Tailwind CSS',
          
//         },

        


//     ]


//   return(
//     < >
//     <div className="md:flex items-center justify-center bg-gradient-to-br from-blue-700 to-gray-900 py-20">

    


//      <div className='w-110 text-white bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px; transform: none;'>
//       {proj.map((project) => (
//         <div key={project.id}>
//           <img src={project.image}  className='w-full h-68 rounded-t-xl'/>
//          <div className='bg-gray-800 px-8 font-[Open_Sans] py-10 rounded-b-xl'> 
//           <h2 className='font-semibold mb-4 font-[Open_Sans] text-4xl'>{project.name}</h2>
//           <h3 className='text-gray-300 mb-4'>{project.details}</h3>
//           <div className='flex flex-wrap gap-2 font-[Open_Sans] mb-4 text-sm'>
//             <span className='px-2 py-1 bg-gray-700 rounded-full text-xs'>{project.span}</span>
            
//           </div>
//           <a href= {project.link} target='_blank' className='flex items-center gap-1 text-blue-400 hover:text-blue-200 w-25 cursor-pointer'>
//             View Project
//           </a>
//           </div>

          
//         </div>
//      ))}
//     </div>
//     </div>
    
//     </>
//   )
// }
// export default Projects;




import Cofee from '../assets/images/Cofee.png'
import Certify from '../assets/images/Certify.png'
import Redstore from '../assets/images/Redstore.png'
import Bumpa from '../assets/images/Bumpa.png'
import Bizland from '../assets/images/Bizland.png'
import casa from '../assets/images/casalanca.png'
import arc from '../assets/images/arc.png'

const Projects = () => {
  const proj = [
    {
      id: '1',
      image: Cofee,
      name: 'Cofee Website',
      details:
        'A responsive coffee website built with React and Tailwind CSS, featuring a modern design to enhance user experience.',
      link: 'https://cofee-farouq.vercel.app/',
      span: 'React, Tailwind CSS',
    },
    {
      id: '2',
      image: Bizland,
      name: 'Biz-Land',
      details:'A responsive business landing page built with React and Tailwind CSS, featuring a modern design to enhance user experience.',

      link: 'https://biz-land-farouq.vercel.app/',
      span: 'HTML, CSS and JAVASCRIPT',
    },
    {
      id: '6',
      image: casa,
      name: 'Casastore',
      details: 'A responsive e-commerce website built with React and Tailwind CSS, featuring a modern design to enhance user experience.',
      link: 'https://casastore.vercel.app/',
      span: 'React, Tailwind CSS',
    },
    {
      id: '3',
      image: Certify,
      name: 'Certifying',
      details:'A responsive certification website built with React and Tailwind CSS, featuring a modern design to enhance user experience.',

      link: 'https://github.com/olamilekan29/Certifying',
      span: 'React, Tailwind CSS',
    },

    {
      id: '4',
      image: Redstore,
      name: 'Red Store',
      details:'A responsive e-commerce website built with HTML and CSS, featuring a modern design to enhance user experience.',
      link: 'https://github.com/olamilekan29/farouq-red-store',
      span: 'HTML, CSS and JAVASCRIPT',
    },

    {
      id: '5',
      image: Bumpa,
      name: 'Bumpa Website',
      details: 'A responsive Bumpa website built with React and Tailwind CSS, featuring a modern design to enhance user experience.',
      link: 'https://bumpa-olamilekan.vercel.app/',
      span: 'React, Tailwind CSS',
    },
    {
      id: '6',
      image: arc,
      name: ' Architecture Website',
      details: 'A responsive Architecture website built with React and Tailwind CSS, featuring a modern design to enhance user experience.',
      link: 'https://succint-architecture.vercel.app/',
      span: 'React, Tailwind CSS',
    },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-700 to-gray-900 py-20 px-5">
      
      <div className="flex flex-wrap justify-center gap-8">
        {proj.map((project) => (
          <div
            key={project.id}
            className="w-100 text-white h-112 bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
          >
            <img src={project.image} className="w-full md:48  object-cover" alt={project.name} />
            <div className="bg-gray-800 px-6 py-6 rounded-b-xl">
              <h2 className="font-semibold mb-4 text-2xl">{project.name}</h2>
              <h3 className="text-gray-300 mb-4">{project.details}</h3>
              <div className="flex flex-wrap gap-2 mb-4 text-sm">
                <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                  {project.span}
                </span>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-200 cursor-pointer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
