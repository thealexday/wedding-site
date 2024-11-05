import { DescriptionText } from "../descriptionText/DescriptionText";
import { Title } from '../title/Title'
import "../../index.css"
import style from './DressCode.module.css'
import { useInView } from 'react-intersection-observer';
import { useState } from "react";


export function DressCode() {
    const [centerText, setCenterText] = useState(true)
    const { ref: dressCodeBoxRef, inView: dressCodeBoxVisible } = useInView({
        triggerOnce: true
    });
    return (
        <section>
            <div className="container">
            <div ref={dressCodeBoxRef} className={dressCodeBoxVisible ? style.dressCodeBox : style.noneBlock}>
                <Title>Дресс-код</Title>
                <DescriptionText centerText={centerText}>Мы будем рады, если при подборе нарядов Вы отдадите предпочтения следующим цветам ваших вечерних нарядов:</DescriptionText>
               
                    <section className={style.colorDropBox}>
                        <div className={style.colorTextBox}>
                            <div className={style.color_black}></div>
                            <p className={style.colorText}>черный</p>
                        </div>
                        <div className={style.colorTextBox}>
                            <div className={style.color_grey}></div>
                            <p className={style.colorText}>серый</p>
                        </div>
                        <div className={style.colorTextBox}>
                            <div className={style.color_chokolate}></div>
                            <p className={style.colorText}>шоколадный</p>
                        </div>
                        <div className={style.colorTextBox}>
                            <div className={style.color_olive}></div>
                            <p className={style.colorText}>оливковый</p>
                        </div>
                    </section>
                    <section className={style.colorDropBox}>
                        <div className={style.colorTextBox}>
                            <div className={style.color_bezh}></div>
                            <p className={style.colorText}>бежевый</p>
                        </div>
                        <div className={style.colorTextBox}>
                            <div className={style.color_korich}></div>
                            <p className={style.colorText}>коричневый</p>
                        </div>
                        <div className={style.colorTextBox}>
                            <div className={style.color_wine}></div>
                            <p className={style.colorText}>винный</p>
                        </div>
                    </section>
                <DescriptionText centerText={centerText}>Если в предложенных цветах нет цвета, который Вам близок, Вы можете выбрать иные цвета нарядов, за исключением ярких цветов, а также ярких принтов</DescriptionText>
            </div>
            </div>
        </section>
    )
}