/* eslint no-eval: 0*/
import React, {useState, FC} from 'react'

import './App.css';
import Result from './components/Result'
import Numbers from './components/Numbers'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import words from 'lodash.words'

const App: FC = () => {


  const [stack, setStack]= useState("")


 const items = words(stack, /[^-^+^*^/]+/g )



 

 const val = items.length > 0 ? items[items.length-1] : "0"



  return(

    <div className='react-calculator'>

     <Result value={val} />

      <Numbers onClickNumber={number => {
      
      setStack(stack + number) 
        }}/>

      <Functions onContentClear={() => {
        
        setStack('')}}

        onDelete={() => {
          if(stack.length > 0){

            const newStack = stack.substring(0, stack.length - 1)
            
            setStack(newStack)
          }
        
        }
        }/>

      <MathOperations onClickOperation={operation => {
     
        setStack(`${stack}${operation}`)
      }}

        onClickEqual={equal => {
       
        setStack(eval(stack))
        }}/>
   
  </div>
  
  
  )


  
}

export default App
 

 


    


   