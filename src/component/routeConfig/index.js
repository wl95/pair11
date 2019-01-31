import React,{Component} from 'react';
import SearchComp from '../component/searchComp'

// 路由配置
let router = {
  routers:[
    {title:"电子银行支付交易统计表",path:"/deal",component:SearchComp},
    {title:"电子银行支付商户交易分类统计表",path:"/claDeal",component:SearchComp},
    {title:"电子银行支付手续费收入统计表",path:"/servCharge",component:SearchComp},
    {title:"电子银行支付绑卡客户量统计表",path:"/tiedCard",component:SearchComp}
  ]
}
export default router