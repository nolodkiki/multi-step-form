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
import { useEffect } from 'react'


function App() {
  const count = useSelector((state) => state.step.activeStep)

  const { register, formState: { errors }, handleSubmit } = useForm()

  const methods = useForm();






  const dispatch = useDispatch()


  const onSubmit = data => { console.log(data) };
  const incrementStep = () => {
    if (!errors) { dispatch(incrementStep()) }
  }




  return (
    <div className="App">
      <div className="h-screen w-screen bg-gray-200">
        {/* <img className='' src={bgSidebarMob} alt="" /> */}
        <div className='flex flex-col items-center justify-between h-screen '>
          <div className='flex flex-col content-between w-full'>
            <img className='absolute left-1/2 -translate-x-1/2 z-0 w-full' src={bgMb} alt="" />
            <Header />
            <FormProvider {...methods} >
              <form className='z-50' onSubmit={methods.handleSubmit(onSubmit)}>
                {count === 1 && <Step1 />}
                {count === 2 && <Step2 />}
                {count === 4 && <Step4 />}
                {count === 3 && <Step3 />}
                {count === 5 && <Step5 />}
                {/* <Step1 />  */}
                {/* {renderSwitch()} */}
                {/* <Footer /> */}
                <div className="w-full bg-white py-4 px-4 z-30">
                  {count === 1 ? '' : <button onClick={() => dispatch(decrementStep())} className="text-gray-400 mt-1">Go Back</button>}
                  {count !== 5 ? <button type="submit" onClick={() => incrementStep()} className="float-right rounded bg-blue-100 px-4 py-2 text-white">{count === 4 ? 'Confirm' : 'Next step'}</button> : ''}
                </div>
              </form>
            </FormProvider>


          </div>


        </div>

      </div>


    </div>
  )
}

export default App
