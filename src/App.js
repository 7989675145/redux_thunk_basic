import React from 'react'
import {connect} from 'react-redux';
import { incplayeroneown,incplayerone,decplayerone, incplayertwo,decplayertwo } from './Actions';
const App = ({playerone,playertwo,incplayeroneown,incplayerone,decplayerone,incplayertwo,decplayertwo}) => {
  return (
    <div>
      <center>
        <h3>PlayerOne Details</h3>
        <p>Name : {playerone.name} | {' '} Score : {playerone.score}</p><br/>
        <button onClick={()=>incplayeroneown(5)}>Increment</button>
        <button onClick={()=>decplayerone()}>Decrement</button>
         <hr/>
        <h3>PlayerTwo Details</h3>
        <p>Name : {playertwo.name} | {' '} Score : {playertwo.score}</p><br/>
        <button onClick={()=>incplayertwo()}>Increment</button>
        <button onClick={()=>decplayertwo()}>Decrement</button>
      </center>
    </div>
  )
}

const mapStateToProps = state =>({
  playerone : state.playerone,
  playertwo : state.playertwo
})
export default connect(mapStateToProps,{incplayeroneown,incplayerone,decplayerone,incplayertwo,decplayertwo})(App);