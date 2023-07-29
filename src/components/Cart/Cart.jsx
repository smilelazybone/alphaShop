import Styles from './Cart.module.css';
import CartItem from './CartItem';
import {deta} from './deta.js'

let priceTotle = 0
function Sumprice () {
  priceTotle =0
   for( let i = 0; i < deta.length; i++) {
    priceTotle += deta[i].price * deta[i].quantity
   }
  return (priceTotle)
}


export default function Cart() {

  return(
    <section className={Styles.container}>
      <h3>購物籃</h3>
      <CartItem />
      <section className={Styles.cartInfo}>
        <div className={Styles.text}>運費</div>
        <div className={Styles.price}>免費</div>
      </section>
      <section className={Styles.cartInfo}>
        <div className={Styles.text}>小計</div>
        <div className={Styles.price}>{Sumprice()}</div>
      </section>
    </section>
    )
}

