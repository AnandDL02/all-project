import React from 'react'
import img from "../assets/img.jpg"
import img3 from "../assets/bg.jpg"
import { Link } from 'react-router-dom'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import css from "../assets/css.svg"
import html from "../assets/html.svg"
import react from "../assets/react.png"
import { IoLogoGithub } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import my1 from "../assets/my11.jpg"
import AdvancedHeadlineEffect from './AdvancedHeadlineEffect';
import itaca from "../assets/pic2.png"
import leesa from "../assets/pic3.jpeg"




function Header() {
  return (
    <>
    <div className="header w-full h-[90px] flex justify-between px-[5vw] bg-[white] fixed top-0 z-[20]">
    <div className="logo  w-[12%] h-[90px]  flex justify-between text-[rgb(60,62,65)]    items-center">
      <img src={img} className="w-[60px] h-[60px] rounded-[50%] object-cover " />
      <p className='text-[20px] font-[600] cursor-pointer'>INBIO</p>
    </div>
    <div className="nev w-[40%] h-[90px]  flex justify-between items-center capitalize text-[rgb(60,62,65)] text-[15px] font-[600]" >
      <Link to="/"></Link>
      <Link to="/home">home</Link>
      <Link to="/about">about</Link>
      <Link to="/portpolio">portfolio</Link>
      <Link to="/resum">Resume</Link>  
      <Link to="/contact">contact</Link>
    </div>
    
    </div>
    <div className="homepage w-full h-[650px] px-[5vw] flex mt-[100px]">
     <div className="info w-[60%] h-[650px]">

     <div data-aos="fade-right" className="info1 w-[100%] h-[500px] flex flex-col justify-evenly  py-[5vw]">
      <p className=' text-[rgb(60,62,65)] font-[500] capitalize tracking-[3px]'>Welcome to my world</p>
      <p className='text-[50px] font-[700]'>Hi, I’m <span className='text-[rgb(255,1,79)]'>Anand Dalsaniya <AdvancedHeadlineEffect/>
      </span>  
      
       </p>
       
      <p className=' text-[15px] text-[rgb(60,62,65)] '>I use animation as a third dimension by which to simplify <br /> experiences and kuiding thro each and every interaction. I’m not <br /> adding motion just to spruce things up, but doing it in ways that.</p>
     </div>
     <div data-aos="fade-right" className="info1 w-[100%] h-[100px]  uppercase flex  flex-col">
      <div className="div1 w-[100%] h-[40px]  flex items-center">
       <div className="div11 w-[100%] h-[40px] flex items-center">
       <p className=' uppercase text-[14px] font-[600] tracking-[3px]'>find with me</p>
       </div>
       <div className="div11 w-[100%] h-[40px] flex items-center">
       <p className=' uppercase text-[14px] font-[600] tracking-[3px]'>best skill on </p>
       </div>
       
       
      </div>
      
      <div className="div1 w-[100%] h-[60px]  flex  justify-between items-center text-[rgb(60,62,65)] ">
          <div className="find w-[50%] h-[60px] flex gap-[30px] items-center">
          <div className="div2 w-[60px] h-[60px] rounded-[10px] flex justify-center items-center text-[23px]">
          <FiFacebook />
          </div>
          <div className="div2 w-[60px] h-[60px]  rounded-[10px] flex justify-center items-center text-[23px]">
          <FaInstagram />
          </div>
          <div className="div2 w-[60px] h-[60px]  rounded-[10px] flex justify-center items-center text-[23px]">
          <FiLinkedin />
          </div>
          </div>
          
          <div className="find w-[50%] h-[60px] flex   gap-[30px]">
          <div className="div w-[60px] h-[60px] rounded-[10px] flex justify-center items-center text-[20px]">
          
          <img src={html} className="w-[30px] h-[30px]" />
          </div>
          <div className="div w-[60px] h-[60px] rounded-[10px] flex justify-center items-center text-[20px]">
          
          <img src={css} className="w-[30px] h-[30px]" />
          </div>
          <div className="div w-[60px] h-[60px] rounded-[10px] flex justify-center items-center text-[20px]">
          
          <img src={react} className="w-[30px] h-[30px]" />
          </div>
          </div>
          
        
      </div>

     </div>
     </div>
     <div className="info w-[40%] h-[600px] flex justify-center  items-center px-[2vw] ">
      <div data-aos="fade-left" className="pic  w-[100%] mt-[40px] h-[500px] rounded-[20px] overflow-hidden">
          <img src={my1} className="w-[100%] h-[500px] object-cover"  />
      </div>


      
     </div>
    </div>
    <div className="aboutpage w-full h-auto ">
        <div className="info px-[5vw] w-full h-[200px] flex  justify-center items-center flex-col">
          <p className='text-[rgb(249,0,77)] tracking-[2px] text-[14px] font-[500] uppercase'>about me</p>
          <h1 className='text-[rgb(60,62,65)] text-[55px] font-[700]'>Web-Developer</h1>
        </div>
        <div className="project w-[full] h-auto px-[5vw]">
   
    <div className="project1 w-full h-auto px-[5vw] ">
        <div className="pro w-[100%] h-[300px] rounded-[20px] flex">
          
          <div className="p1 w-[50%] h-[300px]">
            <img src={img3} className="w-[100%] h-[100%] rounded-[20px] object-cover" />
          </div>
         
          <div className="p2 w-[50%] h-[300px] px-[3vw]   flex flex-col ">
            
            <div className="p3 w-[100%] h-[300px]  flex flex-col justify-evenly items-center">
            <p className='text-[15px] text-[rgb(60,62,65)] leading-7 px-[2vw]'>As a Web-Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, Bootstrap ,JQuery and React . I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting PSD to HTML and Figma to HTML tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
             </div>
             </div>
        </div>
    </div>
    </div>
    </div>
    <div className="project w-[full] h-auto px-[5vw] py-[25px]">
    <div className="info w-full h-[200px] flex  justify-center items-center flex-col">
          <p className='text-[rgb(249,0,77)] tracking-[2px] text-[14px] font-[500] uppercase'>Visit my portfolio and keep your feedback</p>
          <h1 className='text-[rgb(60,62,65)] text-[55px] font-[700]'>My Portfolio</h1>
    </div>
    <div className="project1  w-full h-auto px-[5vw] py-[30px]">
        <div className="pro w-[100%] h-[300px] rounded-[20px] flex">
          
          <div className="p1 w-[50%] h-[300px]">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/e14bb5161343067.Y3JvcCwxMDM2LDgxMCwwLDExMg.png" className="w-[100%] h-[100%] rounded-[20px] object-cover" />
          </div>
         
          <div className="p2 w-[50%] h-[300px] px-[3vw]   flex flex-col ">
            
            <div className="p3 w-[100%] h-[300px]  flex flex-col justify-evenly items-center">
            <h1 className='text-center text-[30px] font-[700] text-[blue]'>Phyllo</h1>
            <p className='text-center'>Phyllo is a website I created using HTML, CSS, and Bootstrap. It features a clean design, responsive layout, and modern UI components. The site is optimized for mobile and desktop devices using Bootstrap's grid system. It reflects my skills in front-end web development and showcases efficient use of styling and structure.</p>
            </div>
            <div className="p3 w-[100%] h-[100px] flex justify-center items-center">
              <div className="git w-[200px] h-[50px]  flex justify-center items-center gap-[5px] ">
              <a href="" className='text-[16px] font-[700]'>Code</a>
              <IoLogoGithub className='text-[20px]' />
              </div>
              <div className="git w-[200px] h-[50px]  flex justify-center items-center  gap-[5px]">
              <a href=""className='text-[16px] font-[700]'>Live Demo</a>
              <FaExternalLinkAlt />
              </div>
               
                
            </div>

             </div>
          
        </div>
    </div>
    <div className="project1  w-full h-auto px-[5vw] py-[30px]">
        <div className="pro w-[100%] h-[300px] rounded-[20px] flex">
          
        <div className="p2 w-[50%] h-[300px] px-[3vw]   flex flex-col ">
            
            <div className="p3 w-[100%] h-[300px]  flex flex-col justify-evenly items-center">
            <h1 className='text-center text-[30px] font-[700] text-[rgb(237,39,136)] capitalize '>itaca</h1>
            <p className='text-center'>Itaca is a website I developed using HTML, Tailwind CSS, Bootstrap, and React, responsive design powered by Tailwind's utility React adds dynamic functionality and efficient rendering to enhance the user experience. This project highlights my skills in combining frameworks and libraries to create a professional, interactive web application.</p>
            </div>
            <div className="p3 w-[100%] h-[100px] flex justify-center items-center">
              <div className="git w-[200px] h-[50px]  flex justify-center items-center gap-[5px] ">
              <a href="" className='text-[16px] font-[700]'>Code</a>
              <IoLogoGithub className='text-[20px]' />
              </div>
              <div className="git w-[200px] h-[50px]  flex justify-center items-center  gap-[5px]">
              <a href="https://cheery-quokka-60e53b.netlify.app/home/home"className='text-[16px] font-[700]'>Live Demo</a>
              <FaExternalLinkAlt />
              </div>
               
                
            </div>

             </div>
          <div className="p1 w-[50%] h-[300px]">
            <img src={itaca} className="w-[100%] h-[100%] rounded-[20px] object-fill" />
          </div>
         
         
          
        </div>
    </div>
    <div className="project1  w-full h-auto px-[5vw] py-[30px]">
        <div className="pro w-[100%] h-[300px] rounded-[20px] flex">
          
          <div className="p1 w-[50%] h-[300px]">
            <img src={leesa} className="w-[100%] h-[100%] rounded-[20px] object-cover" />
          </div>
         
          <div className="p2 w-[50%] h-[300px] px-[3vw]   flex flex-col ">
            
            <div className="p3 w-[100%] h-[300px]  flex flex-col justify-evenly items-center">
            <h1 className='text-center text-[30px] font-[700] text-[rgb(15,57,59)] capitalize'>leesa</h1>
            <p className='text-center'>Leesa is a website I created using HTML and CSS. The site has a simple yet appealing layout, showcasing effective use of custom styling and creativity. It is fully responsive and designed to provide a smooth user experience across devices.  my skills in front-end development and attention to detail in design..</p>
            </div>
            <div className="p3 w-[100%] h-[100px] flex justify-center items-center">
              <div className="git w-[200px] h-[50px]  flex justify-center items-center gap-[5px] ">
              <a href="" className='text-[16px] font-[700]'>Code</a>
              <IoLogoGithub className='text-[20px]' />
              </div>
              <div className="git w-[200px] h-[50px]  flex justify-center items-center  gap-[5px]">
              <a href=""className='text-[16px] font-[700]'>Live Demo</a>
              <FaExternalLinkAlt />
              </div>
               
                
            </div>

             </div>
          
        </div>
    </div>
    <div className="project1  w-full h-auto px-[5vw] py-[30px]">
        <div className="pro w-[100%] h-[300px] rounded-[20px] flex">
          
        <div className="p2 w-[50%] h-[300px] px-[3vw]   flex flex-col ">
            
            <div className="p3 w-[100%] h-[300px]  flex flex-col justify-evenly items-center">
            <h1 className='text-center text-[30px] font-[700] text-[rgb(1,0,65)] capitalize'>lenskart</h1>
            <p className='text-center'>Lenckart is a website I built using HTML, Tailwind CSS, jQuery, and React. It combines Tailwind's utility-first styling with React's dynamic capabilities for a modern and responsive design. jQuery is used to handle DOM manipulation and add interactive elements, This project showcases my expertise in integrating multiple tools and frameworks to create a seamless and feature-rich web application.</p>
            </div>
            <div className="p3 w-[100%] h-[100px] flex justify-center items-center">
              <div className="git w-[200px] h-[50px]  flex justify-center items-center gap-[5px] ">
              <a href="" className='text-[16px] font-[700]'>Code</a>
              <IoLogoGithub className='text-[20px]' />
              </div>
              <div className="git w-[200px] h-[50px]  flex justify-center items-center  gap-[5px]">
              <a href=""className='text-[16px] font-[700]'>Live Demo</a>
              <FaExternalLinkAlt />
              </div>
               
                
            </div>

             </div>
          <div className="p1 w-[50%] h-[300px]">
            <img src="https://cdn.askmeoffers.com/wp-content/uploads/2023/05/24120234/lenskart-review-1200x675.webp" className="w-[100%] h-[100%] rounded-[20px] object-fill" />
          </div>
        </div>
    </div>
    </div>
    <div className="Contact w-full h-[700px] border-[1px] border-[black]">

    <div className="info px-[5vw] w-full h-[200px] flex  justify-center items-center flex-col">
          <p className='text-[rgb(249,0,77)] tracking-[2px] text-[14px] font-[500] uppercase'>about me</p>
          <h1 className='text-[rgb(60,62,65)] text-[55px] font-[700]'>Contact With Me</h1>
        </div>
      <div className="box1 w-[50%] h-[500px] border-[1px] border-[black]">
    
      </div>
      <div className="box1 w-[50%] h-[500px] border-[1px] border-[black]">

      </div>
    
    </div>
    

    </>
  )
}

export default Header
