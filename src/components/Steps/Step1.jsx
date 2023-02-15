import style from './steps.module.css'


const Step = () => {
    return (
        <>
            <div className={style.container}>
                <div className="pb-3 text-2xl font-bold text-blue-100">Personal info</div>
                <div className="pb-3 text-gray-100">Please provide your name, email address, and phone number.</div>
                <div className={style.flexColGap}>
                    <div className="nameInput">
                        <div className="text-xs">Name</div>
                        <input className={style.inputForm} type="text" placeholder="e.g. Stephen King" />
                    </div>
                    <div className="EmailInput">
                        <div className="name text-xs">Email Address</div>
                        <input className={style.inputForm} type="text" placeholder="e.g. stephenking@lorem.com" />
                    </div>
                    <div className="PhoneInput">
                        <div className="name text-xs">Phone Number</div>
                        <input className={style.inputForm} type="text" placeholder="e.g. +1 234 567 890" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Step