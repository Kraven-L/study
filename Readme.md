# 事件绑定
addEventListener('click', func, false)
> 第三个参数是若true 则表示在捕获阶段调用事件，若是false 则是在冒泡阶段调用事件，默认为false。

兼容 attachEvent('onclick', func)