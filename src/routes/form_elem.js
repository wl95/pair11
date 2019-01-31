import React, { Component, Fragment } from 'react'
import './form_elem.less'
//下拉框
export class SelectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: this.props.value
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({ selectValue: e.target.value });
  }
  render() {
    let { selections, getFieldDecorator, rules, normalize } = this.props;

    return getFieldDecorator(selections.selectType, {
      initialValue: selections.defaultValue,
      rules,
      normalize,
    })(<select onChange={this.handleChange}>
      {
        selections.child.map((item) => {
          return <option key={item.code} value={item.code} >{item.name}</option>
        })
      }
    </select>
    )
  }
}

//文本框组件
export class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: false
    }
  }

  onflagState = (e) => {
    this.setState({
      flag: e.target.value ? true : false
    })
  }

  onClickState = (e) => {
    this.setState({
      flag: false
    })
  }

  render() {
    let { flag } = this.state
    let { getFieldDecorator, rules, selections, normalize, value, onChange, onClickSearchLists, selectType, itemName, option, isInput } = this.props
    return (
      <div className="fuzzy_search">
        {
          getFieldDecorator(selections.selectType, {
            initialValue: value || '',
            rules,
            normalize,
          })(<input
            type="text"
            placeholder='请输入'
            className='InputBOX'
            onChange={e => { !isInput && this.onflagState(e); onChange && onChange(e, selections.selectType) }} />)
        }

        {
          flag && <ul className='SearchResults'>
            {
              option && option.map((item, index) => {
                return item[itemName].indexOf(value) == 0 ? <li onClick={e => { this.onClickState(); onClickSearchLists(item[itemName], selectType) }} key={index}>{item[itemName]}</li> : ''
              })
            }
          </ul>
        }
      </div>
    );
  }
}

//单选
export function RadioList({ selections, rules, normalize, getFieldDecorator, onChangeRadio }) {
  return getFieldDecorator(selections.selectType, {
    initialValue: selections.defaultValue || '',
    rules,
    normalize,
  })(<label>
    {selections.child.map((item, index) => {
      return <Fragment key={index}> <input
        onChange={(e, option) => onChangeRadio(e, selections.name, item)}
        type='radio'
        value={item.code}
        name={selections.name}
        defaultChecked={item.code === selections.defaultValue}
      />{item.label}</Fragment>
    })}
  </label>)
}
