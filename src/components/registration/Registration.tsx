import { useEffect, useState } from 'react';
import Card from '../card/Card';
import './Registration.scss';

const Registration = () => {
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({
    nameError: '',
    emailError: ''
  });

  useEffect(() => {
    if (name) {
      setErrors(prevErrors => {
        return {
          ...prevErrors,
          nameError: ''
        }
      })
    }

    if (email) {
      setErrors(prevErrors => {
        return {
          ...prevErrors,
          emailError: ''
        }
      })
    }
  }, [name, email])

  const validateForm = (e: any) => {
    console.log("VALIDATE")
    e.preventDefault();
    let formIsValid = true;
    let errors = {
      nameError: '',
      emailError: '',
    };

    // Name validation
    if (!name.trim()) {
      formIsValid = false;
      errors.nameError = 'Name is required';
    }

    // Email validation

    if (!email.trim()) {
      formIsValid = false;
      errors.emailError = 'Email is required'
      setErrors(errors);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formIsValid = false;
      errors.emailError = 'Email address is invalid';
    }

    setErrors(errors);

    if (formIsValid) {
      // Form submission logic here
      console.log('Form data:', { name, email });
      // Reset form if needed

      // alert("HELLO")

      if (localStorage.getItem('userData') === null) {
        let userData = { name: name, company: company, email: email }
        localStorage.setItem('userData', JSON.stringify(userData))
      } else {
        let userData = localStorage.getItem('userData');
        let currentData = { name: name, company: company, email: email }

        if (userData === JSON.stringify(currentData)) {
          alert("Form has already been submitted")
        } else {
          localStorage.setItem('userData', JSON.stringify(userData))
          alert("New user added!")
        }

      }

      setName('');
      setEmail('');
      setErrors({
        nameError: '',
        emailError: ''
      });

      // var testObject = { name: '', company: '', email: '' }
      // localStorage.setItem('testObject', JSON.stringify(testObject));
    }
  }

  return (
    <div className='registration'>
      <div className='registration__img'>
        {/* <img src={img_checklist}/> */}
      </div>
      <form className='registration__form' onSubmit={validateForm}>
        <Card className='registration__card'>
          <div className='registration__heading-block'>
            <h1 className='registration__heading'>Registration</h1>
            <p className='registration__lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
          </div>
          <div className='registration__form'>
            <div className='registration__field'>
              <span className='registration__field-label'>Name<span>*</span></span>
              <input
                className={!errors.nameError.trim() ? 'registration__field-input' : 'registration__field-input--error'}
                placeholder='Enter your name'
                value={name}
                onChange={(event: any) => setName(event?.target.value)}>
              </input>
              {/* <span className={error ? 'registration__field-error--active' : 'registration__field-error'}>Name field cannot be empty</span> */}
              {errors.nameError && <span className='registration__field-error--active'>{errors.nameError}</span>}
            </div>
            <div className='registration__field'>
              <span className='registration__field-label'>Company</span>
              <input
                className='registration__field-input'
                placeholder='Enter your company name'
                value={company}
                onChange={(event: any) => setCompany(event?.target.value)}
              >
              </input>
            </div>
            <div className='registration__field'>
              <span className='registration__field-label'>Email address<span>*</span></span>
              <input
                className={!errors.emailError.trim() ? 'registration__field-input' : 'registration__field-input--error'}
                placeholder='Enter your email address'
                value={email}
                onChange={(event: any) => {
                  return (
                    setEmail(event?.target.value)
                  )
                }}>
              </input>
              {/* <span className={error ? 'registration__field-error--active' : 'registration__field-error'}>Email field cannot be empty</span> */}
              {errors.emailError && <span className='registration__field-error--active'>{errors.emailError}</span>}
            </div>
          </div>
          <button type='submit' className='registration__button' style={errors.emailError && errors.nameError ? { marginTop: '45px' } : {}}>
            <span className='registration__button-text'>Submit</span>
          </button>
        </Card>
      </form>
    </div>
  )
}

export default Registration
