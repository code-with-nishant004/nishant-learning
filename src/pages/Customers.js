import { useState, useEffect } from "react";
import Layout from "../shared/Layout";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://674ab62b71933a4e88533f90.mockapi.io/customer")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-12">
            <h1>Customers</h1>
            <div className="card mb-4">
              {/* /.card-header */}
              <div className="card-body p-0">
                {
                  customers.length === 0 ? (                              
                       <div class="d-flex justify-content-center align-items-center vh-100">
                        <div class="spinner-border text-dark  text-center" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        </div> 
                             ) :(    
                                 <table className="table table-striped">
                                  <thead>
                                    <tr>
                                    <th style={{ width: 10 }}>ID</th>
                                    <th>Name</th>
                                    </tr>
                                  </thead>
                                                        
                                  <tbody>
                                  {customers.map((customer) => (
                                      <tr key={customer.id} className="align-middle">
                                      <td>{customer.id}</td>
                                      <td>{customer.name}</td>
                                      </tr>
                                      ))
                                  } 
                                  </tbody>
                                  </table>
                                )
                                }
                </div>
              </div>
              {/* /.card-body */}
            </div>
        </div>
        </div>
    </Layout>
  );
}

export default Customers;
