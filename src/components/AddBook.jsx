import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  
  const navigate = useNavigate();

  const [book, setBook] = useState({
    bookname:"",
    authname:"",
    pubname:"",
    ISBN :"", 
    bookprice:"",
    availbook:""
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
          const {bookname, authname, pubname, ISBN, bookprice, availbook} = book;
          //It should be hosted on port 3000 by default 
          // but we need it on port 3001 as backened is connected
          // there, so porxy will be used
          console.log(bookname);
          console.log(authname);
          console.log(pubname);
          console.log(ISBN);
          console.log(bookprice);
          console.log(availbook);

          try {
            const res = await fetch('/addbook', {
              method : 'POST',
              headers : {
                "Content-Type" : "application/json",
              },
              body : JSON.stringify({
                bookname, authname, pubname, ISBN, bookprice, availbook
              })
            })
    
            if(res.status === 400 || !res){
              window.alert("Something gone wrong");
            }else{
              setA();
              setB(1);
              // window.alert("Book Added Successfully");
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
         <h2>Add Book Information</h2>
        </div>
      {a &&( <div className="row">
          <form onSubmit={handleSubmit} method="Post">   
            <div className="mb-3">
              <label htmlFor="exampleInputBookname" className="form-label">Book Name</label>
              <input type="text" className="form-control" id="exampleInputBookname" name="bookname" value = {book.bookname} onChange={handleInput}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAuthor" className="form-label">Author Name</label>
              <input type="text" className="form-control" id="exampleInputAuthor" name="authname" value = {book.authname} onChange={handleInput}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPublisher" className="form-label">Publisher Name</label>
              <input type="text" className="form-control" id="exampleInputPublisher" name="pubname" value = {book.pubname} onChange={handleInput}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputISBN" className="form-label">ISBN</label>
              <input type="text" className="form-control" id="exampleInputISBN" name="ISBN" value = {book.ISBN} onChange={handleInput}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPrice" className="form-label">Book Price(in Rupee)</label>
              <input type="text" className="form-control" id="exampleInputPrice" name="bookprice" value = {book.bookprice} onChange={handleInput}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAvailable" className="form-label">Number of Copies Available</label>
              <input type="text" className="form-control" id="exampleInputAvailable" name="availbook" value = {book.availbook} onChange={handleInput}/>
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-primary mt-4 mb-4" style={{marginLeft: "75%", width:"25%"}}>Add Books</button>
            </div>
          </form>
        </div> ) }
        { b &&(
          <div  className="text-center fw-bolder mt-4">
          <h1 >Book Added Successfully</h1>
         </div>
          
        )}
    </div>
  </div>
  );
}

export default AddBook;