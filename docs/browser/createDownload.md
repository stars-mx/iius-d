# createDownload

浏览器根据数据或者链接进行文件下载



### TypeScript 类型声明

```typescript
function createDownload (fileName: string): DownloadObject
```



### 添加版本

`0.0.20` 由原本的原本的 download 函数升级为 createDownload 函数



### 参数

1. `string` fileName：最终下载的文件的名字

   

### 返回

`DownloadObject`

```typescript
export type DownloadObject = {
  	// 此处的 filename 将会覆盖 createDownload 传入的 filename
    downloadWithFile: (file: File, filename: string) => void
    downloadWithBlob: (blob: Blob, filename: string) => void
    downloadWithDataURL: (dataURL: string, filename: string) => void
}
```



### 例子

```typescript
const dataURL = canvas.toDataURL('image/png')
// 统一设置名字
const { downloadWithDataURL } = createDownload('iius_avatar.png')
downloadWithDataURL(dataURL)
```

----

- [source](https://github.com/iius-l/iius-s/blob/main/src/browser/createDownload.ts)
- [demo](https://codepen.io/lunoob/pen/WNzmoZv)
