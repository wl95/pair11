import React, { Component } from 'react';
import {Route, NavLink, BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
import DealComp from './routes/deal/deal.js'
import ClaDeal from './routes/claDeal/claDeal.js'
import ServCharge from './routes/serCharge/serCharg.js'
import Tieds from './routes/tiedCard/tieds'
import TableList from './routes/tableone/TableList'
import tableMes from './routes/tableone/tableMes'

class App extends Component {
  constructor(){
    super()
    this.state = {
      isShow:true
    }
    this.click = this.click.bind(this)
  }
  click () {
    this.setState({
      isShow:!this.state.isShow
    })
  }

  render() {
    //console.log(window.location)
    return (
      <BrowserRouter>
        <div className="App">
          <h5 className="title">第三方支付管理控制台</h5>
          <div className="left">
            <div>
              <p><span  className="isDis" onClick={this.click}>-</span>电子银行报表</p>
              <div className="zdcd" style={{display:this.state.isShow===true?'block':'none'}}>
                <NavLink to="/deal">电子银行支付交易统计表</NavLink>
                <NavLink to="/claDeal">电子银行支付商户交易分类统计表</NavLink>
                <NavLink to="/servCharge">电子银行支付手续费收入统计表</NavLink>
                <NavLink to="/tiedCard">电子银行支付绑卡客户量统计表</NavLink>
              </div>
            </div>
          </div>
          <div className="right">
            <Switch>
              <Route path="/deal" component={DealComp} />
              <Route path="/dealtable" component={TableList} tableMes={tableMes} />
              <Route path="/claDeal" component={ClaDeal} />
              <Route path="/servCharge" component={ServCharge} />
              <Route path="/tiedCard" component={Tieds} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
