import style from './DescriptionText.module.css'

export function DescriptionText({children, centerText, rigthText, leftText}){
    return (
        <p 
        className={
        centerText 
        ? [style.descriptionText, style.center].join(' ') :
        rigthText
        ? [style.descriptionText, style.right].join(' ') :
        leftText
        ? [style.descriptionText, style.left].join(' ') :
        style.descriptionText}
        >{children}
        </p>
    )
}