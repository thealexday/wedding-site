import { DescriptionText } from "../descriptionText/DescriptionText";
import { Title } from "../title/Title";
import { MyMap } from "../map/MyMap";
import { GelyaMap } from "../map/gelyaMap/GelyaMap";
import { useInView } from 'react-intersection-observer';
import '../../index.css'
import style from './LocationBlock.module.css';
import { useState } from "react";


export function Locationblock(props){
    const [centerText, setCenterText] = useState(true)
    const { ref: locationBoxRef, inView: locationBoxVisible } = useInView({
        triggerOnce: true
    });
    return (
        <section>
          {props.gelya && (
               <div className="container">
               <section ref={locationBoxRef} className={locationBoxVisible ? style.locationBox : style.noneBlock}>
                <Title>Местоположение</Title>
                <DescriptionText centerText={centerText}>В 14:00 ждём вас по адресу: Новосибирск, Советский район, проспект Академика Лаврентьева 14 (ЗАГС)</DescriptionText>
                <DescriptionText centerText={centerText}>В 17:00 ждём вас по адресу: Новосибирск, Советский район, Николаева 12/2 (Банкетный зал «Теплица»)</DescriptionText>
                <GelyaMap/>
                </section>
               </div>
          )}
          {props.lera && (
               <div className="container">
               <section ref={locationBoxRef} className={locationBoxVisible ? style.locationBox : style.noneBlock}>
                <Title>Местоположение</Title>
                <DescriptionText centerText={centerText}>Ждем вас по адресу: г.Бердск, ул. Зеленая Роща, 2а</DescriptionText>
                <DescriptionText centerText={centerText}>Ресторан Времена Года (шатер)</DescriptionText>
                <MyMap/>
                </section>
               </div>
          )}
        </section>
    )
}