import React,{Component, Fragment} from 'react';
class FormItem extends Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  render(){
    let {getFieldDecorator, formItem } = this.props
    // console.log(formItem)
    return <Fragment>
    {
      formItem && formItem.map(item => {
      return <li key={item.code}>
              <span>{item.label}</span>
              <div>
                {getFieldDecorator(item.code, {
                  initialValue:item.initialValue,
                  rules:item.rules,
                  normalize:item.normalize,
                })(item.inElemet)}
              </div>
      </li>
      })
    }
    </Fragment>
  }
}

export default FormItem