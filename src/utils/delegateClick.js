// 事件完成后才能继续调用下一个函数

function submit(e) {
  // 模拟异步
  var promiseCb = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('提交成功')
    }, 1000)
  })

  return promiseCb.then(function(res) {
    // 处理回调
  })
}

export const delegateClick = action => {
  const test = action()
  console.log('test', test)
}

delegateClick(submit)
