import { useState } from 'react'
import { InputText } from '../UI/inputText/InputText';
import { InputRadio } from '../UI/inputRadio/InputRadio';
import style from './Form.module.css'
import { InputButton } from '../UI/InputButton/InputButton';
import { MyModal } from '../myModal/MyModal';
import { useForm } from '../../hooks/useForm';


export function Form() {
   
    const [form, setForm] = useState({
        name: '',
        go: false,
        notGo: false,
        doNotKnow: false,
        haveCar: false,
        notHaveCar: false,
    })

    const [inputError, setInputError] = useState(false);
    const [isComingError, setIsComingError] = useState(false);
    const [isTransferError, setIsTransferError] = useState(false);

    const [modal, setModal] = useState(false);

    return (
        <section>
            <form onSubmit={useForm(form, setForm, setIsComingError, setInputError,  setIsTransferError, setModal)} className={style.formBox}>
            <p className={style.formText}>Как Вас зовут</p>
            <InputText
                error={inputError}
                value={form.name}
                onChange={(e) => {
                    setForm({...form, name: e.target.value})
                    setInputError(false)
                }}
                name="имя гостя"
                type="text"
                placeholder={inputError ? 'ВЫ НЕ ВВЕЛИ ИМЯ И ФАМИЛИЮ!' : 'Ваше имя и фамилия'}
            />
            <p className={style.formText}>Подтвердите присутствие</p>
            <div>
                <label className={style.label} htmlFor="go">
                <InputRadio
                    value={form.go}
                    onChange={() => {
                        setForm({ ...form, go: 'приду', notGo: false, doNotKnow:false })
                        setIsComingError(false)
                    }}
                    type="radio"
                    name="присутствие"
                    id="go"
                    checked={form.go}
                />
                <div className={isComingError ?  [style.fakeCircle, style.error].join(' ') : style.fakeCircle}>
                        <div className={form.go ? style.fakeCircle__on : ''}></div>
                    </div>
                    <p>Приду</p>
                </label>
            </div>
            <div>
                <label className={style.label} htmlFor="not_go">
                <InputRadio
                    value={form.notGo}
                    onChange={() => {
                        setForm({ ...form, go: false, doNotKnow: false, notGo: 'не смогу прийти' })
                        setIsComingError(false)
                    }}
                    type="radio"
                    name="присутствие"
                    id="not_go"
                    checked={form.notGo}
                />
                <div className={isComingError ?  [style.fakeCircle, style.error].join(' ') : style.fakeCircle}>
                        <div className={form.notGo ? style.fakeCircle__on : ''}></div>
                    </div>
                    <p>Не смогу прийти</p>
                    </label>
            </div>
            <div>
                <label className={style.label} htmlFor="not_know">
                <InputRadio
                    value={form.doNotKnow}
                    onChange={() => {
                        setForm({ ...form, go: false, notGo: false, doNotKnow: 'Затрудняюсь ответить' })
                        setIsComingError(false)
                    }}
                    type="radio"
                    name="присутствие"
                    id="not_know"
                    checked={form.doNotKnow}
                />
                <div className={isComingError ?  [style.fakeCircle, style.error].join(' ') : style.fakeCircle}>
                        <div className={form.doNotKnow ? style.fakeCircle__on : ''}></div>
                    </div>
                    <p>Затрудняюсь ответить</p>
                    </label>
            </div>
            <p className={style.formText}>Понадобиться ли Вам обратный трансфер</p>
            <div>
                <label className={style.label} htmlFor="have_car">
                    <InputRadio
                        value={form.haveCar}
                        onChange={() => {
                            setForm({ ...form, haveCar: 'не нужен', notHaveCar: false })
                            setIsTransferError(false)
                        }}
                        type="radio"
                        name="трансфер"
                        id="have_car"
                        checked={form.haveCar}
                    />
                    <div className={isTransferError ?  [style.fakeCircle, style.error].join(' ') : style.fakeCircle}>
                        <div className={form.haveCar ? style.fakeCircle__on : ''}></div>
                    </div>
                    <p>Не нужен</p>
                </label>
            </div>
            <div>
                <label className={style.label} htmlFor="not_car">
                    <InputRadio
                        value={form.notHaveCar}
                        onChange={() => {
                            setForm({ ...form, haveCar: false, notHaveCar: 'нужен' })
                            setIsTransferError(false)
                        }}
                        type="radio"
                        name="трансфер"
                        id="not_car"
                        checked={form.notHaveCar}
                    />
                    <div className={isTransferError ?  [style.fakeCircle, style.error].join(' ') : style.fakeCircle}>
                        <div className={form.notHaveCar ? style.fakeCircle__on : ''}></div>
                    </div>
                    <p>Нужен</p>
                </label>
            </div>
            {modal && <MyModal modal={modal} setModal={setModal}/>}
            <InputButton type='submit'>Отправить</InputButton>
        </form>
        </section>
    )
}