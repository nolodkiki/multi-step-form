import { useDispatch, useSelector } from 'react-redux'
import { selectOnlineService } from '../../Redux/slices/additionsSlice'
import Addition from '../Addition'
import style from './steps.module.css'


const Step3 = () => {
    const state = useSelector(state => state.additions)
    const dispatch = useDispatch()
    const onlineService = () => {
        dispatch(selectOnlineService())
    }

    return (
        <>
            <div className={style.container}>
                <div className="pb-3 text-2xl font-bold text-blue-100">Pick add-ons</div>
                <div className="pb-3 text-gray-100">Add-ons help enhance your gaming experience.</div>
                <div className={style.flexColGap}>
                    <Addition add={state.addOnlineService.add} description={state.addOnlineService.description} price={state.addOnlineService.price} selected={state.addOnlineService.selected} func={onlineService} />
                    <Addition add={state.addStorage.add} description={state.addStorage.description} price={state.addStorage.price} />
                    <Addition add={state.addCustomProfile.add} description={state.addCustomProfile.description} price={state.addCustomProfile.price} />
                </div>

            </div>

        </>
    )
}

export default Step3