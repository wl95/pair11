/* global window */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import queryName from '../data/queryName.js';
import Lodash from 'lodash'
import { RadioList, SearchInput, SelectList } from '../form_elem.js'
import { createForm } from 'component/rc-form'
import DateTime from 'component/date/dateTime'
import axios from 'axios';

class Deal extends Component {
    constructor(props) {
        super(props);
        let newQueryName = Lodash.cloneDeep(queryName)
        newQueryName.filterList = Lodash.concat(newQueryName.filterList, newQueryName.basicDate)
        this.state = {
            filterData: newQueryName,
            dateFormat: 'YYYY'
        }
    }

    onSubmit = () => {
        let { form } = this.props
        let { getFieldsValue } = form
        let newFields = {}
        let fields = getFieldsValue()

        for (let item in fields) {
            if (fields[item] !== '' && fields[item] != 'all') {
                newFields[item] = fields[item]
            }
        }
        console.log(newFields)
    }

    onChange = (e, name, item) => {
        let { cycleType, dateType } = item
        let newQueryName = Lodash.cloneDeep(queryName)
        if (name === 'period') {
            newQueryName.filterList = Lodash.concat(newQueryName.filterList, newQueryName[cycleType])
            this.setState({
                filterData: newQueryName,
                dateFormat: dateType,
            })
        }
    }


    render() {
        let { form } = this.props
        let { getFieldDecorator, setFieldsValue } = form
        return <div className="dealComp">
            <h6>{this.state.filterData.title}</h6>
            <ul>
                {this.state.filterData.filterList.map((item, index) => {
                    switch (item.type) {
                        case "radio":
                            return <li key={index} >
                                <span>{item.label}</span>
                                <RadioList getFieldDecorator={getFieldDecorator} selections={item} onChangeRadio={this.onChange} />
                            </li>
                        case "input":
                            return <li key={index}>
                                <span>{item.label}</span>
                                <SearchInput getFieldDecorator={getFieldDecorator} selections={item} />
                            </li>
                        case "select":
                            return <li key={index}>
                                <span>{item.label}</span>
                                <SelectList getFieldDecorator={getFieldDecorator} selections={item} />
                            </li>
                        case "Date":
                            return <li key={index}>
                                <span>{item.label}</span>
                                <DateTime selectType={item.selectType} setFieldsValue={setFieldsValue} getFieldDecorator={getFieldDecorator} dateFormat={this.state.dateFormat} />
                            </li>
                        default: return null;
                    }

                })}
            </ul>
            <button onClick={this.onSubmit}>提交</button>
        </div>
    }
}
export default createForm()(Deal);