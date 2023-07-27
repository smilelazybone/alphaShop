import styles from './StepProgress.module.css'

export default function StepProgress() {
  const steps =[
    {step:"address", name:"寄送地址"},
    {step:"shipping", name:"運送方式"},
    {step:"creditCard", name:"付款資訊"},
  ]
  let stepLength = steps.length

  return (
    <>
      <section>
        <h2>結帳</h2>

        <div className={styles.container}>
          {steps.map((steps, index) => (
            <div data-phase={steps.step} key={index} className={styles.stepContainer}>
              <span className={styles.icon}>{index + 1}</span>
              <span className={styles.name}>{steps.name}</span>
              {index < stepLength-1 && <span className={styles.line} data-order={index + 1}></span>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}