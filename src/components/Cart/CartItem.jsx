import {deta} from './deta.js'
import Styles from './Cart.module.css'
import minusButton from '../../icons/minus.svg'
import plusButton from '../../icons/plus.svg'


function ProcductInfo({id, name, img, price, quantity}) {
  return (
      <div className={Styles.pCard} id={id}>
        <div className={Styles.pDetail}>
        <div className={Styles.S}>
          <img className={Styles.img} src={img} alt={name} /></div>
        <div className={Styles.L}>
           <div className={Styles.whole}>
              <div className={Styles.ptitle}>{name}</div>
            <div className={Styles.pControl}>
              <img className={Styles.minus} src={minusButton} alt="minusButton" />
              <div className={Styles.pQuantity}>{quantity}</div>
              <img className={Styles.plus}src={plusButton} alt="plusButton" />
              </div>
           </div>
        </div>
        <div className={Styles.S}>
          <div className={Styles.pPrice}>${price}</div>
        </div>
       </div> 
      </div>
  )
}

export default function CartItem () {
    return (
    <div className={Styles.pContainer}>
      {deta.map(deta => <ProcductInfo {...deta} key={deta.id}/>)}
    </div>
    )
}