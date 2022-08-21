# padZero

对小于 10 的数字进行补 0




### TypeScript 类型声明

```typescript
function padZero (n: number): string
```



### 添加版本

`0.0.1`



### 参数
1. `number` n：一个数字

   

### 返回

`string`



### 例子

```typescript
padZero(0)
// => 00

padZero(8)
// => 0.8

padZero(10)
// => 10

padZero(110)
// => 110
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/common/padZero.ts)