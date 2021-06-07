import React, { useState } from 'react'
import './App.css'


let itemArray = new Array(9).fill("empty")

const App=()=>{
  const [iscross,setisCross] = useState(false)
  const [winMessage,setWinMessage] =useState('')
  const restart=()=>{
    setisCross(false)
    setWinMessage('')
    for(let i=0;i<itemArray.length;i++){
      itemArray[i] = "empty"
    }
  }
  const checkWinner=()=>{
    if(itemArray[0] !=="empty" && itemArray[0]===itemArray[1] && itemArray[1] ===itemArray[2]){
      setWinMessage(`${itemArray[0]} has won`)
      alert(`${itemArray[0]} has won`)
    }
    if(itemArray[3] !=="empty" && itemArray[3]===itemArray[4] && itemArray[4] ===itemArray[5]){
      setWinMessage(`${itemArray[3]} has won`)
      alert(`${itemArray[3]} has won`)
    }
    if(itemArray[6] !=="empty" && itemArray[6]===itemArray[7] && itemArray[7] ===itemArray[8]){
      setWinMessage(`${itemArray[6]} has won`)
      alert(`${itemArray[6]} has won`)
    }
    if(itemArray[0] !=="empty" && itemArray[0]===itemArray[4] && itemArray[4] ===itemArray[8]){
      setWinMessage(`${itemArray[0]} has won`)
      alert(`${itemArray[0]} has won`)
    }
    if(itemArray[2] !=="empty" && itemArray[2]===itemArray[4] && itemArray[4] ===itemArray[6]){
      setWinMessage(`${itemArray[2]} has won`)
      alert(`${itemArray[2]} has won`)
    }
    if(itemArray[0] !=="empty" && itemArray[3]===itemArray[0] && itemArray[3] ===itemArray[6]){
      setWinMessage(`${itemArray[0]} has won`)
      alert(`${itemArray[0]} has won`)
    }
    if(itemArray[1] !=="empty" && itemArray[1]===itemArray[4] && itemArray[4] ===itemArray[7]){
      setWinMessage(`${itemArray[1]} has won`)
      alert(`${itemArray[1]} has won`)
    }
    if(itemArray[2] !=="empty" && itemArray[2]===itemArray[5] && itemArray[5] ===itemArray[8]){
      setWinMessage(`${itemArray[2]} has won`)
      alert(`${itemArray[2]} has won`)
    }
    let totallength=0
    for(let i=0;i<itemArray.length;i++){
      if (itemArray[i] !=="empty"){
        totallength++;
      }
    }
    if(totallength==9 && !winMessage){
      alert("Match is drawn")
    }
  }
  const handleClick=(index)=>{
    if(!winMessage){
      if(itemArray[index]==="empty"){
        itemArray[index] = iscross?" X ":" O "
        setisCross(!iscross)
      }else if(itemArray[index]!=="empty"){
        alert("The field is already being used")
      }
      checkWinner()
    }else{
      alert("The match is alreay over consider replay")
    }

  }
  return(
    <div className="app__body">
      <div className="heading">
        Welcome To TIC TAC TOE 
      </div>
      <div className="container">
          {
            itemArray.map((item,index)=>(    
              <div key={index} onClick={()=>handleClick(index)} className="card">{item}</div>
            ))
          }
      </div>
      {
        iscross?"Cross":"Circle"
      } Turn
      <button style={{background:"blue",padding:"10px",borderRadius:"5px",borderWidth:"1px",borderColor:"green"}}
      onClick={restart}

      >Restart</button>
    </div>
  )
}
export default App;