import { useState, useEffect } from "react";
import Layout from "../shared/Layout";

function Seller(){
    const [sellers, setsellers] = useState([])

    useEffect( ()=>{
    fetch("https://67ab03e765ab088ea7e846b4.mockapi.io/sellers")
    .then((response) => response.json())
    .then((data) => {
      setsellers(data);
    });
}, []);


return(
    <Layout>
                <div className="col-md-12">
                {/* USERS LIST */}
                <div className="card">
                    <div className="card-header">
                    <h3 className="card-title">Latest Members</h3>
                    <div className="card-tools">
                        <span className="badge text-bg-danger"> 8 New Members </span>
                        <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                        <i data-lte-icon="expand" className="bi bi-plus-lg" />
                        <i data-lte-icon="collapse" className="bi bi-dash-lg" />
                        </button>
                        <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                        <i className="bi bi-x-lg" />
                        </button>
                    </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body p-0">
                    <div className="row text-center m-1">
                    {
                      sellers.length === 0 ? (                              
                       <div class="d-flex justify-content-center align-items-center vh-100">
                        <div class="spinner-border text-dark  text-center" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        </div> 
                             ) :( 
                                sellers.map((seller)=>( 
                                    <div className="col-lg-3 "> 
                        <img className="img-fluid rounded-circle" src={seller.avatar} alt="User Image" />
                        <h6>{seller.id}</h6>
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                             {seller.name}
                        </a>
                        <div className="fs-8">{seller.createdAt}</div>
                        </div>
                               )
                               )
                             )
                               }
                        {/* <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../dist/assets/img/user1-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                            Norman
                        </a>
                        <div className="fs-8">Yesterday</div>
                        </div>
                        <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../dist/assets/img/user7-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                            Jane
                        </a>
                        <div className="fs-8">12 Jan</div>
                        </div>
                        <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../dist/assets/img/user6-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                            John
                        </a>
                        <div className="fs-8">12 Jan</div>
                        </div>
                        <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../dist/assets/img/user2-160x160.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                            Alexander
                        </a>
                        <div className="fs-8">13 Jan</div>
                        </div>
                        <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../dist/assets/img/user5-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                            Sarah
                        </a>
                        <div className="fs-8">14 Jan</div>
                        </div>
                        <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../dist/assets/img/user4-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                            Nora
                        </a>
                        <div className="fs-8">15 Jan</div>
                        </div>
                        <div className="col-3 p-2">
                        <img className="img-fluid rounded-circle" src="../../dist/assets/img/user3-128x128.jpg" alt="User Image" />
                        <a className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">
                            Nadia
                        </a>
                        <div className="fs-8">15 Jan</div>
                        </div> */}
                    </div>
                    {/* /.users-list */}
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer text-center">
                    <a href="javascript:" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">View All Users</a>
                    </div>
                    {/* /.card-footer */}
                </div>
                {/* /.card */}
                </div>

    </Layout>
);
}

export default Seller;