import Step from './Step/Step'
import Cart from './Cart/Cart'
import './Main.css'

export default function Main() {
  return (
    <div className="mainContainer">
      <div className="step">
        <Step/>
      </div>
      <div className="cart">
        <Cart/>
      </div>
    </div>
  )
}