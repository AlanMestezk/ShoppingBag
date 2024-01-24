import { PiShoppingCartFill } from "react-icons/pi";
import { Link }               from "react-router-dom"
import logo                   from '../../assets/shopping-cart.png'
import style                  from  './HeaderApp.module.css'

export const Header = ()=>{

    return(

        <header className={style.header}>
            
            <div className={style.divTitle}>
                
                <img 
                    src={logo}
                    alt="logo Shopping Bag" 
                    className={style.logo}
                />
                <h1 className={style.title}>Shopping bag</h1>

            </div>

            <nav className={style.divButtons}>

                <Link className={style.button} to='/'>Catalogo</Link>

                <abbr title="ver carrinho">
                    <Link className={style.button2} to='/cart'><PiShoppingCartFill /></Link>
                </abbr>
                    

            </nav>

        </header>
    )
}