import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Step from './components/Step'
import bgMb from '../src/assets/images/bg-sidebar-mobile.svg'


function App() {

  return (
    <div classNameName="App">
      <div className="h-screen w-screen bg-gray-200">
        {/* <img className='' src={bgSidebarMob} alt="" /> */}
        <div className='flex flex-col items-center justify-between h-screen '>
          <div className='flex flex-col content-between sm:flex-row'>
            <img className='absolute left-1/2 -translate-x-1/2 z-0 w-full sm:hidden sm:relative' src={bgMb} alt="" />
            <Header />
            <Step />
          </div>

          <Footer />
        </div>

      </div>


    </div>
  )
}

export default App
