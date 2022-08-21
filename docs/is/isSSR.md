# isSSR

判断当前运行模式是否为服务端渲染



**注意**

内部为通过对 window，document 对象进行判断，只要是在非客户端中执行。结果都会为 true




### TypeScript 类型声明

```typescript
function isSSR (): boolean
```



### 添加版本

`0.0.20`



### 参数
无需传入参数

   

### 返回

`boolean`



### 例子

```typescript
// 如果是服务端渲染
isSSR()
// => true

// 如果是在 Nodejs 环境中执行
isSSR()
// => true
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/is/isSSR.ts)