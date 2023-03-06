import { useDispatch, useSelector } from "react-redux"
import { changeStep } from "../../Redux/slices/stepSlice"


const Header = () => {
    const numbers = [1, 2, 3, 4]
    const activeStep = useSelector(state => state.step.activeStep)
    const dispatch = useDispatch()

    const onClickButton = (num) => {
        dispatch(changeStep(num))
    }


    const mapingNumber = numbers.map((e, i) => <a onClick={() => onClickButton(e)} key={i} className={activeStep === e ? "bg-white text-blue-100 rounded-full border border-solid border-white px-3 py-1 font-medium ease-in duration-300" : "hover:bg-white hover:text-blue-100 ease-in duration-300 rounded-full border border-solid border-white px-3 py-1 font-medium text-white" } href="#">{e}</a>)


    return (<>
        <ul className="flex justify-center gap-5 pt-7 pb-7 z-10">
                {mapingNumber}
            </ul>

            </>
    )
}

export default Header