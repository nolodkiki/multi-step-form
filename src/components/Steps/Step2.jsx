import Arcade from '../../assets/images/icon-arcade.svg'
import Advanced from '../../assets/images/icon-advanced.svg'
import Pro from '../../assets/images/icon-pro.svg'

import style from './steps.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Plan from '../Plan'
import { changePeriod, selectedPlan, selectedPrice } from '../../Redux/slices/selectPlan'


const Step2 = () => {
    const state = useSelector(state => state.selectPlan)
    const dispatch = useDispatch()
    const changeCost = () => {
        dispatch(changePeriod())
        dispatch(selectedPlan(''))
        dispatch(selectedPrice(0))
    }
    return (
        <>
            <div className={style.container}>
                <div className="pb-3 text-2xl font-bold text-blue-100">Select your plan</div>
                <div className="pb-3 text-gray-100">You have the option of monthly or yearly billing.</div>

                <div className={style.flexColGap}>
                    <Plan plan={state.plans.arcade} period={state.period} icon={Arcade} />
                    <Plan plan={state.plans.advanced} period={state.period} icon={Advanced} />
                    <Plan plan={state.plans.pro} period={state.period} icon={Pro} />
                </div>
                <div className='rounded-md flex items-center justify-between px-12 h-12 bg-gray-50 mt-5'>
                    <div>Monthly</div>
                    <label  className={style.switch}>
                        <input onChange={() => {changeCost()}} type="checkbox" checked={state.period}/>
                        <span className={style.slider} />
                    </label>
                    <div>Yearly</div>
                </div>
            </div>
        </>
    )
}

export default Step2