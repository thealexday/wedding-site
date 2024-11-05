import './index.css'
import { Header } from './components/header/Header'
import { MainInfo } from './components/mainInfo/MainInfo'
import { Locationblock } from './components/locationBlock/LocationBlock'
import { DressCode } from './components/dressCode/DressCode'
import { Details } from './components/details/Details'
import { FormBlock } from './components/formBlock/FormBlock'
import { Footer } from './components/footer/Footer'
import { useState } from 'react'


export function SergeyValeria() {
    const [lera, setLera] = useState(true);
    return (
        <div className="wrapper">
        <Header lera={lera}/>
        <MainInfo lera={lera}/>
        <Locationblock lera={lera}/>
        <DressCode lera={lera}/>
        <Details lera={lera}/>
        <FormBlock lera={lera}/>
        <Footer lera={lera}/>
    </div>
    )
}