import style from './Product.module.css'

interface ProductsProps{

    product:{
        name : string
        image: string
        price: number
    }
}

export const Products = ({product}: ProductsProps)=>{

    return(
        <main className={style.product}>

            <img 
                src={product.image} 
                alt={product.name} 
                className={style.imgProduct}
            />

            <h3 className={style.nameProduct}>{product.name}</h3>
            <strong className={style.priceProduct}>R$ {product.price}</strong>


            <button className={style.button}>Adicionar ao carrinho</button>
        </main>
    )
}