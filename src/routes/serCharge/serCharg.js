import React, { Component, Fragment } from 'react';
import ServChar from '../data/servChar';
import { SearchInput, RadioList } from '../form_elem'
import '../index.css'

class ServCharg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            report1: ServChar
        }
        this.click = this.click.bind(this);
    }
    click(name, value) {
        const report2 = this.state.report1;
        this.state.report1.list1.map((item, index) => {
            if (item.name === name) {
                report2.list1[index].value = value;
                this.state.report1 = report2;
                console.log(report2.list1[index].value);
            } else {
                this.state.report1 = report2;
            }
        })
    }
    render() {
        return <div className="dealComp">
            <h6>{this.state.report1.title}</h6>
            <ul>
                {this.state.report1.list1.map((list2, index) => {
                    if (list2.typ === "radio") {
                        return (
                            <li key={index}>
                                <span>{list2.label}</span>
                                {list2.child.map((childs, index) => {
                                    return <Fragment>
                                        <label>
                                            <RadioList name={list2.name} value={list2.value} index={index} pClick={this.click} />
                                            {childs}
                                        </label>
                                    </Fragment>
                                })}
                            </li>
                        )
                    }
                    if (list2.typ === "input") {
                        return <li key={index}>
                            <span>{list2.label}</span>
                            <SearchInput value={list2.value} name={list2.name} pClick={this.click} />
                        </li>
                    }
                })}
            </ul>
        </div>
    }
}
export default ServCharg;