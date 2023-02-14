import './App.css'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Step1 from './components/Steps/Step1'
import bgMb from '../src/assets/images/bg-sidebar-mobile.svg'
import Step2 from './components/Steps/Step2'


function App() {

  return (
    <div classNameName="App">
      <div className="h-screen w-screen bg-gray-200">
        {/* <img className='' src={bgSidebarMob} alt="" /> */}
        <div className='flex flex-col items-center justify-between h-screen '>
          <div className='flex flex-col content-between'>
            <img className='absolute left-1/2 -translate-x-1/2 z-0 w-full' src={bgMb} alt="" />
            <Header />
            {/* <Step1 /> */}
            <Step2 />
          </div>

          <Footer />
        </div>

      </div>


    </div>
  )
}

export default App
