import { Theme, toast } from "react-toastify";
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

const calculateValueTotal = async (items: Items[]) => {
  if (items) {
    let soma: any = 0;
    items.forEach(item => {
      soma += Number(item.valueitems)
    })
    return parseFloat(soma).toFixed(2)
  } else {
    let soma: any = 0
    return parseFloat(soma).toFixed(2)
  }
}



const notificationToast = () => {
  const notify = (message: string, color:Theme) => toast.success(message, {
    position: 'bottom-right',
    theme: color
  });
  return { notify }
}


const deleteItemProduct = async (index: number) => {
  const itens: Items[] = await getItemsProduct();
  const filterItens: any = itens.filter((item, i) => i !== index)
  localStorage.removeItem('items')
  filterItens.map(async (item: Items, i: number) => {
    await hanhlesaveItensStorage(filterItens[i])
  })
}


export {
  hanhlesaveItensStorage,
  getItemsProduct,
  calculateValueTotal,
  notificationToast,
  deleteItemProduct
}