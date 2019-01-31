import React,{Component,Fragment} from 'react';
import '../dealComp/dealComp.css'
import Radios from '../radio/radios'
import Datas from '../radio/radioData.js';




/* period_cname = {
  0: '年',
  1: '半年',
} */

class TiedCard extends Component {
  constructor(props){
    super(props);
    this.state = {value: '', period:0, bnShow:'none',jdShow:'none',tjShow:'none'};
    this.disclick = this.disclick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  disclick(sd){
    console.log(sd);
    if(sd === 'zqbn'){
      this.setState({
        bnShow:'block',jdShow:'none'
      })
    } else if(sd === 'zqj'){
      this.setState({
        jdShow:'block',bnShow:'none'
      })
    } else if(sd === 'jgzs'){
      this.setState({
        jdShow:'nones',bnShow:'none',tjShow:'block'
      })
    } else if(sd === 'sbn' || sd === 'xbn'){
      this.setState({
        bnShow:'block',jdShow:'none'
      })
    }else if(sd === 'yjd' || sd === 'ejd' || sd === 'tjd' || sd === 'sjd'){
      this.setState({
        jdShow:'block',bnShow:'none'
      })
    }else if(sd === 'hz' || sd === 'mx'){
      this.setState({
        tyShow:'block'
      })
    }else if(sd === 'zqn' || sd==='zqy' || sd==='zqr'){
      this.setState({
        jdShow:'none',bnShow:'none'
      })
    }
    this.setState({jdshow:false,bnshow:false})
  }

  onSubmit(e){
    console.log(e.target.value)
  }

  abc(item){
    return(
      <Fragment>
      <span>{item.choName}</span>
      <div>
        {
          item.child.map((citem,index)=>{
            return  <label key={index}>
                      <Radios idName={item.name} value={index} onClick={this.disclick} />
                      {citem.cname}
                    </label>
          })
        }
      </div>
      </Fragment>
    )
  }
  render (){
    // console.log(Datas)
    let {pathname} = this.props.location;
    let path = pathname.split('/')
    let paths = path[1];
    return  <div className="dealComp">
              <h6>{Datas[paths].title}</h6>
              <ul>
                  {
                    Datas[paths].queryData.map((item,index)=>{
                      if(item.name === 'xzbn'){
                        // console.log(item.name)
                        return (
                          <li style={{display:this.state.bnShow}} key={index}>{this.abc(item)}</li>
                        )
                      }else if(item.name === 'xzjd'){
                        return (
                          <li style={{display:this.state.jdShow}} key={index}>{this.abc(item)}</li>
                        )
                      } else if(item.name === 'tj'){
                        return (
                          <li style={{display:this.state.tjShow}} key={index}>{this.abc(item)}</li>
                        )
                      }else{
                        return (
                          <li key={index} >{this.abc(item)}</li>
                        )
                      }
                    })
                  }
              </ul>
              <p>
                <span>
                  <button onClick={this.onSubmit}>提交</button>
                  <button>重置</button>
                </span>
              </p>
            </div>
  }
}
export default TiedCard