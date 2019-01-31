import React,{Component} from 'react';
import  { createForm } from 'rc-form';
import MonthDate from '../../component/calendar';
import FormItem from '../../component/formItem';
import '../deal.css'

class TiedCard extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(){
    let { form } = this.props
    let { validateFields } = form
    validateFields((error, value) => {
      console.log(value)
      if(error){
        console.log(error);
        return
      }
      console.log(error, value);
    });
  }

  render (){
    let { form } = this.props
    let { getFieldDecorator } = form
    let formItemList = [
      {
        code:'organ_id',
        label:'机构编码/机构名称：',
        initialValue:'',
        rules:[
          {
            required:true,
            message:'请输入机构编码'
          }
        ],
        inElemet:<input />
      },
      {
        code:'proType',
        label:'产品类型：',
        initialValue:'',
        rules:[
          {
            required:true,
            message:'全部'
          }
        ],
        inElemet:<select>
                  <option value="">全部</option>
                  <option value="asd">是</option>
                  <option value="qwe">否</option>
                 </select>
      },
      {
        code:'radio',
        label:'产品类型：',
        initialValue:'',
        rules:[
          {
            required:true,
            message:''
          }
        ],
        inElemet: <label>
                    <input key="1" value="1" name="jgsx" type="radio" />全部
                    <input key="2" value="2" name="jgsx" type="radio" />微支付
                    <input key="3" value="3" name="jgsx" type="radio" />快捷支付
                    <input key="4" value="4" name="jgsx" type="radio" />协议支付
                  </label>
      },
      {
        code:'radio1',
        label:'机构属性：',
        initialValue:'',
        rules:[
          {
            required:true,
            message:''
          }
        ],
        inElemet: <label>
                    <input key="1" value="1" name="asd" type="radio" />全部
                    <input key="2" value="2" name="asd" type="radio" />自营
                    <input key="3" value="3" name="asd" type="radio" />代理
                  </label>
      },
      {
        code:'radio2',
        label:'交易渠道：',
        initialValue:'',
        rules:[
          {
            required:true,
            message:''
          }
        ],
        inElemet: <label>
                    <input key="1" value="1" name="asd" type="radio" />全部
                    <input key="2" value="2" name="asd" type="radio" />直连
                    <input key="3" value="3" name="asd" type="radio" />网联
                  </label>
      },
      {
        code:'radio3',
        label:'统计方式：',
        initialValue:'',
        rules:[
          {
            required:true,
            message:''
          }
        ],
        inElemet: <label>
                    <input key="1" value="1" name="asd" type="radio" />汇总
                    <input key="2" value="2" name="asd" type="radio" />明细
                  </label>
      },
      {
        code:'radio4',
        label:'周期类型：',
        initialValue:'',
        rules:[
          {
            required:true,
            message:''
          }
        ],
        inElemet: <label>
                    <input key="1" value="1" name="asd" type="radio" />年
                    <input key="2" value="2" name="asd" type="radio" />半年
                    <input key="3" value="3" name="asd" type="radio" />季
                    <input key="4" value="4" name="asd" type="radio" />月
                    <input key="5" value="5" name="asd" type="radio" />日
                  </label>
      }
    ]

    return  <div className="dealComp">
              <h6>电子银行支付客户量统计表</h6>
              <ul>
                <FormItem formItem={formItemList} getFieldDecorator={getFieldDecorator}/>
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
export default createForm()(TiedCard)

/* 
import React, { Component } from 'react'; 
export default class extends Component { 
  static defaultProps = { 
    year: [{ title: 2019 }, { title: 2018 }, { title: 2017 }, { title: 2016 }], 
    middleyear: false, 
    quarter: false }    
    state = { ...this.props }    
    componentWillReceiveProps(nextProps) { 
      this.setState({ ...this.state, ...nextProps }) 
    }
    render() { 
      let { year, middleyear, quarter } = this.state; 
      return (
      <div>                
        <form>                    
          <div>                        
            <label>周期类型</label>                        
            <div>                            
              <input type="radio" name="time" onChange={this.opens} />年                            
              <input type="radio" name="time" onChange={() => { this.opens('middleyear') }} />半年 
              <input type="radio" name="time" onChange={() => { this.opens('quarter') }} />季       
              <input type="radio" name="time" onChange={this.opens} />月                           
              <input type="radio" name="time" onChange={this.opens} />日                        
            </div>                    
          </div>                    
          <div>                        
            <label>选择年份</label>                        
              <select>                            
                {year.map((item, i) => <option key={i}>{item.title}</option>)}                        
              </select>                   
            </div>                    
            <div style={{ display: middleyear ? "block" : "none" }}>                       
              <label>选择半年</label>                       
              <input type="radio" name="year" />上半年                        
              <input type="radio" name="year" />下半年                    
            </div>                    
            <div style={{ display: quarter ? "block" : "none" }}>                        
              <label>选择季度</label>                        
              <input type="radio" name="quarter" />第一季度                        
              <input type="radio" name="quarter" />第二季度                        
              <input type="radio" name="quarter" />第三季度                        
              <input type="radio" name="quarter" />第四季度                    
            </div>                
          </form>            
        </div>
        ) 
      } 
      opens = (title) => { let obj = { middleyear: false, quarter: false }; 
      if (title) { obj[title] = true; } this.setState(obj); } } */