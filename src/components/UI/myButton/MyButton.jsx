import style from './MyButton.module.css'

export function MyButton({children, onClick}){
    return (
        <button className={style.button} onClick={onClick}>{children}</button>
    )
}