import { useSelector } from 'react-redux'
import { selectOnlineService } from '../Redux/slices/additionsSlice'
import style from './steps/steps.module.css'

const Addition = ({add, description, price, selected, func}) => {
    

    return (
        <div className={style.radioButton}>
            <input className={style.cbx} onChange={() => func()} type="checkbox" checked={selected} />
            <div className="leading-tight pl-3">
                <div className="text-blue-100 text-sm font-bold">{add}</div>
                <div className="text-gray-400 text-xs">{description}</div>
            </div>
            <div className='ml-auto'>
                +${price}/mo
            </div>
        </div>
    )
}
export default Addition