import { useDispatch, useSelector } from "react-redux"
import { addEmailValue, addNameValue, addPhoneValue } from "../Redux/slices/personalInfoSlice"
import { decrementStep, incrementStep } from "../Redux/slices/stepSlice"

const Footer = ({ nameValue, emailValue, phoneValue }) => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.step)

    const checkEmptyValue = () => {
        dispatch(addNameValue(nameValue))
        dispatch(addEmailValue(emailValue))
        dispatch(addPhoneValue(phoneValue))

        if (nameValue !== '' && emailValue !== '' && phoneValue !== '') {
            dispatch(incrementStep())
        }
    }



    const footerButtons = <div className="w-full bg-white py-4 px-4 z-30">
        {count.activeStep === 1 ? '' : <button onClick={() => dispatch(decrementStep())} className="text-gray-400 mt-1">Go Back</button>}
        {count.activeStep !== 5 ? <button onClick={() => checkEmptyValue()} className=" float-right rounded bg-blue-100 px-4 py-2 text-white">{count.activeStep === 4 ? 'Confirm' : 'Next step'}</button> : ''}

    </div>

    return (
        count.activeStep !== 5 ? footerButtons : ''
    )
}
export default Footer