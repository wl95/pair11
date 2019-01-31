import React, { Component, Fragment } from 'react';
import FullYearList from '../YearPicker/fullYearList'
import Calendar from '../calendar'
import './index.less'
import moment from 'moment'
class DateTime extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calendarDate: null
    }
  }

  onChange = (e, key) => {
    this.setState({
      [key]: e
    })
  }

  render() {
    let { dateFormat, getFieldDecorator, setFieldsValue, selectType } = this.props;
    return <Fragment>
      {dateFormat === 'YYYY' && <FullYearList selectType={selectType} setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator} operand={12} defaultValue={moment().format('YYYY')} />}
      {dateFormat === 'YYYY-MM' && <Calendar selectType={selectType} setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator} dateValue={this.state.month || moment()} onChange={e => this.onChange(e, 'month')} dateFormat={dateFormat} />}
      {dateFormat === 'YYYY-MM-DD' && <div className="calendar-days">起始日期：<Calendar selectType={selectType[0]} setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator} dateValue={this.state.stateDays || moment()} onChange={e => this.onChange(e, 'stateDays')} dateFormat={dateFormat} />结束日期：<Calendar selectType={selectType[1]} setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator} dateValue={this.state.endDays || moment()} onChange={e => this.onChange(e, 'endDays')} dateFormat={dateFormat} /></div>}
    </Fragment>
  }
}
export default DateTime