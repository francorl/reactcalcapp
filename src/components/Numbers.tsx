import React, {FC}from 'react'


import Button, {ButtonClickHandler} from './Button'


// DRY: Don't repeat yourself
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3,0]

const renderButtons = (onClickNumber: ButtonClickHandler) => {
  
    const renderButton = (number: number) => (
        <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
    )
    return numbers.map(renderButton)
}

type Props = {
    onClickNumber: ButtonClickHandler
}

const Numbers: FC<Props> = ({ onClickNumber }) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

/////////////////////////////////////////////////////////// Sin Array ///////////////////////////////
/*
const Numbers = ({onClickNumber}) => (
    //section.numbers>Button*10[text="$" clickHandler={‌{onClickNumber}}]
    <section className="numbers">
        <Button  text="1" clickHandler={onClickNumber}/>
        <Button  text="2" clickHandler={onClickNumber}/>
        <Button  text="3" clickHandler={onClickNumber}/>
        <Button  text="4" clickHandler={onClickNumber}/>
        <Button  text="5" clickHandler={onClickNumber}/>
        <Button  text="6" clickHandler={onClickNumber}/>
        <Button  text="7" clickHandler={onClickNumber}/>
        <Button  text="8" clickHandler={onClickNumber}/>
        <Button  text="9" clickHandler={onClickNumber}/>
        <Button  text="0" clickHandler={onClickNumber}/>
    </section>


)
*/

export default Numbers