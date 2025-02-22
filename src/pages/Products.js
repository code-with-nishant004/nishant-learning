import { useState, useEffect } from "react";
import Layout from "../shared/Layout";
import DataGrid from "../shared/Data Grid";

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
                            <DataGrid
                            columnDefs={[
                              {key: "id", label: "ID"},
                              {key: "name", label: "Name"},
                              {key: "price", label: "Price"},
                              {key: "description", label: "Description"},
                              
                            ]}
                            Data={(products)}
                            ></DataGrid>
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
