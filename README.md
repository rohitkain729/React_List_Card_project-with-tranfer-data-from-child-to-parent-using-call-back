# React_List_Card_project-with-tranfer-data-from-child-to-parent-using-call-back

<img width="1911" height="842" alt="image" src="https://github.com/user-attachments/assets/da1535e7-c2a2-4a86-87d5-a24a7d392bb6" />

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
            </select>
            
