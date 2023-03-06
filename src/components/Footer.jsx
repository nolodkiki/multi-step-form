import { useDispatch, useSelector } from "react-redux"
import { decrementStep, incrementStep } from "../Redux/slices/stepSlice"

const Footer = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.step)
    const footerButtons = <div className="w-full bg-white py-4 px-4 z-30">
        {count.activeStep === 1 ? '' : <button onClick={() => dispatch(decrementStep())} className="text-gray-400 mt-1">Go Back</button>}
        {count.activeStep !== 5 ? <button onClick={() => dispatch(incrementStep())} className=" float-right rounded bg-blue-100 px-4 py-2 text-white">{count.activeStep === 4 ? 'Confirm' : 'Next step'}</button> : ''}

    </div>

    return (
        count.activeStep !== 5 ? footerButtons : ''
    )
}
export default Footer