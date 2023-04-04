import { useContext, useEffect } from "react";
import { Context } from "../../states/context/context";
import CustomSelect from "../form/select/filter";

export default function FilterProducts(){
    const {allproducts, getProducts} = useContext(Context)

    useEffect(() => {
        getProducts()
    },[getProducts])

    return(
        <CustomSelect options={allproducts} />
    )
}