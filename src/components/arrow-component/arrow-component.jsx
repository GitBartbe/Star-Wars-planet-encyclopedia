import { useState } from "react"
import ArrowOpen from '../../assets/arrow-open.svg'
import ArrowClosed from '../../assets/arrow-closed.svg'
import './arrow-component.styles.scss'



const ArrowComponent = ({isOpen, chageOpen}) => {

   
  return (
    <div className="arrow-container"  onClick={()=> chageOpen()} > {isOpen ? <img  src={ArrowOpen}/> : <img  src={ArrowClosed}/> }  </div>
    
  )
}

export default ArrowComponent