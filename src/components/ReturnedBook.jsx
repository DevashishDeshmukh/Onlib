import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  
  const navigate = useNavigate();

  const [book, setBook] = useState({
    bookname:"",
    authname:"",
    borrowname:"",
   });


   const [a, setA]=useState(1);
  const [b, setB]=useState();

        //handle input
      const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
  
        setBook({...book, [name]:value});
        }

        const handleSubmit = async (event) => {
          event.preventDefault();
          //store data into variables
          const {bookname, authname, borrowname} = book;
          //It should be hosted on port 3000 by default 
          // but we need it on port 3001 as backened is connected
          // there, so porxy will be used
          console.log(bookname);
          console.log(authname);
          console.log(borrowname);

          try {
            const res = await fetch('/returnedbook', {
              method : 'POST',
              headers : {
                "Content-Type" : "application/json",
              },
              body : JSON.stringify({
                bookname, authname, borrowname
              })
            })
    
            if(res.status === 400 || !res){
              window.alert("Something gone wrong");
            }else{
              setA();
              setB(1);
              // window.alert("Book Return Status Updated");
              // window.location.reload();
            }
          } catch (error) {
            console.log(error);
          }
         }

  return (
    <div>
    <div className="container bg-warning shadow my-5 ">
        <div className="text-center fw-bolder mt-4">
         <h2>Returned Books Update</h2>
        </div>
        {a &&(  <div className="row">
          <form onSubmit={handleSubmit} method="Post">   
            <div className="mb-3">
              <label htmlFor="exampleInputBookname" className="form-label">Returned Book Name</label>
              <input type="text" className="form-control" id="exampleInputBookname" name="bookname" value = {book.bookname} onChange={handleInput}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAuthor" className="form-label">Returned Book Author Name</label>
              <input type="text" className="form-control" id="exampleInputAuthor" name="authname" value = {book.authname} onChange={handleInput}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputborrowname" className="form-label">Returned Book Borrower Name</label>
              <input type="text" className="form-control" id="exampleInputISBN" name="borrowname" value = {book.borrowname} onChange={handleInput}/>
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-primary mt-4 mb-4" style={{marginLeft: "75%", width:"25%"}}>Update Book Status</button>
            </div>
          </form>
        </div>) }
        { b &&(
          <div  className="text-center fw-bolder mt-4">
          <h1 >Book Returned Successfully</h1>
         </div>
          
        )}
    </div>
  </div>
  );
}

export default AddBook;