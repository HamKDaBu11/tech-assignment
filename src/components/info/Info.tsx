import schultz_2 from '../../assets/schultz_2.png';
import Card from '../card/Card';
import './Info.scss';

const Info = () => {
  return (
    <div className='info'>
      <div className="info__lorem">
        <h1 className='info__lorem-heading'>
          Lorem ipsum <span className='info__dolor'>dolor</span> sit amet yo 👋
          <div className='info__vector'></div>
        </h1>
        <div className='info__testimonials'>
          <Card className="info__card">
            <img className='info__img' src={schultz_2} height={64} width={64} />
            <div className='info__personal'>
              <p className='info__name'>Andrew Schultz</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</span>
            </div>
          </Card>
          <Card className="info__card">
            <img className='info__img' src={schultz_2} height={64} width={64} />
            <div className='info__personal'>
              <p className='info__name'>Andrew Schultz</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</span>
            </div>
          </Card>
          <Card className="info__card">
            <img className='info__img' src={schultz_2} height={64} width={64} />
            <div className='info__personal'>
              <p className='info__name'>Andrew Schultz</p>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</span>
            </div>
          </Card>
        </div>
      </div>

      <div className='info__tech-img'>
        {/* <Ellipse className='info__' /> */}
      </div>
    </div>
  )
}

export default Info
