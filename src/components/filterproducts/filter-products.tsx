import { useContext, useEffect } from "react";
import { Context } from "../../states/context/context";
import CustomSelect from "../form/select/filter";

export default function FilterProducts(){
    const {getProducts} = useContext(Context)
    
    useEffect(() => {
        let id:any=null
        getProducts(id)
    },[getProducts])

    return(
        <CustomSelect />
    )
}