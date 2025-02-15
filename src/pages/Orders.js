import { useState, useEffect } from "react";
import Layout from "../shared/Layout";

function Orders(){
    const [orders, setorders] = useState([])

    useEffect(()=>{
        fetch("https://67ab03e765ab088ea7e846b4.mockapi.io/orders")
        .then((response)=> response.json())
        .then((data) =>{ 
        setorders(data)
    });
    },[]);
    return(
        <Layout>
                <div className="card">
                <div className="card-header border-transparent">
                    <h3 className="card-title">Latest Orders</h3>
                    <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                        <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-lte-dismiss="card-remove">
                        <i className="fas fa-times" />
                    </button>
                    </div>
                </div>
                {/* /.card-header */}
                <div className="card-body p-0">
                    <div className="table-responsive">  
                    { orders.length === 0 ? (                              
                       <div class="d-flex justify-content-center align-items-center vh-100">
                        <div class="spinner-border text-dark  text-center" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        </div> 
                             ) :(     
                    <table className="table m-0">
                        <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Item</th>
                            <th>Status</th>
                            <th>Adress</th>
                        </tr>
                        </thead>
                        <tbody>
                            {orders.map((order)=>(
                         <tr>
                         <td><a href="pages/examples/invoice.html">{order.orderid}</a></td>
                         <td>{order.item}</td>
                         <td><span className="badge bg-success">Shipped</span></td>
                         <td>
                         <div className="sparkbar" data-color="#00a65a" data-height={20}>{order.adress}</div>
                         </td>
                     </tr>  
                     
                                                 
                        ))
                        }
                                     <tr>
                            <td><a href="pages/examples/invoice.html">OR1848</a></td>
                            <td>Samsung Smart TV</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                            <td>
                            <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                            <td>iPhone 6 Plus</td>
                            <td><span className="badge bg-danger">Delivered</span></td>
                            <td>
                            <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                            <td>Samsung Smart TV</td>
                            <td><span className="badge bg-purple">Processing</span></td>
                            <td>
                            <div className="sparkbar" data-color="#00c0ef" data-height={20}>90,80,-90,70,-61,83,63</div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="pages/examples/invoice.html">OR1848</a></td>
                            <td>Samsung Smart TV</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                            <td>
                            <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="pages/examples/invoice.html">OR7429</a></td>
                            <td>iPhone 6 Plus</td>
                            <td><span className="badge bg-danger">Delivered</span></td>
                            <td>
                            <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                            </td>
                        </tr>
                        <tr>
                            <td><a href="pages/examples/invoice.html">OR9842</a></td>
                            <td>Call of Duty IV</td>
                            <td><span className="badge bg-success">Shipped</span></td>
                            <td>
                            <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                            </td>
                        </tr>
                        </tbody>
                    </table> 
                            )
                    }
                    </div>
                </div>
                
                <div className="card-footer clearfix">
                    <a href="javascript:void(0)" className="btn btn-sm btn-primary float-start">Place New Order</a>
                    <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-end">View All Orders</a>
                </div>
                {/* /.card-footer */}
                </div>

        </Layout>
    )
    
}

export default Orders;