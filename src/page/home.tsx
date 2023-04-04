import CardProduct from "../components/cards/card-product";
import FilterProducts from "../components/filterproducts/filter-products";
import Layout from "../components/layout/layout";


export default function Home(){
    return(
        <Layout>
                <FilterProducts />
                <CardProduct />
        </Layout>
    )
}