import Step from './Step/Step'
import './Main.css'

export default function Main() {
  return (
    <div className="mainContainer">
      <div className="step">
        <Step/>
      </div>
      <div className="cart">
      </div>
    </div>
  )
}