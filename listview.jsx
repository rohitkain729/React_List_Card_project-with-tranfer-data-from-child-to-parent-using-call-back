import axios from "axios";
import { useEffect, useState } from "react";

export function ListView({limit}){

    const[prodData,setProdData] = useState([]);
    async function getProductsData(){  

        try {
            var res=await axios.get(`https://dummyjson.com/products?limit=${limit}`,{ timeout: 5000});
            setProdData(res.data.products);        
        } catch (error) {
            console.log(error);
        }
    }
     useEffect(()=>{
            getProductsData();
        },[limit])
    return (
        <div>
           

            <div>
                <div  className="row">
                    <div className="col-1">SNo.</div>
                    <div className="col-3"><span className="ms-5">Products</span></div>
                    <div className="col-2"><span className="ms-5">Title</span></div>
                    <div className="col-1">Price</div>
                    <div className="col-1">Brand</div>
                    <div className="col-1">Discount%</div>
                    <div className="col-3"> <span className="ms-5">Description</span> </div>
                    
                </div>
                {
                    prodData?.map?.(({title,category,price,brand,discountPercentage,thumbnail,description},index)=>{
                       return  <div key={`listview_${index}`} className="row mb-2 rounded-2 border border-grey mt-2 p-2">
                      <div className="col-1">{index+1}</div>
                      <div className="col-3"><img src={thumbnail} alt="products" width={150} height={150} /></div>
                      <div className="col-2">{title}</div>
                      <div className="col-1">$ {price}</div>
                      <div className="col-1">{brand}</div>
                      <div className="col-1">{discountPercentage}%</div>
                      <div className="col-3">{description}</div>
                       </div>
                    })
                }
            </div>

        </div>
    );
}
