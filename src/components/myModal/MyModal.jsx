import { DescriptionText } from '../descriptionText/DescriptionText'
import { MyButton } from '../UI/myButton/MyButton'
import styles from './MyModal.module.css'
import { useState } from 'react'


export function MyModal(props) {
    const [centerText, setCenterText] = useState(true)

    return (
        <div className={styles.gaga}>
            <div className={styles.container}>
                <div className={styles.myModal}>
                    <div className={styles.myModalContent}>
                        <DescriptionText centerText={centerText} >Спасибо! Почтовые голуби отправлены...</DescriptionText>
                        <MyButton onClick={() => props.setModal(false)}>закрыть окошко</MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}