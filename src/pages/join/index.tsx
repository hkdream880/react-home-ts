import * as React from 'react'
import ReCAPTCHAR from 'react-google-recaptcha'

const Join: React.FC = () => {
  const captcharChangeHandler = () => {
    console.log('captcharChangeHandler')
  }
  
  return (
    <div>
      {process.env.CAPTCHA_SITE_KEY}
      <ReCAPTCHAR 
        sitekey={process.env.CAPTCHA_SITE_KEY!}
        onChange={captcharChangeHandler}/>
    </div>
  )
}
export default Join
