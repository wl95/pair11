export default {
  deal:{
    reportName:'deal',
    title:'电子银行支付交易统计表',
    search:[
      {
        text:'机构编码/机构名称:',
        requestType:'',
        selectType:'',
        selectKey:'',
        itemName:'',
        type:1,
        method:'get'
      },
      {
        text:'产品类型:',
        requestType:'',       
        selectType:'',
        selectKey:'',
        itemKey:'',
        itemName:'',
        type:2,
        method:'get',
      },
      {
        text:'机构属性:',
        requestType:'',       
        selectType:'',
        selectKey:'',
        itemKey:'',
        itemName:'',
        type:4,
        method:'get',
      },
      {
        text:'卡种类:',
        requestType:'',       
        selectType:'',
        selectKey:'',
        itemKey:'',
        itemName:'',
        type:4,
        method:'get',
      },
      {
        text:'周期类型:',
        requestType:'',       
        selectType:'',
        selectKey:'',
        itemKey:'',
        itemName:'',
        type:4,
        method:'get',
      },
      {
        text:'选择年份:',
        requestType:'',       
        selectType:'',
        selectKey:'',
        itemKey:'',
        itemName:'',
        type:3,
        method:'get',
      }
    ],
    tableResult:{
      columns:[
        {
          title:'',
          children:[
            {
              title:'',
              children:[
                {
                  title:'机构代码',
                  dataIndex:'',
                  key:''
                }
              ]
            }
          ]
        },
        {
          title:'',
          children:[
            {
              title:'',
              children:[
                {
                  title:'机构名称',
                  dataIndex:'',
                  key:''
                }
              ]
            }
          ]
        },
        {
          title:'企业B2B含招投标平台',
          children:[
            {
              title:'支付交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            },
            {
              title:'退货交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            }
          ]
        },
        {
          title:'直连快捷',
          children:[
            {
              title:'支付交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            },
            {
              title:'提现交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            },
            {
              title:'退货交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            }
          ]
        },
        {
          title:'卡通',
          children:[
            {
              title:'支付交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            },
            {
              title:'提现交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            },
            {
              title:'退货交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            }
          ]
        },
        {
          title:'协议支付',
          children:[
            {
              title:'支付交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            },
            {
              title:'提现交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            },
            {
              title:'退货交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            }
          ]
        },
        {
          title:'网联快捷',
          children:[
            {
              title:'支付交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            },
            {
              title:'提现交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            },
            {
              title:'退货交易',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            }
          ]
        },
        {
          title:'',
          children:[
            {
              title:'合计',
              children:[
                {
                  title:'本期笔数',
                  dataIndex:'',
                  key:''
                },
                {
                  title:'本期金额',
                  dataIndex:'',
                  key:''
                }
              ]
            }
          ]
        }
      ]
    }
  },
  classifyDeal:{
    reportName:'claDeal',
    title:'电子银行支付商户交易分类统计表',
    search:[
      {
        text:'机构编码/机构名称:',
        requestType:'',
        selectType:'',
        selectKey:'',
        itemName:'',
        type:1,
        method:'get'
      },
      {
        text:'产品类型:',
        requestType:'',
        selectType:'',
        selectKey:'',
        itemKey:'',
        itemName:'',
        type:2,
        method:'get',
      },
      {
        text:'卡种类:',
        requestType:'',     
        selectType:'',
        selectKey:'',
        itemKey:'',
        itemName:'',
        type:4,
        method:'get',
      },
      {
        text:'周期类型:',
        requestType:'',
        selectType:'',
        selectKey:'',
        itemKey:'',
        itemName:'',
        type:4,
        method:'get',
      },
      {
        text:'选择年份:',
        requestType:'',       
        selectType:'',
        selectKey:'',
        itemKey:'',
        itemName:'',
        type:3,
        method:'get',
      }
    ],
    tableResult:{
      columns:[
        {
          title:'',
          children:[
            {
              title:'商户名称',
              dataIndex:'',
              key:''
            }
          ]
        },
        {
          title:'',
          children:[
            {
              title:'客户编码',
              dataIndex:'',
              key:''
            }
          ]
        },
        {
          title:'',
          children:[
            {
              title:'商户编码',
              dataIndex:'',
              key:''
            }
          ]
        },
        {
          title:'支付交易',
          children:[
            {
              title:'本期笔数',
              dataIndex:'',
              key:''
            },
            {
              title:'本期金额',
              dataIndex:'',
              key:''
            }
          ]
        },
        {
          title:'退货交易',
          children:[
            {
              title:'本期笔数',
              dataIndex:'',
              key:''
            },
            {
              title:'本期金额',
              dataIndex:'',
              key:''
            }
          ]
        },
        {
          title:'提现交易',
          children:[
            {
              title:'本期笔数',
              dataIndex:'',
              key:''
            },
            {
              title:'本期金额',
              dataIndex:'',
              key:''
            }
          ]
        },
        {
          title:'合计',
          children:[
            {
              title:'本期笔数',
              dataIndex:'',
              key:''
            },
            {
              title:'本期金额',
              dataIndex:'',
              key:''
            }
          ]
        }
      ]
    }
  },
  merchantServiceCharge:{
    reportName:'merServCharge',
    title:'电子银行支付手续费商户收入统计表',
    search:[
      {
        text:''
      }
    ]
  },
  organizationServiceCharge:{
    reportName:'orgServCharge',
    title:'电子银行支付手续费机构收入统计表',
    search:[

    ],
    tableResult:{
      
    }
  }
}