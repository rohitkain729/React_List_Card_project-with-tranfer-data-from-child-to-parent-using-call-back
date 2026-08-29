import { useEffect, useState } from "react";
import { GridView } from "./lgridview";
import { ListView } from "./listview";
import { TabsFunc } from "./tabs";
import axios from "axios";

export function ProductListGrid(){

    // let limit = 30;
   const[limit,setLimit] = useState(40);
    function getLimit(data){
     setLimit(data);
    }
    
    return (
        <div className="p-4 m-4">
            <div className="text-uppercase p-2 text-center text-light  bg-danger">Products LIST AND GRID</div>
       <TabsFunc getLimit={getLimit} items={["List","Grid"]} >
            <ListView limit={limit}  />
            <GridView limit={limit} />
       </TabsFunc>
        </div>
    )
}