
import { useEffect, useState } from "react";

export function GridView({limit}){

    const[prodData,setProdData] = useState([{}]);
    async function getProductsData(){  
            var httpReq = new XMLHttpRequest();
            httpReq.open("get",`https://dummyjson.com/products?limit=${limit}`);
            httpReq.send();

            httpReq.onload = ()=>{
                // debugger;
            const resp=httpReq.responseText;
            const productObj=JSON.parse(resp);
            setProdData(productObj.products);
            }

            httpReq.onerror=(err)=>{
            console.log(err);
            }
    }
     useEffect(()=>{
            getProductsData();
        },[limit])

    return (
        <div>
            <div className="row">
                {
                prodData?.map?.(({title,price,brand,category,discountPercentage,thumbnail,description}
                    ,index)=>{
                    return <div className="col m-2" key={`grid_card_${index}`}>
                        <div className="card" style={{width:"390px"}}>
                            <div className="d-flex">
                        <img src={thumbnail} className="card-img-top mx-auto" style={{width:"240px"}}/>

                            </div>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                           
                            <span className="card-text me-2 fw-bold">Category::{category}</span>
                            <span className="card-text me-2 fw-bold">Price::{price}</span>
                            <span className="card-text fw-bold">Discount::{discountPercentage}%</span>
                            
                        </div>
                        </div>
                    </div>

                    
                })
                
                }
                

            </div>
        </div>
    );
}