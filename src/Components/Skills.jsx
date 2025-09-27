import { CiLaptop } from "react-icons/ci";
import { RiBrain2Line } from "react-icons/ri";


const Skills = () =>{

    const skills = [
      {
        id:1,
        name:'React',
        level:'88',
        description:'Component architecture, Hooks, Context API',

      },
      {
        id:2,
        name:'Javascript',
        level:'83',
        description:'ES6+, Async/Await, DOM manipulation',

      },
      {
        id:3,
        name:'HTML/CSS3',
        level:'93',
        description:'Semantic Markup,Flexbox, Grid',

      },
      {
        id:4,
        name:'GIT',
        level:'80',
        description:'Version control, Branching strategies',

      },
      {
        id:5,
        name:'Tailwind CSS',
        level:'90',
        description:'Utility-first CSS, Responsive design',

      }


    ]



  return(
    <>
    
      <div className="grid items-center justify-center   py-6 bg-gradient-to-br from-blue-700 to-gray-900 ">
        <h1 className="flex items-center justify-center text-white font-bold text-3xl pb-15"><CiLaptop /> Skills & Expertise </h1>
        <div className="p-6 w-110  bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
          {skills.map((skill =>(
            <div key={skill.id} className="space-y-4">
              <div className="flex items-center justify-between mb-4 ">
                <h3 className="text-white ">{skill.name}</h3>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <p className="text-gray-400 text-x pb-4">{skill.description}</p>



            </div>
          )))}
        </div>

       


      
      </div>




    </>
  )
}
export default Skills;