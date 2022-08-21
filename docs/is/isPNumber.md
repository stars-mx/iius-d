# isPNumber

检验输入的字符串是否符合电话号码格式



**注意**

参数为非字符串时直接返回 `false`




### TypeScript 类型声明

```typescript
function isPNumber (phone: string): boolean
```



### 添加版本

`0.0.20`



### 参数
1. `string` phone：要检验的电话号码

   

### 返回

`boolean`



### 例子

```typescript
isPNumber('正确的电话号码格式')
// true
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/is/isPNumber.ts)