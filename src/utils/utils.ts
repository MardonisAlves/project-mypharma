import { toast } from "react-toastify";
import { Items } from "../interfaces/itens.interface";
import 'react-toastify/dist/ReactToastify.css';

const hanhlesaveItensStorage = async (itens: Items) => {
  try {
    const lista_intens = JSON.parse(localStorage.getItem('items') || '[]');
    lista_intens.push(itens);
    localStorage.setItem("items", JSON.stringify(lista_intens));
  } catch (error) {
    return error
  }

}



const getItemsProduct = async () => {
  try {
    const items = localStorage.getItem("items");
    if (items) {
      const order = JSON.parse(items)
      return order;
    }
  } catch (error) {
    return error
  }
}



const calculateValueTotal = async (items: Items[]) => {
  try {
    if (items.length > 0) {
      let soma: any = 0;
      items.forEach(item => {
        soma += Number(item.valueitems)
      })

      return parseFloat(soma).toFixed(2)
    } else {
      return 0
    }
  } catch (error) {
    return error
  }
}



const notificationToast = () => {
  const notify = (message: string) => toast.success(message, {
    position: 'bottom-right',
    theme: 'light'
  });
  return { notify }
}


const deleteItemProduct = async (index: number) => {
  try {
    const itens: Items[] = await getItemsProduct();
    const filterItens: any = itens.filter((item, i) => i !== index)
    localStorage.removeItem('itens')
    filterItens.map(async (item: Items, i: number) => {
      await hanhlesaveItensStorage(filterItens[i])
    })

  } catch (error) {
    return error
  }
}


export { 
  hanhlesaveItensStorage, 
  getItemsProduct, 
  calculateValueTotal,
  notificationToast,
  deleteItemProduct
 }