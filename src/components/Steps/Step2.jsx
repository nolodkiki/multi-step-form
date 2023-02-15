import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'

import style from './steps.module.css'


const Step2 = () => {
    return (
        <>
            <div className={style.container}>
                <div className="pb-3 text-2xl font-bold text-blue-100">Select your plan</div>
                <div className="pb-3 text-gray-100">You have the option of monthly or yearly billing.</div>
                <div className={style.flexColGap}>
                    <div className="border border-solid border-gray-200 w-full rounded-md flex items-center p-3">
                        <div className="icon"><img src={arcade} alt="" /></div>
                        <div className="pl-3 leading-tight ">
                            <div className="font-medium text-blue-100">Arcade</div>
                            <div className="text-gray-400">$9/mo</div>
                        </div>
                    </div>
                    <div className="border border-solid border-gray-200 w-full rounded-md flex items-center p-3">
                        <div className="icon"><img src={advanced} alt="" /></div>
                        <div className="pl-3 leading-tight ">
                            <div className="font-medium text-blue-100">Advanced</div>
                            <div className="text-gray-400">$12/mo</div>
                        </div>
                    </div>
                    <div className="border border-solid border-gray-200 w-full rounded-md flex items-center p-3">
                        <div className="icon"><img src={pro} alt="" /></div>
                        <div className="pl-3 leading-tight ">
                            <div className="font-medium text-blue-100">Pro</div>
                            <div className="text-gray-400">$15/mo</div>
                        </div>
                    </div>
                </div>
                <div className='rounded-md flex items-center justify-between px-12 h-12 bg-gray-50 mt-5'>
                    <div>Monthly</div>
                    <label className={style.switch}>
                        <input type="checkbox" />
                            <span className={style.slider}></span>
                    </label>
                    <div>Yearly</div>
                </div>
            </div>

        </>
    )
}

export default Step2