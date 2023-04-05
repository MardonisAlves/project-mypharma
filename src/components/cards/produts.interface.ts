export interface Products {
    id: string,
    name: string,
    price: string,
    description: string,
    estoque: string,
    categoria: string,
    category: {
        id: string,
        category: string
      },
    upload: {
        id: string,
        location: string,
        key: string,
        bucket: string,
        prodId: string
    }
    status: 200
}