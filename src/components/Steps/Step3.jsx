import { useDispatch, useSelector } from 'react-redux'
import { selectOnlineService } from '../../Redux/slices/additionsSlice'
import Addition from '../Addition'
import style from './steps.module.css'


const Step3 = () => {
    const state = useSelector(state => state.additions)
    const dispatch = useDispatch()
    const onlineService = (id) => {
        dispatch(selectOnlineService(id))
    }
    const additions = () => {
        const rows = []
        for (let item in state) {
            rows.push(<Addition key={state[item].id} add={state[item].add} description={state[item].description} price={state[item].price} selected={state[item].selected} id={state[item].id} action={onlineService} />)
        }
        return rows
    }

    return (
        <>
            <div className={style.container}>
                <div className="pb-3 text-2xl font-bold text-blue-100">Pick add-ons</div>
                <div className="pb-3 text-gray-100">Add-ons help enhance your gaming experience.</div>
                <div className={style.flexColGap}>
                    {additions()}
                </div>

            </div>

        </>
    )
}

export default Step3