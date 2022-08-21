# isWechat

检验输入的字符串是否符合微信账号格式



**注意**

1. 参数为非字符串时直接返回 `false`
2. 注意是**微信账号**




### TypeScript 类型声明

```typescript
function isWechat (wechat: string): boolean
```



### 添加版本

`0.0.20`



### 参数
1. `string` wechat：需要检验的微信账号

   

### 返回

`boolean`



### 例子

```typescript
isWechat('')
// => true or false
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/is/isWechat.ts)