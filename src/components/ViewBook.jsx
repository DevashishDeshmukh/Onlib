import axios from "axios"
import { useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";

function ViewBook() {

    const [feedbacklist, setfeedbacklist] = useState([]);
  
    const getfeedback = () => {
      console.log("button is clicked");
      axios.get("http://localhost:3001/viewbook").then((response) => {
        console.log(response);
        setfeedbacklist(response.data);
        
      });
    };
  
    // const[result,setResult]= useState([]);
   
    // const getData = ()=>
    // {
    //     fetch('http://localhost:3001/products')
    //     .then(response => response.json())
    //     .then(res => setResult( res));
    // }
    
    // useEffect(() => {
    //     getData();
    // },)
  
    return (
      <div>
        
      <button style={{margin: "25px",  backgroundColor: "#4CAF50", border: "2px solid black",
  color: "white",
  cursor: "pointer",
  textAlign: "center",
  display: "inline-block",
  fontSize: "20px"}} className= "button" onClick={getfeedback}>Book List</button>      
    
      <table className="table" id="table-to-xls" style={{tableLayout: "fixed", margin: "15px", width: "95%", textAlign: "center", border: "3px solid purple",}}>
                      <thead className="thead-dark">
                      <tr className="trpw">
                          <th className="thbn" style={{  backgroundColor: "rgb(45, 178, 219)",
  color: "#fff"}}>Book Name</th>
                          <th className="thbn" style={{  backgroundColor: "rgb(45, 178, 219)",
  color: "#fff"}}>Author Name</th>
                          <th className="thbn" style={{  backgroundColor: "rgb(45, 178, 219)",
  color: "#fff"}}>Publisher Name</th>
                          <th className="thbn" style={{  backgroundColor: "rgb(45, 178, 219)",
  color: "#fff"}}>ISBN</th>
                          <th className="thbn" style={{  backgroundColor: "rgb(45, 178, 219)",
  color: "#fff"}}>Book Price</th>
                          <th className="thbn" style={{  backgroundColor: "rgb(45, 178, 219)",
  color: "#fff"}}>Number of Books Available</th>
                      </tr>
                      </thead>
                      <tbody>
                     
                           {feedbacklist.map((res)=>
                              <tr className="trpw">
                              <td className="tdas" style={{padding: "5px", backgroundColor: "rgb(171, 211, 246)",
  border: "1px solid rgb(27, 3, 65)"}}>{res.bookname}</td>
                              <td className="tdas" style={{padding: "5px", backgroundColor: "rgb(171, 211, 246)",
  border: "1px solid rgb(27, 3, 65)"}}>{res.authname}</td>
                              <td className="tdas" style={{padding: "5px", backgroundColor: "rgb(171, 211, 246)",
  border: "1px solid rgb(27, 3, 65)"}}>{res.pubname}</td>
                              <td className="tdas" style={{padding: "5px", backgroundColor: "rgb(171, 211, 246)",
  border: "1px solid rgb(27, 3, 65)"}}>{res.ISBN}</td>
                              <td className="tdas" style={{padding: "5px", backgroundColor: "rgb(171, 211, 246)",
  border: "1px solid rgb(27, 3, 65)"}}>{res.bookprice}</td>
                              <td className="tdas" style={{padding: "5px", backgroundColor: "rgb(171, 211, 246)",
  border: "1px solid rgb(27, 3, 65)"}}>{res.availbooks}</td>
                              </tr>
                            )}   
                         
                      </tbody>   
                  </table>
                  {/* <hr /> */}
       </div>
       );
  
      };
  
  export default ViewBook
