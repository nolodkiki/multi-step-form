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


function App() {
  const steps = [<Step1/>, <Step2/>, <Step3/>, <Step4/>, <Step5/>]
  const count = useSelector((state) => state.step.activeStep)
  

  return (
    <div className="App">
      <div className="h-screen w-screen bg-gray-200">
        {/* <img className='' src={bgSidebarMob} alt="" /> */}
        <div className='flex flex-col items-center justify-between h-screen '>
          <div className='flex flex-col content-between'>
            <img className='absolute left-1/2 -translate-x-1/2 z-0 w-full' src={bgMb} alt="" />
            <Header />
            {count === 1 ? steps[0] : ''}
            {count === 2 ? steps[1] : ''}
            {count === 3 ? steps[2] : ''}
            {count === 4 ? steps[3] : ''}
            {count === 5 ? steps[4] : ''}
          </div>

          <Footer />
        </div>

      </div>


    </div>
  )
}

export default App
