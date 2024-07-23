import style from './Modal.module.css'
import {Button} from "../buttons/Button.tsx";

export function Modal({condition, setCondition}) {
    return(
        <div className={condition ? style.modal__wrapper + " " + style.active  : style.modal__wrapper  }>
            <div className={style.modal__content}>
                <h3>Do you really want to finish Quizabro?</h3>
                <div className={style.modal__btns}>
                    <Button click={setCondition} title="Cancel"/>
                    <Button title="Confirm" route={'/'}/>
                </div>
            </div>
        </div>
    )
}