import { useContext, useEffect } from "react";
import { Context } from "../../states/context/context";
import CustomSelect from "../form/select/filter";

export default function FilterProducts(){
    const {category, getProducts} = useContext(Context)
    
    useEffect(() => {
        let id:any=null
        getProducts(id)
    },[getProducts])

    return(
        <CustomSelect 
        options={category} 
        getProducts={getProducts} 
        />
    )
}