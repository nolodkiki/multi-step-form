import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Step1 from './components/Steps/Step1'
import bgMb from '../src/assets/images/bg-sidebar-mobile.svg'
import Step2 from './components/Steps/Step2'
import Step3 from './components/Steps/Step3'
import Step4 from './components/Steps/Step4'
import Step5 from './components/Steps/Step5'
import { useDispatch, useSelector } from 'react-redux'
import { FormProvider, useForm } from 'react-hook-form'
import { decrementStep, incrementStep } from './Redux/slices/stepSlice'
import { useEffect, useState } from 'react'


function App() {
  const count = useSelector((state) => state.step.activeStep)


  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')





  return (
    <div className="App">
      <div className="h-screen w-screen bg-gray-200">
        <div className='flex flex-col items-center justify-between h-screen '>
          <div className='flex flex-col content-between w-full'>
            <img className='absolute left-1/2 -translate-x-1/2 z-0 w-full' src={bgMb} alt="" />
            <Header />

            {count === 1 && <Step1
              nameValue={nameValue} setNameValue={setNameValue}
              emailValue={emailValue} setEmailValue={setEmailValue}
              phoneValue={phoneValue} setPhoneValue={setPhoneValue}
            />}
            {count === 2 && <Step2 />}
            {count === 4 && <Step4 />}
            {count === 3 && <Step3 />}
            {count === 5 && <Step5 />}


          </div>
          <Footer nameValue={nameValue} emailValue={emailValue} phoneValue={phoneValue} />


        </div>

      </div>


    </div>
  )
}

export default App
