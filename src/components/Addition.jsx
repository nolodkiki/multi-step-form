import style from './steps/steps.module.css'

const Addition = ({add, description, price, selected, id, action}) => {
    

    return (
        <button onClick={() => action(id)} className={`flex items-center w-full relative pl-4 py-3 px-3 border border-solid border-gray-200 rounded-md cursor-pointer ${selected && 'bg-magnolia border-blue-100'}`}>
            <input className={style.cbx} type="checkbox" checked={selected} />
            <div className="leading-tight pl-3 text-left">
                <div className="text-blue-100 text-sm font-bold">{add}</div>
                <div className="text-gray-400 text-xs">{description}</div>
            </div>
            <div className='ml-auto text-blue-200 text-sm'>
                +${price}/mo
            </div>
        </button>
    )
}
export default Addition