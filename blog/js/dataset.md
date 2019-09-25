# dataset 兼容问题

> 在`ie10`及以下浏览器中使用dataset会报错,之前不知道,导致和测试小姐姐扯了好久，2333

```js

const remarkEl = document.querySelector('.remark')
if(remarkEl.dataset){
  remarkEl.dataset.remark = 'tips'
}else{
  remarkEl.setAttribute('data-remark','tips')
}

```

> 这样就可以解决问题了
