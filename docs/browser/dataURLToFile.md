# dataURLToFile

dataURL 转 File 对象




### TypeScript 类型声明

```typescript
function dataURLToFile (dataURL: string, fileName: string): File
```



### 添加版本

`x.x.20`



### 参数

1. `string` dataURL：dataURL 数据内容

2. `string` fileName：文件名

   


### 返回

`File`

转换后的 File 对象



### 例子

```typescript
const imageDataURL = canvas.toDataURL('image/png')
dataURLToFile(imageDataURL, 'image.png')
// => File { name: 'image.png', ... }
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/browser/dataURLToFile.ts)
- [demo](https://codepen.io/lunoob/pen/WNzmoZv)