import React from 'react'

const Services = () => {
  return (
    <div>
       <section id="services">
         <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12">
                    <h3 className="fs-5 text-center mb-0">Our Services</h3>
                    <h1 className="display-6 text-center mb-4">Our <b>Awesome</b> Services</h1>
                    <hr className="w-25 mx-auto" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                <div className="card p-3">
            <div className="card-body text-center">
             <i className="fa fa-cogs fa fa-4x mb-4 text-primary"></i>
              <h5 className="card-title mb-3 fs-4 fw-bold">Highly Customizable</h5>
            <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
                <div className="col-md-4">
                <div className="card p-3">
            <div className="card-body text-center">
             <i className="fa fa-cogs fa fa-4x mb-4 text-primary"></i>
              <h5 className="card-title mb-3 fs-4 fw-bold">Highly Customizable</h5>
            <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
                <div className="col-md-4">
                <div className="card p-3">
            <div className="card-body text-center">
             <i className="fa fa-cogs fa fa-4x mb-4 text-primary"></i>
              <h5 className="card-title mb-3 fs-4 fw-bold">Highly Customizable</h5>
            <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
 </section>
</div>
  )
}

export default Services;