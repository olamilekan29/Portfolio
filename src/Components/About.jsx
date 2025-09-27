import myAnime from "../assets/images/myAnime.png";

const About = () => {
  return(
    <div className="grid md:px-20 md:py-20 px-5 py-10 bg-gradient-to-br from-gray-900 to-blue-700">
     
        <h1 className="flex items-center text-2xl font-bold text-white text-bottom mb-16 font-[Open_Sans]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-7 h-7 text-blue-400"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          About Me
        </h1>
      <div className="md:flex items-center justify-center">
        <div className="space-y-6 md:mr-20">
          <h2 className="text-white text-xl leading-7 font-thin font-[Open_Sans]">I'm a passionate <span className="text-blue-400"> Front-End Developer</span> specializing in modern web technologies. With a keen eye for detail and problem-solving skills, I create seamless, user-friendly applications that enhance digital experiences.</h2>

          <div class="p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:scale-105 transition w-66 mb-10">
            <h1 className="text-white">Frontend</h1>
            <h3 className="text-gray-400">HTML, CSS, JAVASCRIPT, REACT</h3>
          </div>
       </div>
      <div >
        <img className="w-400 md:h-70 rounded-lg shadow-lg hover:scale-105 transition md:pr-10" src={myAnime} alt="" />
      </div>
      </div>

      
    </div>

    
  )
  
}
export default About;