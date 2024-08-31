import React from "react";

function Form(){
    return(
        <div className="container">
            <div className="wrapper m-16">
            <div className="grid gap-4">
            <div className="mb-10 flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-[#5a3699]">Mentor Details</h1>
                    <h3 className="font-semibold text-[1.2rem] text-[#c74b4b]">1. Fill out the form below with the required information about your mentor.</h3>
                    <p className="font-semibold text-[1.2rem] text-[#c74b4b]">2. Upload the proof of mentorship document. 
                        <span className="text-[15px] text-[#6f47b3]"> This could be a letter of recommendation, an official confirmation, or any other relevant documentation.</span>
                    </p>
                    <h3 className="font-semibold text-[1.2rem] text-[#c74b4b]">3. Click "Submit" to send your information to us.</h3>
                </div>
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-[#6f47b3] font-semibold text-xl">Name</label>
                      <input id="name" placeholder="John Doe" className="border p-2 rounded-md outline-[#6f47b3]"/>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-[#6f47b3] font-semibold text-xl">Email</label>
                      <input id="email" placeholder="john@example.com" type="email" className="border p-2 rounded-md outline-[#6f47b3]"/>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="bio" className="text-[#6f47b3] font-semibold text-xl">Bio</label>
                      <textarea
                        id="bio"
                        placeholder="Experienced software engineer with a passion for mentoring."
                        className="min-h-[100px] border outline-[#6f47b3] p-2 rounded-md"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="expertise" className="text-[#6f47b3] font-semibold text-xl">Areas of Expertise</label>
                      <input id="expertise" placeholder="JavaScript, React, Node.js" className="border p-2 rounded-md outline-[#6f47b3]"/>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="experience" className="text-[#6f47b3] font-semibold text-xl">Years of Experience</label>
                      <input id="experience" placeholder="5" type="number" className="border p-2 rounded-md outline-[#6f47b3]"/>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="availability" className="text-[#6f47b3] font-semibold text-xl">Availability</label>
                      <input id="availability" placeholder="Monday - Friday, 9am - 5pm" className="border p-2 rounded-md outline-[#6f47b3]"/>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="proof" className="text-[#6f47b3] font-semibold text-xl">Documents</label>
                      <input type="file" id="proof" placeholder="Attach related documents" className="border p-2 rounded-md outline-[#6f47b3]"/>
                    </div>
                    <div className="btn flex justify-end">
                    <button className="w-[15rem] bg-[#8440fa] text-white" >Submit</button>
                    </div>
                  </div>
                  
            </div>
        </div>
    )
}

export default Form;