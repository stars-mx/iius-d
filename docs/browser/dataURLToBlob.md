# dataURLToBlob

dataURL 数据转 Blob 对象




### TypeScript 类型声明

```typescript
function dataURLToBlob (dataURL: string): Blob
```



### 添加版本

`x.x.20`



### 参数

1. `string` dataURL：dataURL 数据内容

   


### 返回

`Blob`

转换后的 Blob 对象



### 例子

```typescript
const imageDataURL = canvas.toDataURL('image/png')
dataURLToBlob(imageDataURL, 'image.png')
// => Blob {}
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/browser/dataURLToBlob.ts)
- [demo](https://codepen.io/lunoob/pen/WNzmoZv)