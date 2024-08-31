import React from "react";
import chat from '../../assets/meeting.png'
import agreement from "../../assets/agreement.png"
import achieve from "../../assets/award.png"
import user from "../../assets/user.png"
import mentor from "../../assets/mentor.jpg"
import mentee from "../../assets/mentee.jpg"
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
function Intro() {

  const navigate = useNavigate();

  const drive = () => {
    navigate("/register")
  }
    return(
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 sm:px-6 lg:px-8 bg-[#ffffff]">
             <div className="header bg-white pt-5 pb-5 flex justify-between w-full sticky top-0">
            <div className="logo text-3xl font-bold text-[#6f47b3]">Mentor Connect</div>
            <div className="menu">
              <Link to='Head' smooth={true} className="cursor-pointer text-foreground font-semibold hover:text-primary hover:text-[#6f47b3]">Become a Mentor</Link>
              <Link to= 'Head' smooth={true} className="cursor-pointer ml-4 text-foreground font-semibold hover:text-primary hover:text-[#6f47b3]">Find a Mentor</Link>
              <Link to= 'Work' smooth={true} className="cursor-pointer ml-4 text-foreground font-semibold hover:text-primary hover:text-[#6f47b3]">How it Works</Link>
              <Link to= 'Testimonial'  smooth={true} className="cursor-pointer ml-4 text-foreground font-semibold hover:text-primary hover:text-[#6f47b3]">Testimonials</Link>
              <button onClick={drive} className="w-fit px-[2rem] ml-5 h-[45px] border-none rounded-[40px] font-semibold text-white bg-[#6f47b3]">Join the Community</button>
             </div>
        </div>
      <div className="mx-auto max-w-4xl w-full mb-10">
        <div className="text-center pt-[5rem] mb-[2rem]" id="Head">
          <h1 className="text-4xl font-bold tracking-tight text-foreground text-[#6f47b3]">Mentor Mentee Interaction Platform</h1>
          <p className="mt-2 text-xl text-muted-foreground">
            Connect with experienced professionals and grow your skills.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-[5rem]">
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src={mentor}
              alt="Mentor"
              width={100}
              height={100}
              className="text-primary"
              style={{ aspectRatio: "60/100" }}
            />
            <h2 className="text-2xl font-bold text-[#6f47b3]">Become a Mentor</h2>
            <p className="text-muted-foreground">
              Share your expertise and guide others on their journey. Mentor aspiring professionals and help them reach
              their full potential.
            </p>
            <button onClick={drive} className="w-full h-[45px] border-none rounded-[40px]  bg-[#8440fa] text-white duration-200 hover:bg-[#582ca4]">Join as a Mentor</button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src={mentee}
              alt="Mentee"
              width={150}
              height={150}
              className="text-primary"
              style={{ aspectRatio: "90/100" }}
            />
            <h2 className="text-2xl font-bold text-[#6f47b3]">Find a Mentor</h2>
            <p className="text-muted-foreground">
              Connect with experienced professionals who can provide valuable insights, advice, and support to help you
              grow and develop your skills.
            </p>
            <button onClick={drive} className="w-full h-[45px] border-none rounded-[40px]  bg-[#8440fa] duration-200 hover:bg-[#582ca4] text-white">Find a Mentor</button>
          </div>
        </div>
        <div className="text-center mb-[2rem] pt-[5rem]" id="Work">
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-[#6f47b3]">How it Works</h2>
          <p className="mt-2 text-muted-foreground">Our platform makes it easy to connect mentors and mentees.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-[5rem]">
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src={agreement}
              alt="Search"
              width={90}
              height={90}
              className="text-primary"
              style={{ aspectRatio: "100/100" }}
            />
            <h3 className="text-xl font-bold text-[#6f47b3]">Find a Match</h3>
            <p className="text-muted-foreground">
              Browse our directory of experienced professionals and find the perfect mentor for your needs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src={chat}
              alt="Chat"
              width={100}
              height={100}
              className="text-primary"
              style={{ aspectRatio: "100/100", objectFit: "cover" }}
            />
            <h3 className="text-xl font-bold text-[#6f47b3]">Connect and Communicate</h3>
            <p className="text-muted-foreground">
              Engage in meaningful conversations, share knowledge, and build a lasting relationship with your mentor or
              mentee.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src={achieve}
              alt="Growth"
              width={90}
              height={90}
              className="text-primary"
              style={{ aspectRatio: "100/100"}}
            />
            <h3 className="text-xl font-bold text-[#6f47b3]">Achieve Your Goals</h3>
            <p className="text-muted-foreground">
              With the guidance and support of your mentor, unlock your full potential and achieve your personal and
              professional goals.
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-[5rem]">
          <button onClick={drive} className="w-full h-[45px] border-none rounded-[40px] bg-[#8440fa] duration-200 hover:bg-[#582ca4] text-white">Join the Community</button>
        </div>
        <div className="text-center mb-[2rem] pt-[5rem]" id="Testimonial">
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-[#6f47b3]">Testimonials</h2>
          <p className="mt-2 text-muted-foreground">Hear from our satisfied mentors and mentees.</p>
          </div>
          <div className="cards flex flex-wrap gap-3 w-full">
            
            <div className="card border p-10 flex flex-col gap-4 rounded-md"> 
            <div className="flex gap-3">
                    <img src={user} alt="user" width={50} height={10}/>
                <div>
            <h4 className="font-bold text-[#6f47b3]">Jane Doe</h4>
            <p className="text-sm text-muted-foreground">Mentor</p>   
            </div>     
            </div>                     
                <blockquote className="text-muted-foreground">
                "Being a mentor on this platform has been an incredibly rewarding\n experience. I've had the opportunity
                to share my knowledge and\n guide aspiring professionals, and it's been amazing to see them\n grow and
                succeed."
              </blockquote></div>
              <div className="card border p-10 flex flex-col gap-4 rounded-md">
              <div className="flex gap-3">
                    <img src={user} alt="user" width={50} height={10}/>
                <div>
            <h4 className="font-bold text-[#6f47b3]">John Doe</h4>
            <p className="text-sm text-muted-foreground">Mentee</p>   
            </div>     
            </div>                    
                  <blockquote className="text-muted-foreground">
                "Finding a mentor on this platform has been a game-changer for\n me. My mentor has provided invaluable
                guidance and support, and\n I've been able to achieve my goals much faster than I could have\n on my
                own."
              </blockquote></div>
              
            <div className="card border p-10 flex flex-col gap-4 rounded-md">
                <div className="flex gap-3">
                    <img src={user} alt="user" width={50} height={10}/>
                <div>
            <h4 className="font-bold text-[#6f47b3]">John Smith</h4>
            <p className="text-sm text-muted-foreground">Mentor</p>   
            </div>     
            </div>      
            <blockquote className="text-muted-foreground">
                "I've been a mentor on this platform for a while, and it's been\n an incredibly rewarding experience.
                Seeing my mentees grow and\n succeed is truly fulfilling, and I'm grateful to be a part of\n this
                community."
              </blockquote></div>
              </div>
            </div>
            <footer className="bg-background border-t px-4 py-6 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Mentor Mentee Interaction Platform. All rights reserved.
          </p>
          <nav className="flex items-center space-x-4">
            <NavLink to={""} className="text-sm font-medium text-muted-foreground hover:text-foreground" >
              Terms of Service
            </NavLink>
            <NavLink to={""} className="text-sm font-medium text-muted-foreground hover:text-foreground" >
              Privacy Policy
            </NavLink>
            <NavLink to={""} className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact Us
            </NavLink>
          </nav>
        </div>
      </footer>
            </div>
    )
}

export default Intro;