import tableMes from './tableMes'

const range = col => {
    let count = 0;
    for(let i = 0;i< col.length;i++){
        count += col[i];
    }
    return count
}
const colsCount = col=> {
    let count = 0;
    for(let i = 0;i< tableMes.mes.length;i++){
        count += tableMes.mes[i][col];
    }
    return count
}
var AmountCount = tableMes.mes.map((item)=>{  
    let AmountCount = 0;
    AmountCount += item.PAY_AMOUNT;
    AmountCount += item.WITHDRAW_AMOUNT;
    AmountCount += item.RETURN_AMOUNT;
    return AmountCount;
}) 
var NumCount = tableMes.mes.map((item)=>{ 
    let NumCount = 0;    
    NumCount += item.PAY_NUM;
    NumCount += item.WITHDRAW_NUM;
    NumCount += item.RETURN_NUM;
    return NumCount;
}) 
export const Amount = AmountCount;
export const Num  = NumCount;
export const colsCountList = [
    {
    'PAY_AMOUNT_COUNT':colsCount("PAY_AMOUNT"),
    'PAY_NUM_COUNT':colsCount("PAY_NUM"),
    'RETURN_AMOUNT_COUNT':colsCount("RETURN_AMOUNT"),
    'RETURN_NUM_COUNT':colsCount("RETURN_NUM"),
    'WITHDRAW_AMOUNT_COUNT':colsCount("WITHDRAW_AMOUNT"),
    'WITHDRAW_NUM_COUNT':colsCount("WITHDRAW_NUM"),
    'COLS_CONT_NUM':range(AmountCount),
    'COLS_CONT_AMOUNT':range(Num)
}]
export const showTableName = [
    'MERCHANT_NAME','MERCHANT_CUST_ID','MERCHANT_CODE','PAY_AMOUNT','PAY_NUM','RETURN_AMOUNT','RETURN_NUM','WITHDRAW_AMOUNT','WITHDRAW_NUM',
]
export const ColsCountListName = [
    'PAY_AMOUNT_COUNT','PAY_NUM_COUNT','RETURN_AMOUNT_COUNT','RETURN_NUM_COUNT','WITHDRAW_AMOUNT_COUNT','WITHDRAW_NUM_COUNT','COLS_CONT_NUM','COLS_CONT_AMOUNT'
]

