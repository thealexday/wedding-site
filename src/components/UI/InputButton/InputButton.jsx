import style from './InputButton.module.css'

export function InputButton({children, props}){
    return (
        <button className={style.inputButton} {...props}>{children}</button>
    )
}