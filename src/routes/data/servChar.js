export default {
  title:"电子银行支付手续费收入统计表",
  list1:[
    {
      name:"name",
      value:"请输入",
      typ:"input",
      selectType:'organ_id',
      label:"机构编码/机构名称:"
    },
    {
      name:'selname',
      typ:'select',
      label:'产品类型:',
      value:'全部',
      selectType:'product_code',
      child:[

      ]
    },
    {
      name:'orgprop',
      typ:'radio',
      label:'机构属性:',
      selectType:'organ_mode',
      value:0,
      child:['全部','自营','代理']
    },
    {   
      name:"cardtype",
      value:0,
      typ:"radio",
      label:"卡种类:",
      selectType:'card_type',
      child:['全部','借记卡','贷记卡']
    },
    {
      name:'showtype',
      value:0,
      typ:'radio',
      label:'展示类型:',
      child:['按商户展示','按机构展示']
    },
    {
      name:'trans',
      value:0,
      typ:'radio',
      label:'交易渠道:',
      selectType:'channel',
      child:['全部','直连','网联']
    },
    {   
      name:"period",
      value:0,
      typ:"radio",
      label:"周期类型:",
      selectType:'date_level',
      child:['日','月','季','年','半年']
    },
    {
      name:'statistic',
      value:0,
      typ:'radio',
      label:'统计方式:',
      selectType:'show_type',
      child:['汇总','明细']
    },
    {
      name:'halfyear',
      value:0,
      typ:'radio',
      label:'选择半年:',
      selectType:'date_num',
      child:['上半年','下半年']
    },
    {
      name:'qtr',
      value:0,
      typ:'radio',
      label:'选择季度:',
      selectType:'date_num',
      child:['第一季度','第二季度','第三季度','第四季度']
    },
    {
      name: "Date",   
      value:new Date(),
      typ:"Date",
      label:"选择日期:"
  }
  ]
}


