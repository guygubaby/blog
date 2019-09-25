# 浏览器下载问题

> 解决`FileSaver`在`ie`下载`blob`时doesn't work的情况

```js
if(navigator.msSaveBlob){ // work on ie browsers
  window.navigator.msSaveBlob(blob,fileName) // this will trigger the download in ie browser
}else {
  const blobUrl = URL.createObjectURL(blob)
  FileSaver.saveAs(blobUrl,fileName)
  URL.revokeObjectURL(blobUrl)
}
```