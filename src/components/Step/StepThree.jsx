import styles from './Step.module.css'
export default function StepThree() {
  return (
    <>
    <form className={styles.form} data-phase="creditCard">
      <h3>付款方式</h3>
      <section>
        <div className="form-body">
          <div className={styles.formLine}>
            <div className={styles.L}>
              <div className={styles.inputLabel}>持卡人姓名</div>
                <input type="text" className={styles.whole} placeholder="John Doe"/>
            </div>
          </div>
          <div className={styles.formLine}>
            <div className={styles.L}>
              <div className={styles.inputLabel}>卡號</div>
                <input type="text" className={styles.whole} placeholder="1111 2222 3333 4444"/>
            </div>
          </div>
          <div className={styles.formLine}>
          <div className={styles.M}>
            <div className={styles.inputLabel}>有效期限</div>
              <input type="text" className={styles.whole} placeholder="MM / YY"/>
          </div>
          <div className={styles.M}>
            <div className={styles.inputLabel}>CVC / CCV</div>
              <input type="text" className={styles.whole} placeholder="123"/>
          </div>
        </div>
       </div>
      </section>
    </form>
    </>
  )
}