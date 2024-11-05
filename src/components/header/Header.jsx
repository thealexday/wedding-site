import style from './Header.module.css'
import { WeddingTimer } from '../weddingTimer/WeddingTimer'
import { AngelinaTimer } from '../weddingTimer/angelinaTimer/AngelinaTimer'
import '../../index.css'


export function Header(props) {
    return (
       <>
               {props.gelya && (
                   <main className={style.mainGelya}>
                       <div className='container'>
                    <header className={style.header}>
                    <div className={style.headerInfoBox}>
                        <h2 className={[style.title, style.focus_in_contract_bck].join(' ')}>Wedding day</h2>
                        {/* <h3 className={[style.titleDate, style.focus_in_contract_bck].join(' ')}>30 | 08 | 24</h3> */}
                        <h3 className={[style.titleDate, style.focus_in_contract_bck].join(' ')}>11.10.2024</h3>
                        <h2 className={[style.titleName, style.focus_in_contract_bck].join(' ')}>Сергей и Ангелина</h2>
                    </div>
                    <section className={style.dateBlock}>
                        <p className={style.from}>через</p>
                        <AngelinaTimer className='weddingDateBlack' />
                    </section>
                </header>
                </div>
                </main>
               )}
               {props.lera && (
                   <main className={style.main}>
                       <div className="container">
                    <header className={style.header}>
                    <div className={style.headerInfoBox}>
                        <h2 className={[style.title, style.focus_in_contract_bck].join(' ')}>Wedding day</h2>
                        {/* <h3 className={[style.titleDate, style.focus_in_contract_bck].join(' ')}>30 | 08 | 24</h3> */}
                        <h3 className={[style.titleDate, style.focus_in_contract_bck].join(' ')}>30 августа 2024</h3>
                        <h2 className={[style.titleName, style.focus_in_contract_bck].join(' ')}>Сергей и Валерия</h2>
                    </div>
                    <section className={style.dateBlock}>
                        <p className={style.from}>через</p>
                        <WeddingTimer className='weddingDateBlack' />
                    </section>
                </header>
                </div>
                </main>
               )}
               </>
           
    )
}