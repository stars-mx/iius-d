# toThousands

把数字格式化为千分位形式




### TypeScript 类型声明

```typescript
function toThousands (num: number | string): string
```



### 添加版本

`0.0.1`



### 参数
1. `number | string` num：需要格式化的数字

   

### 返回

`string`



### 例子

```typescript
toThousands(1000)
// => 1,000

toThousands(12323)
// => 12,323

toThousands(1111.342)
// => 1,111.342
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/common/toThousands.ts)