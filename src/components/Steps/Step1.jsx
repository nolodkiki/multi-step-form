import { useSelector } from 'react-redux'
import style from './steps.module.css'


const Step1 = ({ nameValue, setNameValue, emailValue, setEmailValue, phoneValue, setPhoneValue }) => {
    const count = useSelector((state) => state.personalInfo)

    return (
        <>
            <div className={style.container}>
                <div className="pb-3 text-2xl font-bold text-blue-100">Personal info</div>
                <div className="pb-3 text-gray-100">Please provide your name, email address, and phone number.</div>
                <div className={style.flexColGap} >
                    <div className="nameInput">
                        <div className='flex justify-between items-center pb-1'>
                            <div className="text-xs">Name:</div>
                            {count.errors.name ? <p className='text-red text-xs font-bold'>This field is requirde</p> : ''}
                        </div>
                        <input onChange={(e) => setNameValue(e.target.value)} className={`w-full rounded border-2 border-solid  py-2 px-3 font-medium ${count.errors.name ? 'border-red' : 'border-gray-200'}`} type="text" placeholder="e.g. Stephen King" value={nameValue} />
                    </div>
                    <div className="EmailInput">
                        <div className='flex justify-between items-center'>
                            <div className="text-xs">Email:</div>
                            {count.errors.email ? <p className='text-red text-xs font-bold'>This field is requirde</p> : ''}
                        </div>
                        <input onChange={(e) => setEmailValue(e.target.value)} className={`w-full rounded border-2 border-solid  py-2 px-3 font-medium ${count.errors.email ? 'border-red' : 'border-gray-200'}`} type="email" placeholder="e.g. stephenking@lorem.com" value={emailValue} />

                    </div>
                    <div className="PhoneInput">
                        <div className='flex justify-between items-center'>
                            <div className="text-xs">Phone:</div>
                            {count.errors.phone ? <p className='text-red text-xs font-bold'>This field is requirde</p> : ''}
                        </div>
                        <input onChange={(e) => setPhoneValue(e.target.value)} className={`w-full rounded border-2 border-solid  py-2 px-3 font-medium ${count.errors.phone ? 'border-red' : 'border-gray-200'}`} type="number" placeholder="e.g. +1 234 567 890" value={phoneValue} />


                    </div>
                </div>

            </div>

        </>
    )
}

export default Step1