import React,{Component} from 'react';
class Radios extends Component{
  constructor(props){
    super(props)
    this.state={
      value:''
    }
    this.click = this.click.bind(this);
  }

  click(){
    this.props.onClick(this.props.id)
  }

  render(){
    let {idName, value} = this.props
    return  <input type="radio" name={idName} value={value} onClick={this.click}/>
  }
}

export default Radios