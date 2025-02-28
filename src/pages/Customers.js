import { useState, useEffect } from "react";
import Layout from "../shared/Layout";
import DataGrid from "../shared/Data Grid";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [SelectedCustomer, setSelectedCustomer] = useState(null);
  const [isconfermationmodalopen, setisconfermationmodelopen] = useState(false)
  const [isEditmodelopen, setEditmodelopen] = useState(false)
  const [isAddmodelopen, setAddmodelopen] = useState(false)

  useEffect(() => {
    fetch("https://674ab62b71933a4e88533f90.mockapi.io/customer")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  async function ConfirmDelete(){
    await fetch(`https://674ab62b71933a4e88533f90.mockapi.io/customer/${SelectedCustomer.id}`,
    {
      method: "DELETE",
    }
    );
      setCustomers(customers.filter((customer)=> customer.id !== SelectedCustomer.id))
      setisconfermationmodelopen(false);
  }

  function RejectDelete(){
    setisconfermationmodelopen(false);
  }

  async function ConfirmEdit(){
    await fetch(`https://674ab62b71933a4e88533f90.mockapi.io/customer/${SelectedCustomer.id}`,
    {
      method: "PUT",
      body: JSON.stringify(SelectedCustomer)
    }
    );
    setEditmodelopen(false)
  }
  function RejectEdit(){
    setEditmodelopen(false)
  }
  async function handleSubmit(){
    await fetch(`https://674ab62b71933a4e88533f90.mockapi.io/customer/`,
    {
      method: "POST",
      body: JSON.stringify(customers)
    }
    );
    // customers.map((customer)=>(
    // customer.id === SelectedCustomer.id ? SelectedCustomer : customer))
    await fetch('https://674ab62b71933a4e88533f90.mockapi.io/customer')
    .then((response) => response.json())
    .then((data) => {
      setCustomers(data);
    });

  
    
    setAddmodelopen(false);
  }

  function RejectSubmit(){
    setAddmodelopen(false)
  }

  function onAdd(row){
    // setSelectedCustomer(r
    setAddmodelopen(true)
  }

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-12">
            <h1>Customers<span>
            <button type="button" className="btn btn-m btn-primary float-right" 
            onClick={onAdd}>
              <span className="glyphicon glyphicon-plus" aria-hidden="true" ></span>Add</button>
            </span></h1>
            
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
                          ):(
                <DataGrid
                onEdit = {(row) => {
                  setEditmodelopen(true)
                setSelectedCustomer(row)
                }} 
                
                onDelete = {(row) =>{
                  setisconfermationmodelopen(true)
                 setSelectedCustomer(row)
              }}
                columnDefs={[
                  {key: "id", label: "ID"},
                  {key: "name", label: "Name"},
                  {key: "email", label: "E-mail"},
                  {key: "dob", label: "DOB"},
                  {key: "phone", label: "Phone"},
                ]}
                Data={(customers)}
                ></DataGrid>
                          )
              }
              { isconfermationmodalopen && (
              <div className="modal fade show" id="modal-default" style={{display: 'block'}} aria-modal="true" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Are You Sure?</h4>
                    </div>
                    <div className="modal-body">
                      <p>This Action Cannot be Undone</p>
                    </div>
                    <div className="modal-footer justify-content-between">
                      <button type="button" className="btn btn-default" data-dismiss="modal"
                      onClick={RejectDelete}>Close</button>
                      <button type="button" className="btn btn-danger"
                      onClick={ConfirmDelete}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
)}
              { isEditmodelopen && (
              <div className="modal fade show" id="modal-default" style={{display: 'block'}} aria-modal="true" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Edit Customers</h4>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input 
                          type="text"
                          name="name" 
                          className="form-control" 
                          id="name"
                          value={SelectedCustomer.name}
                          onChange={(e)=>{
                            setSelectedCustomer({
                              ...SelectedCustomer,
                              name: e.target.value,
                            });
                          }}  />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input 
                          type="email"
                          name="name" 
                          className="form-control" 
                          id="email"
                          value={SelectedCustomer.email}
                          onChange={(e)=>{
                            setSelectedCustomer({
                              ...SelectedCustomer,
                              email: e.target.value,
                            });
                          }}  />
                        </div>
                        <div className="form-group">
                          <label htmlFor="dob">DOB</label>
                          <input 
                          type="date"
                          name="name" 
                          className="form-control" 
                          id="dob"
                          value={SelectedCustomer.dob}
                          onChange={(e)=>{
                            setSelectedCustomer({
                              ...SelectedCustomer,
                              dob: e.target.value,
                            });
                          }}  />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          <input 
                          type="tel"
                          name="phone" 
                          className="form-control" 
                          id="phone"
                          value={SelectedCustomer.phone}
                          onChange={(e)=>{
                            setSelectedCustomer({
                              ...SelectedCustomer,
                              phone: e.target.value,
                            });
                          }}  />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer justify-content-between">
                      <button type="button" className="btn btn-default" data-dismiss="modal"
                      onClick={RejectEdit}>Close</button>
                      <button type="button" className="btn btn-success"
                      onClick={ConfirmEdit}>Update</button>
                    </div>
                  </div>
                </div>
              </div>
)}
              { isAddmodelopen && (
              <div className="modal fade show" id="modal-default" style={{display: 'block'}} aria-modal="true" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Add Customers</h4>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input 
                          type="text"
                          name="name" 
                          className="form-control" 
                          id="name"
                          // value="Enter Name"
                          onChange={(e)=>{
                            setSelectedCustomer({
                              ...SelectedCustomer,
                              name: e.target.value,
                            });
                          }}  />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input 
                          type="email"
                          name="name" 
                          className="form-control" 
                          id="email"
                          onChange={(e)=>{
                            setSelectedCustomer({
                              ...SelectedCustomer,
                              email: e.target.value,
                            });
                          }}  />
                        </div>
                        <div className="form-group">
                          <label htmlFor="dob">DOB</label>
                          <input 
                          type="date"
                          name="name" 
                          className="form-control" 
                          id="dob"
                          // value="enter DOB"
                          onChange={(e)=>{
                            setSelectedCustomer({
                              ...SelectedCustomer,
                              dob: e.target.value,
                            });
                          }}  />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          <input 
                          type="tel"
                          name="phone" 
                          className="form-control" 
                          id="phone"
                          // value="Phone no."
                          onChange={(e)=>{
                            setSelectedCustomer({
                              ...SelectedCustomer,
                              phone: e.target.value,
                            });
                          }}  />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer justify-content-between">
                      <button type="button" className="btn btn-default" data-dismiss="modal"
                      onClick={RejectSubmit}>Close</button>
                      <button type="button" className="btn btn-success"
                      onClick={handleSubmit}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
)}
                </div>
              </div>
            </div>
        </div>
        </div>
    </Layout>
  );
}

export default Customers;
