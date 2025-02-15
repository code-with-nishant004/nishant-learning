import { useState, useEffect } from "react";
import Layout from "../shared/Layout";

function Products() {
   const [ products , setProducts] = useState([]);

  useEffect(() => {
    fetch("https://674ab62b71933a4e88533f90.mockapi.io/product")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <Layout>
                    <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Product Table</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                  {
                          products.length === 0 ? (                              
                            <div class="d-flex justify-content-center align-items-center vh-100">
                             <div class="spinner-border text-dark  text-center" role="status">
                                 <span class="visually-hidden">Loading...</span>
                             </div>
                             </div> 
                          ): (
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th style={{width: 10}}>ID</th>
                          <th>Products</th>
                          <th>Price</th>
                          <th style={{width: 40}}>Label</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                      {products.map((product) => (
                          <tr key = {product.id} className="align-middle">
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td><span className="badge bg-success">${product.price}</span></td>
                          </tr>
                        ))
                      }
                      
                        
                        {/* <tr>
                          <td>1.</td>
                          <td>Update software</td>
                          <td>
                            <div className="progress progress-xs">
                              <div className="progress-bar progress-bar-danger" style={{width: '55%'}} />
                            </div>
                          </td>
                          <td><span className="badge bg-danger">55%</span></td>
                        </tr>
                        <tr>
                          <td>2.</td>
                          <td>Clean database</td>
                          <td>
                            <div className="progress progress-xs">
                              <div className="progress-bar bg-warning" style={{width: '70%'}} />
                            </div>
                          </td>
                          <td><span className="badge bg-warning">70%</span></td>
                        </tr>
                        <tr>
                          <td>3.</td>
                          <td>Cron job running</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div className="progress-bar bg-primary" style={{width: '30%'}} />
                            </div>
                          </td>
                          <td><span className="badge bg-primary">30%</span></td>
                        </tr>
                        <tr>
                          <td>4.</td>
                          <td>Fix and squish bugs</td>
                          <td>
                            <div className="progress progress-xs progress-striped active">
                              <div className="progress-bar bg-success" style={{width: '90%'}} />
                            </div>
                          </td>
                          <td><span className="badge bg-success">90%</span></td>
                        </tr>
                        */}
                      </tbody>
                    </table>
                          )}
                  </div> 
                  {/* /.card-body */}
                  <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-end">
                      <li className="page-item"><a className="page-link" href="#">«</a></li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">»</a></li>
                    </ul>
                  </div>
                </div>
                {/* /.card */}
              </div>
    </Layout>
  );
}

export default Products;
