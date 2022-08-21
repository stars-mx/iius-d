# formatNumber

对数字进行格式化

 * 当数字小于10万时，返回带千分位的数字
 * 当数字大于等于10万小于一亿时，返回以万为单位的数字
 * 当数字大于等于一亿时，返回以亿为单位的数字




### TypeScript 类型声明

```typescript
function formatNumber (num: string | number): string
```



### 添加版本

`0.0.1`



### 参数
1. `string| number` num：需要进行格式化的数字或者数字字符串

   

### 返回

`string`



### 例子

```typescript
formatNumber(50500)
// => 50,500

formatNumber(100000)
// => 10万
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/common/formatNumber)