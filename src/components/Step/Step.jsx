import StepProgress from './StepProgress'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import ProgressControl from './ProgressControl'

export default function Step() {
  return (
    <>
      <div className="form">
        <div className="main-container">
          <StepProgress/>
          <StepOne/>
          {/*<StepTwo/>*/}
          {/*<StepThree/>*/}
          <ProgressControl/>
        </div>
      </div>
    </>
  )
}