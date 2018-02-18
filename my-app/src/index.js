import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Button extends React.Component {
    render(){
      return(
        <button class="square" onClick={()=>this.props.func()}>
        {this.props.value}
        </button>
      );
    }
}
class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: Array(10).fill(null),
      xIsNext: true,
    };
  }
click(i){
let value = this.state.value.slice();
let xIsNext =this.state.xIsNext;
if(value[i]===null)
{  value[i] = xIsNext ? "X" : 'O';
   xIsNext = !xIsNext;
}
  this.setState({value, xIsNext});

}
  render(){
    let winner = calculateWinner(this.state.value);
    if(winner){
    var status = "winner is "+winner;
  }

    return(
      <div>
      <h6>{status}</h6>
      <div class="table"><Button value={this.state.value[0]} func={()=>{this.click(0)}}/><Button value={this.state.value[1]} func={()=>{this.click(1)}}/><Button value={this.state.value[2]} func={()=>{this.click(2)}}/></div>
      <div class="table"><Button value={this.state.value[3]} func={()=>{this.click(3)}}/><Button value={this.state.value[4]} func={()=>{this.click(4)}}/><Button value={this.state.value[5]} func={()=>{this.click(5)}}/></div>
      <div class="table"><Button value={this.state.value[6]} func={()=>{this.click(6)}}/><Button value={this.state.value[7]} func={()=>{this.click(7)}}/><Button value={this.state.value[8]} func={()=>{this.click(8)}}/></div>
      </div>
    );
  }
}

ReactDOM.render(<Table />, document.getElementById('root'));
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}