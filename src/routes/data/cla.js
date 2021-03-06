export default {
    title:"电子银行支付商户交易分类统计表",
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
            name:"cardtype",
            value:0,
            typ:"radio",
            label:"卡种类:",
            selectType:'card_type',
            child:['全部','借记卡','贷记卡']
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