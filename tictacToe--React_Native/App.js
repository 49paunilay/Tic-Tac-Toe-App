import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'

import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1,H3,Button, Title,
} from 'native-base'
import Icons from './Components/Icons'
import Snackbar from 'react-native-snackbar'

const itemArray = new Array(9).fill('empty')

const App=()=>{
  const [iscross,setIscross] = useState(false)
  const [winMessage,setWinMessage] = useState('')

  const changeItem=(itemnumber)=>{
    if(winMessage){
      return Snackbar.show(
        {
          text:winMessage,
          backgroundColor:"#000",
          textColor:"white"
        }
      )
    }
    if(itemArray[itemnumber]==="empty"){
      itemArray[itemnumber] = iscross?'cross':"circle"
      setIscross(!iscross)
    }else{
      Snackbar.show({
        text:"Already filled ",
        backgroundColor:"black",
        textColor:"white"
      })
    }
    checkIsWinner()
  }
  const checkDraw = ()=>{
    let number=0;
    for(i=0;i<itemArray.length;i++){
      if(itemArray[i]!=="empty"){
        number+=1;
      }
    }
    if((number==itemArray.length)&& !winMessage){
      setWinMessage("Match is draw")
    }
  }
  const reloadGame = ()=>{
    setIscross(false)
    setWinMessage('')
    itemArray.fill('empty',0,9)

  }
  const checkIsWinner=()=>{
    if(itemArray[0]!=="empty" && itemArray[0]===itemArray[1] && itemArray[1]==itemArray[2]){
      setWinMessage(`${itemArray[0]} has won`)
    }
    else if(itemArray[3]!=="empty" && itemArray[3]===itemArray[4] && itemArray[4]==itemArray[5]){
      setWinMessage(`${itemArray[3]} has won`)
    }
    else if(itemArray[6]!=="empty" && itemArray[6]===itemArray[7] && itemArray[7]==itemArray[8]){
      setWinMessage(`${itemArray[6]} has won`)
    }
    else if(itemArray[0]!=="empty" && itemArray[0]===itemArray[3] && itemArray[3]==itemArray[6]){
      setWinMessage(`${itemArray[0]} has won`)
    }
    else if(itemArray[1]!=="empty" && itemArray[1]===itemArray[4] && itemArray[4]==itemArray[7]){
      setWinMessage(`${itemArray[6]} has won`)
    }
    else if(itemArray[2]!=="empty" && itemArray[2]===itemArray[5] && itemArray[5]==itemArray[8]){
      setWinMessage(`${itemArray[6]} has won`)
    }
    else if(itemArray[0]!=="empty" && itemArray[0]===itemArray[4] && itemArray[4]==itemArray[8]){
      setWinMessage(`${itemArray[0]} has won`)
    }
    else if(itemArray[2]!=="empty" && itemArray[2]===itemArray[4] && itemArray[4]==itemArray[6]){
      setWinMessage(`${itemArray[2]} has won`)
    }
    checkDraw();
  }

  return(
    <Container style={{backgroundColor:"#333944",padding:5}}>
      <Header>
        <Body>
          <Title>
          TIC TAC TOE
          </Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
            {
              itemArray.map((item,index)=>(
                <TouchableOpacity
                style={styles.box}
                key={index}
                onPress={()=>changeItem(index)}
                >
                  <Card
                  style={styles.card}
                  >
                    <Icons name={item}/>
                  </Card>
                </TouchableOpacity>
              ))
            }
        </View>
        {
          winMessage?(
            <View>
              <H1 style={styles.message}>
                {winMessage}
              </H1>
              <Button

              onPress={reloadGame}
              primary
              block
              rounded
              >
                <Text>Reload Game</Text>
              </Button>
            </View>
          ):(
            <View>
              <H3 style={styles.message}>
                {
                  iscross? "Cross" : "Circle"
                } turn
              </H3>
            </View>
          )
        }
      </Content>
      
    </Container>
  )
}
export default App;

styles = StyleSheet.create({
  grid:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20,
  },
  box:{
    width:"33%",
    marginBottom:6,

  },
  card:{
    height:80,
    justifyContent:'center',
    alignItems:'center'
  },
  message:{
    textAlign:'center',
    textTransform:'uppercase',
    color:"#FFFFFF",
    marginTop:20,
    backgroundColor:"#4652B3",
    paddingVertical:10,
    paddingVertical:10,
    marginVertical:10
  }
})