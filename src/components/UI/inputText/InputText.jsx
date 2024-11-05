import style from './InputText.module.css'

export function InputText(props){
    return (
        <input required={props.required} className={props.error ? [style.input, style.error].join(' ') : style.input} {...props} />
    )
}
