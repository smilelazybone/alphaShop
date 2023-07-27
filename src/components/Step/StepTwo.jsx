import styles from './Step.module.css'
export default function StepTwo() {
  return (
    <>
    <form className={styles.form} data-phase="shipping">
      <h3>運送方式</h3>
      <section >
        <div className="form-body">
          <div className="group" data-price="0">
            <div className={styles.groupRadio}>
              <input id="shipping-standard" type="radio" name="shipping" defaultChecked="" checked/>
            </div>
            <div className={styles.groupText}>
              <div>標準運送</div>
              <div>約3~7個工作天</div>
            </div>
            <div className={styles.groupPrice}>
              <div className="price">免費</div>
            </div>

          </div>
          <div className="group" data-price="500">
            <div className={styles.groupRadio}>
              <input id="shipping-dhl" type="radio" name="shipping" />
            </div>
            <div className={styles.groupText}>
              <div>DHL貨運</div>
              <div>48小時內送達</div>
            </div>
            <div className={styles.groupPrice}>
              <div className="price">500</div>
            </div>
          </div>
        </div>
      </section>
    </form>
    </>
  )
}