import React from 'react'

export default function 
() {
  return (
    <div>
       <section id="footer">
       <div className="footer pt-5">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div className="footer_section">
              <h4>Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div className="footer_section">
              <h4>Guides</h4>
              <ul>
                <li><a href="#">Getting started</a></li>
                <li><a href="#">Starter template</a></li>
                <li><a href="#">Webpack</a></li>
                <li><a href="#">Parcel</a></li>
                <li><a href="#">Vite</a></li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div className="footer_section">
              <h4>Projects</h4>
              <ul>
                <li><a href="#">Bootstrap 5</a></li>
                <li><a href="#">Bootstrap 4</a></li>
                <li><a href="#">Icons</a></li>
                <li><a href="#">RFS</a></li>
                <li><a href="#">npm starter</a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-12 col-lg-3 mb-5">
            <div className="row">
              <div
                className="col-sm-12 col-md-6 col-lg-12 footer_section footer_section_contact"
              >
                <h4>Contact Us</h4>
                <div className="search">
                  <form action="#" className="subscribe">
                    <input
                      type="email"
                      className="contact_input"
                      placeholder="E-mail address"
                    />
                    <button type="submit" className="submit_button">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-12 social_media">
                <h4>Follow Up</h4>
                <ul>
                  <li>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       </section>
    </div>
  )
}
