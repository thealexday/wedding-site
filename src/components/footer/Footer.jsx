import style from './Footer.module.css'
import '../../index.css'

export function Footer(props){
    return (
        <footer className={style.footer}>
            {props.gelya && (
                <div className="container">
                <h1 className={style.footerTitle}>С любовью</h1>
                <div className={style.handsBackground}></div>
                <h1 className={style.footerTitle}>Сергей и Ангелина</h1>
                </div>
            )}
            {props.lera && (
                <div className="container">
                <h1 className={style.footerTitle}>С любовью</h1>
                <div className={style.handsBackground}></div>
                <h1 className={style.footerTitle}>Сергей и Валерия</h1>
                </div>
            )}
        </footer>
    )
}