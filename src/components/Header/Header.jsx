import style from './header.module.css'


const Header = () => {
    return (<>
        <ul className="flex justify-center gap-5 pt-7 pb-7 z-10">
                <a className={style.step} href="#">1</a>
                <a className={style.step} href="#">2</a>
                <a className={style.step} href="#">3</a>
                <a className={style.step} href="#">4</a>
                
            </ul>

            </>
    )
}

export default Header