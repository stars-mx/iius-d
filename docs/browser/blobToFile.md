# blobToFile


### TypeScript 类型声明

```typescript
function blobToFile (theBlob: Blob, fileName: string): File
```



### 添加版本

`0.0.22`



### 参数
1. `Blob` theBlob：Blob 对象
2. `string` fileName：转成 File 对象时的文件名

   

### 返回

`File`



### 例子

```typescript
const dataURL = canvas.toDataURL('image/png')
const Blob = iius.dataURLToBlob(dataURL)
iius.blobToFile(Blob, 'hello iius')
// => file { name: 'hello iius' }

// 当然可以直接使用 iius.dataURLToFile
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/browser/blobToFile.ts)