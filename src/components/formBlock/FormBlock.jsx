import '../../index.css'
import style from './FormBlock.module.css'
import { DescriptionText } from '../descriptionText/DescriptionText'
import { Form } from '../form/Form'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export function FormBlock(props) {
    const [centerText, setCenterText] = useState(true)
    const { ref: photoBoxRef, inView: photoBoxVisible } = useInView({
        triggerOnce: true
    });
    return (
        <section>
            {props.gelya && (
                <div className="container">
                <div ref={photoBoxRef} className={photoBoxVisible ? style.photoFormBox : style.noneBlock}>
                    <div className={style.photoBoxGelya}>
                    </div>
                </div>
            </div>
            )}
            {props.lera && (
                <div className="container">
                <div ref={photoBoxRef} className={photoBoxVisible ? style.photoFormBox : style.noneBlock}>
                    <div className={style.photoBox}>
                    </div>
                    <DescriptionText centerText={centerText}>Пожалуйста, подтвердите свое присутствие до <span className={style.dateSpan}>30.06.2024</span>, заполнив опрос ниже:</DescriptionText>
                    <Form />
                </div>
            </div>
            )}
        </section>
    )
}