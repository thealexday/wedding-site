import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../../index.css'
import { DescriptionText } from '../descriptionText/DescriptionText'
import { Title } from '../title/Title'
import style from './MainInfo.module.css'
import Img from './icons/бокалы.png'
import Img_1 from './icons/тарелки.png'
import Img_2 from './icons/кольца.png'


export function MainInfo(props) {
    const [centerText, setCenterText] = useState(true)
    
    const { ref: photoBoxRef, inView: photoVisible} = useInView({
        triggerOnce: true,
        threshold: 0.75
    });
    const { ref: timingBoxRef, inView: timingVisible, } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });
    const { ref: eventBoxRef, inView: eventVisible, } = useInView({
        triggerOnce: true,
        threshold: 0.75
    });
    
    return (
        <div> 
            <section className={style.section}>
            {props.gelya && (
                <div className='container'>
                <section ref={ eventBoxRef }  className={eventVisible ? style.eventBox : style.noneBlock}>
                <Title>Дорогие друзья!</Title>
                <DescriptionText centerText={centerText}>Совсем скоро в нашей жизни произойдет очень важное и трогательное
                    событие, радость которого мы хотим разделить с Вами!
                </DescriptionText>
                </section>

                <section ref={timingBoxRef} className={timingVisible ? [style.bigTimingBox, style.active].join(' ') : style.noneBlock}>
                <Title>Тайминг дня</Title>
                <div  className={style.timingBox}>
                    <div className={style.iconBbox}>
                        <img className={style.icon} src={Img} alt="icon" />
                        <DescriptionText centerText={centerText}>14:00 | сбор гостей*</DescriptionText>
                    </div>
                    <div className={style.iconBbox}>
                        <img className={style.icon} src={Img_2} alt="icon" />
                        <DescriptionText centerText={centerText}>14:20 | торжественная церемония</DescriptionText>
                    </div>
                    <div className={style.iconBbox}>
                        <img className={style.icon} src={Img_1} alt="icon" />
                        <DescriptionText centerText={centerText}>17:00 | начало банкета</DescriptionText>
                    </div>
                </div>
                </section>
                <DescriptionText centerText={centerText}>* время сбора гостей может незначительно измениться, о чем будет сообщено в чате гостей</DescriptionText>
                <div ref={photoBoxRef} className={style.photoBox}>
                    <div className={photoVisible ? [style.imgBlockGelya, style.active].join(' ') : style.noneBlock} >
                    </div>
                    <div className={style.photoBox__titleBox}>
                        <h1 className={photoVisible ? [style.photoBoxGelya__title, style.active].join(' ') : style.noneBlock} >Сергей</h1>
                        <h1 className={photoVisible ? [style.photoBoxGelya__title, style.active].join(' ') : style.noneBlock}>и</h1>
                        <h1 className={photoVisible ? [style.photoBoxGelya__title, style.active].join(' ') : style.noneBlock}>Ангелина</h1>
                    </div>
                </div>
            </div>
            )}
            {props.lera && (
                <div className='container'>
                <section ref={ eventBoxRef }  className={eventVisible ? style.eventBox : style.noneBlock}>
                <Title>Дорогие друзья!</Title>
                <DescriptionText centerText={centerText}>Совсем скоро в нашей жизни произойдет очень важное и трогательное
                    событие, радость которого мы хотим разделить с Вами!
                </DescriptionText>
                </section>

                <section ref={timingBoxRef} className={timingVisible ? [style.bigTimingBox, style.active].join(' ') : style.noneBlock}>
                <Title>Тайминг дня</Title>
                <div  className={style.timingBox}>
                    <div className={style.iconBbox}>
                        <img className={style.icon} src={Img} alt="icon" />
                        <DescriptionText centerText={centerText}>16:00 | сбор гостей*</DescriptionText>
                    </div>
                    <div className={style.iconBbox}>
                        <img className={style.icon} src={Img_2} alt="icon" />
                        <DescriptionText centerText={centerText}>16:30 | выездная регистрация</DescriptionText>
                    </div>
                    <div className={style.iconBbox}>
                        <img className={style.icon} src={Img_1} alt="icon" />
                        <DescriptionText centerText={centerText}>17:30 | начало банкета</DescriptionText>
                    </div>
                </div>
                </section>
                <DescriptionText centerText={centerText}>* время сбора гостей может незначительно измениться, о чем будет сообщено в чате гостей</DescriptionText>
                <div ref={photoBoxRef} className={style.photoBox}>
                    <div className={photoVisible ? [style.imgBlock, style.active].join(' ') : style.noneBlock} >
                    </div>
                    <div className={style.photoBox__titleBox}>
                        <h1 className={photoVisible ? [style.photoBox__title, style.active].join(' ') : style.noneBlock} >Сергей</h1>
                        <h1 className={photoVisible ? [style.photoBox__title, style.active].join(' ') : style.noneBlock}>и</h1>
                        <h1 className={photoVisible ? [style.photoBox__title, style.active].join(' ') : style.noneBlock}>Валерия</h1>
                    </div>
                </div>
            </div>
            )}
        </section>
        </div>
    )
}