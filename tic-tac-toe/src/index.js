import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'


class Cell extends React.Component{
  render(){
    let text = ''
    if (this.props.mark===0){
      text = 'O';
    }else if (this.props.mark===1){
      text = 'X'
    }
    return <div className='Cell' onClick={this.Click.bind(this)}>{text}</div>
  }
  Click(){
    this.props.update(this.props.index);
  }
}


class Board extends React.Component{
  constructor(props){
    super(props);
    this.state={
      circle:0,
      marks:[-1,-1,-1,-1,-1,-1,-1,-1,-1],
      winner:null
    }
  }
  render(){
    let cells = [];
    for (let i=0;i<9;i++){
      cells.push(<Cell mark={this.state.marks[i]} index={i} update={this.Update.bind(this)}/>);
    }
    return <div className='Board'>{cells}</div>
  }
  Update(index){
    this.setState((preState)=> {
      let currentMark = preState.marks;
      if (preState.winner===null && currentMark[index]===-1){
        currentMark[index]=preState.circle%2;
      }
      // let winner = this.CheckWinner(preState.currentMark);
      return {
        circle:preState.circle+1,
        marks:currentMark,
        winner:null
      }
    })
  }
  CheckWinner(mark){
    for (let y=0;y<3;y++){
      if (mark[3*y]!==-1 && mark[3*y]===mark[3*y+1] && mark[3*y]===mark[3*y+2]){
        return {side: mark[3*y], startIndex: 3*y, endIndex: 3*y+2}
      }
    }
    for (let x=0;x<3;x++){
      if (mark[x]!==-1 && mark[x]===mark[3+x] && mark[x]===mark[x+6]){
        return {side: mark[x], startIndex: x, endIndex: x+6}
      }
    }
    if(mark[0]!==-1&&mark[0]===mark[4]&&mark[4]===mark[8]){
      return {side:mark[0], startIndex:0, endIndex:8};
    }else if(mark[2]!==-1&&mark[2]===mark[4]&&mark[4]===mark[6]){
      return {side:mark[2], startIndex:2, endIndex:6};
    }
    // 目前還沒有贏家
    return null;


  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Board/>);


