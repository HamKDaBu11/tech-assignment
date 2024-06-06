import Card from '../card/Card';
import './Registration.scss';

const Registration = () => {
  return (
    <div className='registration'>
      <div className='registration__img'>
        {/* <img src={img_checklist}/> */}
      </div>
      <Card className='registration__card'>
        <div className='registration__heading-block'>
            <h1 className='registration__heading'>Registration</h1>
            <p className='registration__lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
        </div>
        <div className='registration__form'>
            <div className='registration__field'>
                <span className='registration__field-label'>Name<span>*</span></span>
                <input className='registration__field-input' placeholder='Enter your name'></input>
            </div>
            <div className='registration__field'>
                <span className='registration__field-label'>Company</span>
                <input className='registration__field-input' placeholder='Enter your company name'></input>
            </div>
            <div className='registration__field'>
                <span className='registration__field-label'>Email address<span>*</span></span>
                <input className='registration__field-input' placeholder='Enter your email address'></input>
            </div>
        </div>
        <button className='registration__button'>
          <span className='registration__button-text'>Submit</span>
        </button>
      </Card>
    </div>
  )
}

export default Registration
