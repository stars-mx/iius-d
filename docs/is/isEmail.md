# isEmail

检验输入的字符串是否符合邮箱格式



**注意**

参数为非字符串时直接返回 `false`




### TypeScript 类型声明

```typescript
function isEmail (email: string): boolean
```



### 添加版本

`0.0.20`



### 参数

1. `string` email：需要验证的内容




### 返回

`boolean`



### 例子

```typescript
isEmail('1234567@qq.com')
// => true

isEmail('123455')
// => false

// 传入非字符串内容
isEmail(123) // false
isEmail(true) // false
isEmail({}) // false
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/is/isEmail.ts)