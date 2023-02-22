
//声明构造函数
function Promise1(executor) {
  //添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;
  //保持实例对象的this的值
  const self = this;

  //resolve函数
  function resolve(data) {
    //判断状态
    if (self.PromiseState !== 'pending') return;
    //1. 修改对象的状态 (promiseState)
    self.PromiseState = 'fulfilled';
    //2. 设置对象结果值 (promiseResult)
    self.PromiseResult = data;
  }

  //reject 函数
  function reject(data) {
    if (self.PromiseState !== 'pending') return;
    //1. 修改对象的状态 (promiseState)
    self.PromiseState = 'rejected';
    //2. 设置对象结果值 (promiseResult)
    self.PromiseResult = data;
  }

  try {
    //同步调用【执行器函数】
    executor(resolve, reject);
  } catch (e) {
    //修改 promise 对象状态为【失败】
    reject(e);
  }
}


//添加 then 方法
Promise1.prototype.then = function (onResolved, onReject) {
  //调用回调函数
  if (this.PromiseState === 'fulfilled') {
    onResolved(this.PromiseResult);
  }
  if (this.PromiseState === 'rejected') {
    onReject(this.PromiseResult);
  }

  //判断pending 状态
  if (this.PromiseState === 'pending') {
    
  }
}