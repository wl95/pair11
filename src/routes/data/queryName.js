export default {
    title: "电子银行支付交易统计表",
    filterList: [
        {
            name: "name",
            defaultValue: "",
            type: "input",
            label: "机构编码/机构名称:",
            selectType: 'organ_id',
            requestType: 'OrganId'
        },
        {
            name: "select",
            defaultValue: "Boy",
            type: "select",
            label: "产品类型:",
            selectType: 'product_code',
            requestType: 'ProductCode',
            child: [
                {
                    code: 'Boy',
                    name: '男'
                },
                {
                    code: 'Girl',
                    name: '女'
                }
            ]
        },
        {
            name: "orgprop",
            defaultValue: 'all',
            type: "radio",
            label: "机构属性:",
            selectType: 'organ_mode',
            child: [
                {
                    label: '全部',
                    code: 'all'
                },
                {
                    label: '自营',
                    code: '1'
                },
                {
                    label: '代理',
                    code: '2'
                }
            ]
        },
        {
            name: "cardtype",
            defaultValue: 'all',
            type: "radio",
            label: "卡种类:",
            selectType: 'card_type',
            child: [
                {
                    label: '全部',
                    code: 'all'

                },
                {
                    label: '借记卡',
                    code: '1'
                },
                {
                    label: '贷记卡',
                    code: '2'
                }
            ]
        },
        {
            name: "period",
            defaultValue: '0',
            type: "radio",
            label: "周期类型:",
            selectType: 'date_level',
            child: [
                {
                    label: '年',
                    dateType: 'YYYY',
                    cycleType: 'basicDate',
                    code: '0'
                },
                {
                    label: '半年',
                    dateType: 'YYYY',
                    cycleType: 'halfYear',
                    code: '1'
                },
                {
                    label: '季',
                    dateType: 'YYYY',
                    cycleType: 'quarter',
                    code: '2'
                },
                {
                    label: '月',
                    dateType: 'YYYY-MM',
                    cycleType: 'basicDate',
                    code: '3'
                },
                {
                    label: '日',
                    dateType: 'YYYY-MM-DD',
                    cycleType: 'day',
                    code: '4'
                },
            ]
        },
    ],
    day: [
        {
            name: "Date",
            defaultValue: new Date(),
            type: "Date",
            selectType: ['start_date', 'end_date'],
            label: "选择日期:"
        }
    ],
    basicDate: [
        {
            name: "Date",
            defaultValue: new Date(),
            type: "Date",
            selectType: 'start_date',
            label: "选择日期:"
        }
    ],
    halfYear: [{
        name: 'halfyear',
        defaultValue: '3',
        type: 'radio',
        display: 'none',
        label: '选择半年:',
        selectType: 'date_num',
        child: [
            {
                label: '上半年',
                code: '3'

            },
            {
                label: '下半年',
                code: '4'
            },
        ]
    }, {
        name: "Date",
        defaultValue: new Date(),
        type: "Date",
        selectType: 'start_date',
        label: "选择日期:"
    }],
    quarter: [{
        name: 'qtr',
        defaultValue: '0',
        type: 'radio',
        display: 'none',
        label: '选择季度:',
        selectType: 'date_num',
        child: [
            {
                label: '第一季度',
                code: '0'

            },
            {
                label: '第二季度',
                code: '1'
            },
            {
                label: '第三季度',
                code: '2'

            },
            {
                label: '第四季度',
                code: '3'
            }
        ]
    }, {
        name: "Date",
        defaultValue: new Date(),
        type: "Date",
        selectType: 'start_date',
        label: "选择日期:"
    }],

}