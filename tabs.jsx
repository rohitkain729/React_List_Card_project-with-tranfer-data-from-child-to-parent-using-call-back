import { useState } from 'react';
import './tabs.css';
import { ListView } from './listview';
import { GridView } from './lgridview';

export function TabsFunc({items,children,getLimit}){

    // const[activetab,setActivetab] =useState(items[0]);
    const[activetabIndex,setActivetabIndex] =useState(0);

    function handleChange(e){
      getLimit(e.target.value);
    }
    
    return (
        <div>
            <div className=" p-2  text-danger mt-2 mb-2 tabs">   
                <div>
                {
                    items?.map?.((item,index)=>{
                        return  <span   onClick={()=>setActivetabIndex(index)} className={` me-3 text-uppercase bg-warning p-2 rounded  ${ items[activetabIndex] === item  ?  "active" :""}`} key={`span_tab_${index}`}>{item}</span>
                    })
                }  
                    </div> 
            <select onChange={handleChange} className='form-select bg-warning text-danger fw-semibold' style={{width:"220px"}}>
                <option>select Products Count</option>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>50</option>
            </select>
            </div>
              {
               children[activetabIndex]
              }

           
        </div>
    )
}