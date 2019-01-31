/* global window */
import React,{ Component,Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import {showTableName,Amount,Num,colsCountList,ColsCountListName} from './mesCount'
import tableMes from './tableMes'
import titleName from './titleName'
import './tableone.css'

// console.log(colsCountList)
class TableList extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(window.location)
    }
    titleRender = (typ)=> {
        return(
            <Fragment>
                 <tr className = 'mes_tr'>
                    {titleName.title_name.map((item,index) =>{
                        if(item.typ === typ){
                            return(
                                <th key ={index} colSpan = {item.cols} rowSpan = {item.rows}>{item.name}</th>
                            )
                        }else{
                            return null
                        }
                    })}
                </tr>
            </Fragment>
        )       
    } 
    render(){
       return(
        <div className="tableone">
            <div className="tablediv">
                <NavLink to="/deal">返回</NavLink>
                <h5>电子银行支付商户交易分类统计表</h5>
            </div>
            <table className="table_css" cellPadding = "0" cellSpacing = "0" border = '1'>
                <tbody>   
                    {/* F_Header */}
                    {this.titleRender(1)}
                    {/* S_Header */}
                    {this.titleRender(2)} 
                    {/* Mes */}
                    {tableMes.mes.map((mes,index) => {
                        return(
                            <tr className = 'mes_tr' key = {index}>
                                {showTableName.map((item,index)=>{                                 
                                    return <td key = {index}>{mes[item]}</td>
                                })}
                                <td>{Amount[index]}</td>
                                <td>{Num[index]}</td>
                            </tr>
                        )
                    })}
                    {/* colsCount */}
                    <tr className = 'mes_tr'>
                        <td colSpan = '3'>合计</td>
                        {colsCountList.map((mes) => {
                            return(
                                ColsCountListName.map((item,index)=>{                                 
                                    return <td key = {index}>{mes[item]}</td>
                                })                          
                            )
                    })}
                    </tr>
                </tbody>
            </table>
        </div>
       )
    } 
}
export default TableList;   