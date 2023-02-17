import style from './steps.module.css'


const Step4 = () => {
    return (
        <>
            <div className={style.container}>
                <div className="pb-3 text-2xl font-bold text-blue-100">Finishing up</div>
                <div className="pb-3 text-gray-100">Double-check everything looks OK before confirming.</div>
                <div className='bg-magnolia p-4 rounded-md'>
                    <div className='flex justify-between items-center border-b-2 pb-2'>
                        <div className='text-blue-100 text-sm font-bold'>
                            Arcade (Monthly)<br/>
                            <span className='text-gray-400 font-normal underline'>Change</span>
                        </div>
                        <div className='font-bold text-blue-100'>
                            $9/mo
                        </div>
                    </div>
                    <div className='flex justify-between items-center pt-3'>
                        <div className='text-gray-400'>
                            Online service
                        </div>
                        <div className='text-blue-100'>
                            +$1/mo
                        </div>
                    </div>
                    <div className='flex justify-between items-center pt-3'>
                        <div className='text-gray-400'>
                            Larger storage
                        </div>
                        <div className='text-blue-100'>
                            +$2/mo
                        </div>
                    </div>
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