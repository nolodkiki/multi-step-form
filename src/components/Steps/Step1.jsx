import { useSelector } from 'react-redux'
import style from './steps.module.css'


const Step1 = ({nameValue, setNameValue, emailValue, setEmailValue, phoneValue, setPhoneValue}) => {
    const count = useSelector((state) => state.personalInfo)

    return (
        <>
            <div className={style.container}>
                <div className="pb-3 text-2xl font-bold text-blue-100">Personal info</div>
                <div className="pb-3 text-gray-100">Please provide your name, email address, and phone number.</div>
                <div className={style.flexColGap} >
                    <div className="nameInput">
                        <div className="text-xs">Name:</div>
                        <input  onChange={(e) => setNameValue(e.target.value)} className={style.inputForm} type="name" placeholder="e.g. Stephen King" value={nameValue} />
                        {count.errors.name ? <p>err</p> : ''}
                    </div>
                    <div className="EmailInput">
                        <div className="name text-xs">Email Address</div>
                        <input onChange={(e) => setEmailValue(e.target.value)} className={style.inputForm} type="email" placeholder="e.g. stephenking@lorem.com" value={emailValue} />
                        {count.errors.email ? <p>err</p> : ''}

                    </div>
                    <div className="PhoneInput">
                        <div className="name text-xs">Phone Number</div>
                        <input  onChange={(e) => setPhoneValue(e.target.value)} className={style.inputForm} type="number" placeholder="e.g. +1 234 567 890" value={phoneValue} />
                        {count.errors.phone ? <p>err</p> : ''}


                    </div>
                </div>

            </div>

        </>
    )
}

export default Step1