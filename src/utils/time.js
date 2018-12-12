class Time {
  constructor(time = Date.now()) {
    if (typeof time === 'object') {
      this.Date = time
    } else {
      if (String(time).length <= 10) {
        this.time = time * 1000
      }
      this.Date = new Date(time)
    }
  }
  _parseDate(Date) {
    return {
      y: Date.getFullYear(),
      m: Date.getMonth() + 1,
      d: Date.getDate(),
      h: Date.getHours(),
      i: Date.getMinutes(),
      s: Date.getSeconds(),
      a: Date.getDay()
    }
  }
  parseTime(format = '{y}-{m}-{d} {h}:{i}:{s}') {
    const Date = this._parseDate(this.Date)
    return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = Date[key]
      if (key === 'a') {
        return '星期' + ['日', '一', '二', '三', '四', '五', '六'][value]
      }
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
  }
}

export default Time
