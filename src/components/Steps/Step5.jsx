import style from './steps.module.css'
import thankIcon from '../../assets/images/icon-thank-you.svg'


const Step5 = () => {
    return (
        <>
            <div className={style.container}>
                <div className='text-center py-10 px-3'>
                    <img className='w-14 mx-auto' src={thankIcon} alt="img" />
                    <div className='text-xl font-bold text-blue-100 py-3'>Thank you!</div>
                    <div className='text-small text-gray-100'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</div>
                </div>

            </div>

        </>
    )
}

export default Step5