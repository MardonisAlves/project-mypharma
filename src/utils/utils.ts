import { Items } from "../interfaces/itens.interface";

 const hanhlesaveItensStorage = async (itens: Items) => {
    const lista_intens = JSON.parse(localStorage.getItem('items') || '[]');
    lista_intens.push(itens);
    localStorage.setItem("items", JSON.stringify(lista_intens));
  
  }



 const getItemsProduct = async () => {
    const items = localStorage.getItem("items");
    if (items) {
      const order = JSON.parse(items)
      return order;
    }
  }



const calculateValueTotal = async (itens:Items[]) => {
    if(itens?.length !== undefined){
        let soma:number = 0;
        itens.forEach(item => {
            soma += Number(item.valueitems)
        })
       return  soma
    }
  }


  export {hanhlesaveItensStorage, getItemsProduct, calculateValueTotal}