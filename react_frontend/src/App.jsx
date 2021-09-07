import React, {useState} from 'react'
//import axios from "axios"
import useFetch from "react-fetch-hook"

class App extends React.Component
{
  constructor(){
    super();
    this.state={
      data:[]
    };
  }

  fetchdata(){
    fetch('http://127.0.0.1:8000/api/post')
    .then(response=>response.json())
    .then((data)=>{
      console.log(data);
        this.setState({
           data: data
           
      });

    });
  }
  
  componentDidMount()
  {
    this.fetchdata();
    console.log('hl');
    console.log(this.fetchdata());
  }

  render() {
    const stuData = this.state.data;
    const rows  = stuData.map((stu)=>

    <tr key={stu.id}>
     
      <td>{stu.student_name}</td>
      <td>{stu.department}</td>
      <td>{stu.email}</td>
      <td>{stu.mobile_no}</td>
  
    </tr>
    );
    return ( 
     <div>
       <center>
       <h2>Student Data</h2>
       
<table border ='2'>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Department</th>
          <th>Email</th>
          <th>Mobile</th>
          
        </tr>

      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </center>
     </div>
      
    );
  }

}


export default App