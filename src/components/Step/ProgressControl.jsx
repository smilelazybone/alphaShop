import styles from './ProgressControl.module.css'
import leftArrow from '../../icons/left-arrow.svg'
import rightArrow from '../../icons/right-arrow.svg'

export default function ProgressControl() {
  return (
    <>
    <section className={styles.buttons}>
      <div className={styles.back}>
      <img className={styles.leftArrow} src={leftArrow} alt="leftArrow"/>上一步
      </div>
      <div className={styles.next}>下一步
      <img className={styles.rightArrow} src={rightArrow} alt="rightArrow"/></div>
    </section>
    </>
  )
}