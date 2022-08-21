# isURL

检验输入的字符串是否符合合法链接格式



**注意**

- 参数为非字符串时直接返回 `false`
- 合法链接需要包含使用的网络协议




### TypeScript 类型声明

```typescript
function isURL (url: string): boolean
```



### 添加版本

`0.0.20`



### 参数
1. `string` url：需要检验的 URL 字符串

   

### 返回

`boolean`



### 例子

```typescript
isURL('123')
// => false

isURL('https://iius-l.github.io/iius-d')
// => true

isURL('http://iius-l.github.io/iius-d')
// => true

isURL('www.iius-l.github.io/iius-d')
// => false
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/is/isURL.ts)