import { useDispatch, useSelector } from 'react-redux'
import { addNameValue, addEmailValue, addPhoneValue } from '../../Redux/slices/personalInfoSlice'
import style from './steps.module.css'


const Step = () => {
    const count = useSelector((state) => state.personalInfo)
    const dispatch = useDispatch()
    

    return (
        <>
            <div className={style.container}>
                <div className="pb-3 text-2xl font-bold text-blue-100">Personal info</div>
                <div className="pb-3 text-gray-100">Please provide your name, email address, and phone number.</div>
                <div className={style.flexColGap}>
                    <div className="nameInput">
                        <div className="text-xs">Name</div>
                        <input onChange={(e) => dispatch(addNameValue(e.target.value))} className={style.inputForm} type="text" placeholder="e.g. Stephen King" value={count.name}/>
                    </div>
                    <div className="EmailInput">
                        <div className="name text-xs">Email Address</div>
                        <input onChange={(e) => dispatch(addEmailValue(e.target.value))} className={style.inputForm} type="email" placeholder="e.g. stephenking@lorem.com" value={count.email}/>
                    </div>
                    <div className="PhoneInput">
                        <div className="name text-xs">Phone Number</div>
                        <input onChange={(e) => dispatch(addPhoneValue(e.target.value))} className={style.inputForm} type="number" placeholder="e.g. +1 234 567 890" value={count.phone}/>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Step