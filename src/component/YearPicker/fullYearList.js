import React, { Component } from "react";
import './fullYearList.less';

class YearPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      selectedyear: "",
      years: []
    };
  }

  componentWillMount() {
    let { defaultValue } = this.props;

    this.setState({ selectedyear: defaultValue });
  }

  componentDidMount() {
    let _this = this;
    document.addEventListener(
      "click",
      function (e) {
        const { isShow } = _this.state;
        let clsName = e.target.className;
        if (typeof clsName != "object") {
          if (
            clsName.indexOf("calendar") === -1 &&
            e.target.tagName !== "BUTTON" &&
            isShow
          ) {
            _this.hide();
          }
        }
      },
      false
    );
  }

  //初始化数据处理
  initData = (operand, defaultValue) => {
    operand = operand ? operand : 12;
    let year = defaultValue - 1970;
    let curr = year % operand;
    let start = defaultValue - curr;

    let end = parseInt(defaultValue) + parseInt(operand) - 1 - curr;
    this.getYearsArr(start, end);
  };
  //   获取年份范围数组
  getYearsArr = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(Number(i));
    }
    this.setState({
      years: arr
    });
  };
  // 显示日历年组件
  show = () => {
    const { selectedyear } = this.state;
    const { setFieldsValue } = this.props;
    let { operand } = this.props;
    operand = operand ? operand : 12;
    this.initData(operand, selectedyear);
    /*  setFieldsValue({
         period: selectedyear
     }) */
    this.setState({ isShow: true });
  };
  // 隐藏日期年组件
  hide = () => {
    this.setState({ isShow: false });
  };
  // 向前的年份
  prev = () => {
    const { years } = this.state;
    if (years[0] <= 1970) {
      return;
    }
    this.getNewYearRangestartAndEnd("prev");
  };
  // 向后的年份
  next = () => {
    this.getNewYearRangestartAndEnd("next");
  };

  //   获取新的年份
  getNewYearRangestartAndEnd = type => {
    const { selectedyear, years } = this.state;
    const { setFieldsValue } = this.props;
    let operand = Number(this.props.operand);
    operand = operand ? operand : 12;
    let start = Number(years[0]);
    let end = Number(years[years.length - 1]);
    let newstart;
    let newend;
    if (type == "prev") {
      newstart = parseInt(start - operand);
      newend = parseInt(end - operand);
      setFieldsValue({
        period: parseInt(selectedyear) - 1,
      })
      this.setState({
        selectedyear: parseInt(selectedyear) - 1,
      }, () => {
        this.getYearsArr(newstart, newend);
      })
    }
    if (type == "next") {
      newstart = parseInt(start + operand);
      newend = parseInt(end + operand);
      setFieldsValue({
        period: parseInt(selectedyear) + 1,
      })
      this.setState({
        selectedyear: parseInt(selectedyear) + 1,
      }, () => {
        this.getYearsArr(newstart, newend);
      })
    }


  };

  // 选中某一年
  selects = e => {
    let { setFieldsValue } = this.props
    let val = Number(e.target.value);
    this.hide();
    setFieldsValue({ period: val, })
    this.setState({ selectedyear: val });
    if (this.props.callback) {
      this.props.callback(val);
    }
  };

  render() {
    const { isShow, years, selectedyear } = this.state;
    const { getFieldDecorator, filter, rules, } = this.props;
    return (
      <div className="calendar-wrap">
        <span className="ant-calendar-picker">
          {getFieldDecorator('period', {
            initialValue: filter ? filter.period : selectedyear,
          })(
            <input
              className="ant-calendar-picker-input ant-input"
              placeholder="请选择年份"
              onFocus={this.show}
              readOnly
            />
          )}
        </span>
        {isShow ? (
          <List
            rules={rules}
            data={years}
            value={selectedyear}
            prev={this.prev}
            next={this.next}
            cback={this.selects}
          />
        ) : (
            ""
          )}
      </div>
    );
  }
}

const List = props => {
  const { data, value, prev, next, cback, rules } = props;
  return (
    <div>
      {rules ? <div className="ant-calendar-rules ant-calendar-month ant-calendar-list" tabIndex="0">
        <div className="ant-calendar-month-panel">
          <div>
            <div className="ant-calendar-month-panel-header">
              <a
                type="double-left"
                role="button"
                className="ant-calendar-month-panel-prev-year-btn"
                title="上一年"
                onClick={prev}
              >
              </a>
              <span className="calendar-year-range">{value}</span>
              <a
                type="double-right"
                className="ant-calendar-month-panel-next-year-btn"
                title=""
                role="button"
                onClick={next}
              >
              </a>
            </div>
            <div className="ant-calendar-month-panel-body">
              <ul className="calendar-year-ul">
                {data.map((item, index) => (
                  <li
                    key={index}
                    title={item}
                    className={
                      item == value
                        ? "calendar-year-li calendar-year-selected"
                        : "calendar-year-li"
                    }
                  >
                    <button onClick={cback} value={item}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div> : <div className="ant-calendar ant-calendar-month ant-calendar-list" tabIndex="0">
          <div className="ant-calendar-month-panel">
            <div>
              <div className="ant-calendar-month-panel-header">
                <a
                  type="double-left"
                  role="button"
                  className="ant-calendar-month-panel-prev-year-btn"
                  title="上一年"
                  onClick={prev}
                >
                </a>
                <span className="calendar-year-range">{value}</span>
                <a
                  type="double-right"
                  className="ant-calendar-month-panel-next-year-btn"
                  title=""
                  role="button"
                  onClick={next}
                >
                </a>
              </div>
              <div className="ant-calendar-month-panel-body">
                <ul className="calendar-year-ul">
                  {data.map((item, index) => (
                    <li
                      key={index}
                      title={item}
                      className={
                        item == value
                          ? "calendar-year-li calendar-year-selected"
                          : "calendar-year-li"
                      }
                    >
                      <button onClick={cback} value={item}>
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default YearPicker;
