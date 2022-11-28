import React from 'react'
// import About from './About';
// import Services from './Services';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit1 = () =>{
   navigate('/addbook');
  }
  const handleSubmit2 = () =>{
    navigate('/viewbook');
  }
  const handleSubmit3 = () =>{
    navigate('/issuebook');
  }
  const handleSubmit4 = () =>{
    navigate('/viewissuebook');
  }
  const handleSubmit5 = () =>{
    navigate('/returnedbook');
  }

  return (
    <div className="mb-5">
         <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-4 fw-bolder mb-4 text-center text-white">Welcome To Librarian Side</h1>
                        <p className="lead text-center fw-bolder fs-4 text-white">Make Library management easy and simple</p>
                        <p className="lead text-center fs-4 mb-5 text-white">This is all you can do</p>
                        <div className="buttons d-flex justify-content-center">
                            {/* <button className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</button> */}
                            <button className="btn btn-light me-4 rounded-pill px-4 py-2" onClick={handleSubmit1}>Add Books</button>
                            <button className="btn btn-light me-4 rounded-pill px-4 py-2" onClick={handleSubmit2}>View Book Info</button>
                            <button className="btn btn-light me-4 rounded-pill px-4 py-2" onClick={handleSubmit3}>Issue Book</button>
                            <button className="btn btn-light me-4 rounded-pill px-4 py-2" onClick={handleSubmit4}>View Issued Books</button>
                            <button className="btn btn-light me-4 rounded-pill px-4 py-2" onClick={handleSubmit5}>Return Books Info</button>
                        </div>
                    </div>
                </div>
            </div>
         </section>
         {/* <About/>
         <Services/> */}
    </div>
  )
}

export default Home;