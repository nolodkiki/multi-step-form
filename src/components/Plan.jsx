import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedPlan, selectedPrice } from '../Redux/slices/selectPlan'

const Plan = ({plan, icon, period}) => {
    const statePlan = useSelector(state => state.selectPlan) 
    const dispatch = useDispatch()
    const choicePlan = () => {
        dispatch(selectedPlan(`${plan.title}`))
        dispatch(selectedPrice(`${period ? plan.yearlyPrice : plan.monthlyPrice}`))
    }


    return (
        <button onClick={choicePlan} className={`border border-solid border-gray-200 w-full rounded-md flex items-center p-3 text-left 
        ${statePlan.selectedPlan === plan.title && 'bg-magnolia border-blue-100'}`}>
            <div className="icon"><img src={icon} alt="" /></div>
            <div className="pl-3 leading-tight">
                <div className="font-medium text-blue-100">{plan.title}</div>
                <div className="text-gray-400">${period ? plan.yearlyPrice : plan.monthlyPrice}/{period ? 'ya' : 'mo'}</div>
                {period ? <div className='text-xs'>2 months free</div> : ''}
            </div>
        </button>
    )
}
export default Plan