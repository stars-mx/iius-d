# createCopy


### TypeScript 类型声明

```typescript
function createCopy(): Copyer
```



### 添加版本

`0.0.20`

由原来单纯的 copy 函数变为 createCopy 函数，增加 remove 功能



### 参数

无需传参




### 返回

`Copyer`

```typescript
type Copyer = {
  exec: (content: string) => boolean
  remove: () => void
}

/*
	exec(): 传入需要复制的字符串，执行复制功能
	remove(): 清空闭包缓存，同时移除使用到的 Input 元素
*/
```



### 例子

```typescript
const content = 'hello iius'
const copyer = createCopy()
copyer.exec(content)

// 移除借助的 input 元素，同时清空闭包中的缓存数据
copyer.remove()

// 采用懒汉模式，移除之后支持再次 exec()
copyer.exec(content)
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/browser/createCopy.ts)