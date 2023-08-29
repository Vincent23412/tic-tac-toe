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
    this.setState((currentState)=>{
      
    })
  }
}







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Board/>);