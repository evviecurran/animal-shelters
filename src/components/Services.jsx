import React from 'react';

const Services = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                    <div className="col-12">
                        <h3 className="fs-5 text-center mb-0">Our Services</h3>
                        <h1 className="display-6 text-center mb-4">Our <b>Amazing</b> Services</h1>
                        <hr className="w-25 mx-auto" />
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <div class="card p-3">
                            
  <div class="card-body text-center">
    <i className= "fa fa-cogs fa-4x mb-4 text-primary"></i>
    <h5 class="card-title mb-3 fs-4 fw-bold">Adopt</h5>
    <p class="card-text">Adopt your lifelong pet today !</p>
    <a href="#" class="btn btn-primary">Adopt Today</a>
                            </div>
                            <div class="card-body text-center">
                                {/* Figure out how to separate these and put them side by side */}
    <i className= "fa fa-cogs fa-4x mb-4 text-primary"></i>
    <h5 class="card-title mb-3 fs-4 fw-bold ">Foster</h5>
    <p class="card-text">Want to give a warm place for a pet waiting for their forever home? </p>
    <a href="#" class="btn btn-primary">Foster Today</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
    }

    export default Services;

    
{/*     
//  <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div> */}