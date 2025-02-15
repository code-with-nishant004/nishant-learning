import { useState, useEffect } from "react";
import Layout from "../shared/Layout";

function Signup() {

  const [username, setusername] = useState({username : " "})
  const [password, setpassword] = useState({password: " "})
  function handlepassword(event){
    setpassword(event.target.value,{...password});
    
  }
  
  function handleusername(event){
    setusername( event.target.value, {...username});
   
  }

  function handlesubmit(event){
      event.preventDefault();
      console.log(username)
      console.log(password)
      
  }
  

  return (
    <Layout>
     <div className="content">
  <div className="container-fluid">
    <div className="row g-4">
      {/* Start column */}
      <div className="col-md-6">
        {/* general form elements */}
        <div className="card card-primary card-outline">
          <div className="card-header">
            <div className="card-title">
              Quick Example
            </div>
          </div>
          <form>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleusername}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlepassword}/>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
            </div>
          </form>
        </div>
        {/* /.card */}
      </div>
    </div>
    {/* /.row */}
  </div>{/* /.container-fluid */}
</div>


    </Layout>
  );
}

export default Signup;