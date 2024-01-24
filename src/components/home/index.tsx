import productsData from '../../data/products_mock.json'
import { Products } from '../product'
import style        from './HomeApp.module.css'

export const HomeApp = ()=>{


    return(
        <main className={style.container}>

            <div className={style.divTitle}>

                <h1 className={style.title}>Catalogo de produtos</h1>

            </div>

            <section className={style.sectionProducts}>

                <div className={style.productsContainer}>

                {
                    productsData.map((product) => (
                        <Products
                            key={product.id}
                            product={
                                {
                                    name : product.name,
                                    image: product.image,
                                    price: product.price,
                                }
                            }
                        />
                    ))
                }
                    
                </div>

            </section>

        </main>
    )
}