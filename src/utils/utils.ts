import { toast } from "react-toastify";
import { Items } from "../interfaces/itens.interface";
import 'react-toastify/dist/ReactToastify.css';

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



const calculateValueTotal = async (items:Items[]) => {
    if(items.length > 0){
        let soma:any = 0;
        items.forEach(item => {
            soma += Number(item.valueitems)
        })
        
       return  parseFloat(soma).toFixed(2)
    }else{
      return 0
    }
  }



  const notificationToast = () => {
    const notify = (message:string) => toast.success(message,{
       position:'bottom-right',
       theme:'light'
    });
    return {notify}
  }


  export {hanhlesaveItensStorage, getItemsProduct, calculateValueTotal, notificationToast}