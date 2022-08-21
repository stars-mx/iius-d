# delay

对一个函数的执行在 delay 时间或之后返回执行结果，支持同步或异步任务



**使用场景**

- 延迟获取执行结果
- 对于一些数据请求太快，造成体验不好的场景，可以稍微延迟来提高用户体验




### TypeScript 类型声明

```typescript
function delay <T> (fn: Function, delay: number): Promise<T>
```



### 添加版本

`0.0.1`



### 参数

1. `Function` fn：要执行的函数
2. `number` duration：延迟时间（单位：毫秒）




### 返回

`Promise`



### 例子

```typescript
function Hello() {
	return 'Hello iius'
}

(async () => {
	const helloStr = await delay(Hello, 1000)()
  console.log(helloStr)
  // 将在 1 秒后才返回结果
})()

function fakeFetch() {
  return new Promise((resolve) => {
			setTimeout(() => {
        resolve({
          data: null,
          message: 'ok',
          status: 200
        })
      }, 1000)
  })
}

(async () => {
  const data = await delay(fakeFetch, 500)()
  // 数据会在 1 秒后才返回结果，而不是 500 毫秒
})()
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/browser/createScroll.ts)
- demo