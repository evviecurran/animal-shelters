import React from 'react' ;
import About from './About';
import Contact from './Contact';
import Services from './Services';
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="home"> 
            <div className="container">
                {/* Can't get it to go to the center of the page, something isnt connecting */}
                 <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center">Find your animal today</h1>
                        <p className="lead text-center fs-4 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit et blanditiis, libero aliquam eligendi? Eum officiis quaerat consectetur tempora dignissimos nulla fugit velit, praesentium optio possimus corrupti, eveniet doloremque.</p>
               
               {/* Why will it not go center */}
               <div className="buttons d-flex justify-content-center">
               <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Services</NavLink>
               <NavLink to= "/service" className="btn btn-light me-4 rounded-pill py-2">Find Pets Now</NavLink>
                </div>
            </div>
            </div>
            </div>
            </section>
            {/* By placing these down here it causes an error */}
           <About/>
           <Services/>
           <Contact/>
        </div>
    )
}

export default Home; 