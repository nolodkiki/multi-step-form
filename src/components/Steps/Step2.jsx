import Arcade from '../../assets/images/icon-arcade.svg'
import Advanced from '../../assets/images/icon-advanced.svg'
import Pro from '../../assets/images/icon-pro.svg'

import style from './steps.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const Step2 = () => {
    const state = useSelector(state => state.selectPlan.plans)
    const numbersPlan = [0, 1, 2]

    const plans = () => numbersPlan.map(e => {
        <button className={style.planButton}>
            <div className="icon"><img src={state.plan.e} alt="" /></div>
            <div className="pl-3 leading-tight">
                <div className="font-medium text-blue-100">{state.plan.e}</div>
                <div className="text-gray-400">${state.plan.e}/mo</div>
            </div>
        </button>
    })
    return (
        <>
            <div className={style.container}>
                <div className="pb-3 text-2xl font-bold text-blue-100">Select your plan</div>
                <div className="pb-3 text-gray-100">You have the option of monthly or yearly billing.</div>
                <div className={style.flexColGap}>
                    <button className={style.planButton}>
                        <div className="icon"><img src={state.plan.e} alt="" /></div>
                        <div className="pl-3 leading-tight">
                            <div className="font-medium text-blue-100">{state.plan.e}</div>
                            <div className="text-gray-400">${state.plan.e}/mo</div>
                        </div>
                    </button>
                    <button className={style.planButton}>
                        <div className="icon"><img src={state.plan.e} alt="" /></div>
                        <div className="pl-3 leading-tight">
                            <div className="font-medium text-blue-100">{state.plan.e}</div>
                            <div className="text-gray-400">${state.plan.e}/mo</div>
                        </div>
                    </button>
                    <button className={style.planButton}>
                        <div className="icon"><img src={state.plan.e} alt="" /></div>
                        <div className="pl-3 leading-tight">
                            <div className="font-medium text-blue-100">{state.plan.e}</div>
                            <div className="text-gray-400">${state.plan.e}/mo</div>
                        </div>
                    </button>
                </div>
                <div className='rounded-md flex items-center justify-between px-12 h-12 bg-gray-50 mt-5'>
                    <div>Monthly</div>
                    <label className={style.switch}>
                        <input type="checkbox" />
                        <span className={style.slider} />
                    </label>
                    <div>Yearly</div>
                </div>
            </div>

        </>
    )
}

export default Step2