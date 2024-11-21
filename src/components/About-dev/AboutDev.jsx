import React from 'react';
import ashik from '../../assets/ashik.png'

const AboutDev = () => {
    return (
        <div>
            <div
                className="hero min-h-screen p-10 mb-8 rounded-xl"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/RCDQPFB/wallpaper.png)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Ashik khan</h1>
                        <p className="mb-5">
                            I am a student . I read in class 13. I am a computer science and technology student at Pabna polytechnic institute of department of computer science
                        </p>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>About more..</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <img className='h-96 w-[400px] mx-auto' src={ashik} alt="" />
                                <h3 className="font-bold text-xl text-black mt-4">I am Ashik khan</h3>
                                <p className="py-4 text-black">Professional Mern Stack Developer</p>
                                <p className='text-gray-500'>I am Ashik Khan. I am a Web Developer based in Bangladesh, with a rich experience of over 2 years in Frontend Expert is An International Web Developer. I can easily provide responsive web site and develop your Business. I can provide you.. Word press website E-commerce website Portfolio website Figma to HTML Design I can responsive website development using HTML 🌟 CSS 🌟JAVA SCRIPT 🌟  BOOTSTRAP 🌟 REACT JS 🌟 I am working full time at time and contact me ..</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDev;