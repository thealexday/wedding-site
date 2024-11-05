import style from './InputRadio.module.css'

export function InputRadio(props){
    return (
        <input className={style.radio} {...props}/>
    )
}