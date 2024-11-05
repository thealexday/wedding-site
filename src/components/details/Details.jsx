import { DescriptionText } from "../descriptionText/DescriptionText";
import { Title } from "../title/Title";
import '../../index.css'
import "./details.css"
import { useInView } from 'react-intersection-observer';
import { useState } from "react";


export function Details(props) {
    const [centerText, setCenterText] = useState(true)
    const [rigthText, setRigthText] = useState(true)
    const [leftText, setLeftText] = useState(true)
    const { ref: detailsBoxRef, inView: detailsBoxVisible } = useInView({
        triggerOnce: true
    });
    const { ref: organizationBoxRef, inView: organizationBoxVisible } = useInView({
        triggerOnce: true
    });
    return (
        <section className="details">
           {props.gelya && (
                <div className="container">
                <div className="details-all">
                    <div className="details-all__drop">
                        <div className="detailsBox-2Gelya">
                            <Title>Пожелания</Title>
                            <DescriptionText centerText={centerText}>Мы не хотим обременять вас выбором подарка, поэтому будем очень рады вашему вкладу в наш семейный бюджет</DescriptionText>
                        </div>
                    </div>
                </div>

            </div>
           )}
           {props.lera && (
                <div className="container">
                <div className="details-all">
                    <div className="details-all__drop">
                        <div ref={detailsBoxRef} className={detailsBoxVisible ? 'detailsBox' : 'noneBlock'}>
                            <Title>Детали</Title>
                            <DescriptionText leftText={leftText}>Мы хотим, чтобы вы сполна насладились праздником, поэтому церемония и свадебный банкет предполагает участие только взрослых</DescriptionText>
                        </div>
                        <div className="detailsBox-2">
                            <Title >Пожелания</Title>
                            <DescriptionText rigthText={rigthText}>Мы не хотим обременять вас выбором подарка, поэтому будем очень рады вашему вкладу в наш семейный бюджет</DescriptionText>
                        </div>
                    </div>
                    <div ref={organizationBoxRef} className={organizationBoxVisible ? 'detailsBox-3' : 'noneBlock'}>
                        <Title>Организатор</Title>
                        <DescriptionText centerText={centerText}>Наш свадебный распорядитель- Татьяна Реутова</DescriptionText>
                        <DescriptionText centerText={centerText}><i className="fa fa-solid fa-phone"></i>8-988-332-9649</DescriptionText>
                    </div>
                </div>

            </div>
           )}
        </section>
    )
}