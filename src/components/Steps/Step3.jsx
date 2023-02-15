import style from './steps.module.css'


const Step3 = () => {
    return (
        <>
            <div className={style.container}>
                <div className="pb-3 text-2xl font-bold text-blue-100">Pick add-ons</div>
                <div className="pb-3 text-gray-100">Add-ons help enhance your gaming experience.</div>
                <div className={style.flexColGap}>
                    <div className={style.radioButton}>
                        <input className={style.cbx} type="checkbox" />
                        <div className="leading-tight pl-3">
                            <div className="text-blue-100 text-sm font-bold">Online service</div>
                            <div className="text-gray-400 text-xs">Access to multiplayer games</div>
                        </div>
                        <div className='ml-auto'>
                            +$1/mo
                        </div>
                    </div>
                    <div className={style.radioButton}>
                        <input className={style.cbx} type="checkbox" />
                        <div className="leading-tight pl-3">
                            <div className="text-blue-100 text-sm font-bold">Larger storage</div>
                            <div className="text-gray-400 text-xs">Extra 1TB of cloud save</div>
                        </div>
                        <div className='ml-auto'>
                            +$2/mo
                        </div>
                    </div>
                    <div className={style.radioButton}>
                        <input className={style.cbx} type="checkbox" />
                        <div className="leading-tight pl-3">
                            <div className="text-blue-100 text-sm font-bold">Customizable profile</div>
                            <div className="text-gray-400 text-xs">Custom theme on your profile</div>
                        </div>
                        <div className='ml-auto'>
                            +$2/mo
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Step3