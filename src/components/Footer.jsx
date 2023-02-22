import { useDispatch, useSelector } from "react-redux"
import { decrementStep, incrementStep } from "../Redux/slices/stepSlice"

const Footer = () => {
    const dispatch = useDispatch()


    const count = useSelector((state) => state.step)
    return (
        <div className="w-full bg-white py-4 px-4 z-30">
            {count.activeStep === 1 ? '' : <button onClick={() => dispatch(decrementStep())} className="text-gray-400 mt-1">Go Back</button>}
            <button onClick={() => dispatch(incrementStep())} className=" float-right rounded bg-blue-100 px-4 py-2 text-white">{count.activeStep === 5 ? 'Continue' : 'Next Step'}</button>
        </div>
    )
}
export default Footer