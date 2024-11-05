import style from './Title.module.css'


export const Title = function ({children}){
    return(
        <h1 className={style.title} >{children}</h1>
    )
}

