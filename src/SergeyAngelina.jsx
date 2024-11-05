import './index.css'
import { Header } from './components/header/Header'
import { MainInfo } from './components/mainInfo/MainInfo'
import { Locationblock } from './components/locationBlock/LocationBlock'
import { Details } from './components/details/Details'
import { Footer } from './components/footer/Footer'
import { useState } from 'react'
import { FormBlock } from './components/formBlock/FormBlock'


export function SergeyAngelina() {
    const [gelya, setGelya] = useState(true);
    return (
        <div className="wrapper">
        <Header gelya={gelya}/>
        <MainInfo gelya={gelya}/>
        <Locationblock gelya={gelya}/>
        <div style={{display: 'block', flexDirection: 'row-reverse', justifyContent: 'center'}}>
        <Details gelya={gelya}/>
        <FormBlock gelya={gelya}/>
        </div>
       
        <Footer gelya={gelya}/>
    </div>
    )
}