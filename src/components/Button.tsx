import React, {FC} from 'react'

import '../assets/css/Button.css'



export type ButtonClickHandler = (text: string) => void


type Props = {
    type?: string,                    // el ? significa que puede ser un dato indefinido (no requerido)
    text: string,
    clickHandler: ButtonClickHandler
}
const Button: FC<Props> = ({type, text, clickHandler}) => {
    return (
        <button className={type} onClick={() =>  clickHandler(text)}>
            <span>{text}</span>
        </button>
    )
}



export default Button