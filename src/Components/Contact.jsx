// import { FaGithub } from "react-icons/fa";
// import { CiMail } from "react-icons/ci";

// const Contact = () => {
//   return(
//     <>

//     <div className="px-20 py-20 bg-gradient-to-br from-gray-900 to-blue-800">

//       <h1 className="flex items-center  text-white font-semibold text-2xl"> <CiMail /> Get in touch</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
//         <div className="space-y-9 ">
//           <h2 className="text-gray-300 text-lg">I'm always open to new opportunities and collaborations. Feel free to reach out!</h2>

//           <div className="flex flex-col gap-9 text-gray-300">
//           <span className="flex items-center gap-3 text-gray-300  hover:text-blue-400">
//           <CiMail />
//           <a href="mailto:farouqolamilekan2006@gmail.com">farouqolamilekan2006@gmail.com</a>
//           </span>
//           <span className="flex items-center gap-3  text-gray-300  hover:text-blue-400">
//           <FaGithub />
//           <a href="https://github.com/olamilekan29" target="_blank"> Github</a>
//           </span>
//           </div>

//         </div>
//         <form>
//         <div className="grid space-y-10 items-center justify-center">
//           <div className="grid">
//             <label htmlFor="" className="text-white font-semibold text-sm mb-2">Name</label>
//             <input type="text" className="w-110 px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
//           </div>

//           <div className="grid">
//             <label htmlFor="" className="text-white font-semibold text-sm mb-2">Email</label>
//             <input type="text" className="w-110 px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
//           </div>

//           <div className="grid">
//             <label htmlFor="" className="text-white font-semibold text-sm mb-2">Message</label>
//             <input type="text" className=" h-30 w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
//           </div>


//           <button type="submit" className="bg-blue-500 rounded-lg w-110 px-2 py-3 text-white font-bold cursor-pointer">Send Message</button>
//         </div>
//         </form>
//       </div>
//       </div>
//     </>
//   )
// }

// export default Contact;







import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_umway15", 
        "template_lpzrxwr", 
        form.current,
        "0XIMTOrNgNsVS8lrs"    
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully ✅");
          form.current.reset(); // clear form after submit
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <div className="MD:px-20 md:py-20 px-5 py-15 bg-gradient-to-br from-gray-900 to-blue-800">
      <h1 className="flex items-center text-white font-semibold text-2xl">
        <CiMail /> Get in touch
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
        {/* Left info */}
        <div className="space-y-9">
          <h2 className="text-gray-300 text-lg">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </h2>

          <div className="flex flex-col gap-9 text-gray-300">
            <span className="flex items-center gap-3 hover:text-blue-400">
              <CiMail />
              <a href="mailto:farouqolamilekan2006@gmail.com">
                farouqolamilekan2006@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-3 hover:text-blue-400">
              <FaGithub />
              <a href="https://github.com/olamilekan29" target="_blank" rel="noreferrer">
                Github
              </a>
            </span>
          </div>
        </div>

        {/* Contact form */}
        <form ref={form} onSubmit={sendEmail} className="grid space-y-10">
          <div className="grid">
            <label className="text-white font-semibold text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            />
          </div>

          <div className="grid">
            <label className="text-white font-semibold text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            />
          </div>

          <div className="grid">
            <label className="text-white font-semibold text-sm mb-2">Message</label>
            <textarea
              name="message"
              required
              className="h-32 w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 rounded-lg w-full px-2 py-3 text-white font-bold cursor-pointer hover:bg-blue-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
