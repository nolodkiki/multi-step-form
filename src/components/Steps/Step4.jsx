import { useDispatch, useSelector } from 'react-redux'
import { changeStep } from '../../Redux/slices/stepSlice'
import style from './steps.module.css'


const Step4 = () => {
    const dispatch = useDispatch()

    const plan = useSelector(state => state.selectPlan)
    const additions = useSelector(state => state.additions)


    const selectedPlan = plan.selectedPlan
    const planPrice = plan.selectedPrice
    const period = plan.period ? '/yr' : '/mo'

    const totalPriceAdds = () => {
        const totalPrice = 0
        for (const item in additions) {
            additions[item].selected && plan.period ? additions[item].yearlyPrice : additions[item].monthlyPrice
        }
    }

    const total = planPrice + 1


    const FinishAdds = ({ add, price }) => {
        return (
            <div className='flex justify-between items-center pt-3'>
                <div className='text-gray-400'>
                    {add}
                </div>
                <div className='text-blue-100'>
                    +{price}${period}
                </div>
            </div>
        )
    }

    const selectedAdds = () => {
        const arr = []
        for (const item in additions) {
            additions[item].selected && arr.push(<FinishAdds key={additions[item].id} add={additions[item].add} price={plan.period ? additions[item].yearlyPrice : additions[item].monthlyPrice} />)
        }

        return arr
    }



    return (
        <>
            <div className={style.container}>
                <div className="pb-3 text-2xl font-bold text-blue-100">Finishing up</div>
                <div className="pb-3 text-gray-100">Double-check everything looks OK before confirming.</div>
                <div className='bg-magnolia p-4 rounded-md'>
                    <div className='flex justify-between items-center border-b-2 pb-2'>
                        <div className='text-blue-100 text-sm font-bold'>
                            {selectedPlan} (Monthly)<br />
                            <span onClick={() => dispatch(changeStep(2))} className='text-gray-400 font-normal underline cursor-pointer'>Change</span>
                        </div>
                        <div className='font-bold text-blue-100'>
                            ${planPrice}{period}
                        </div>
                    </div>
                    {selectedAdds()}
                </div>

                <div className='flex justify-between px-4 pt-5'>
                    <div className='text-gray-400'>
                        Total (per month)
                    </div>
                    <div className='text-lg text-blue-200 font-bold'>
                        +12/mo
                    </div>
                </div>

            </div>

        </>
    )
}

export default Step4