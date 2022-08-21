# getIEVersion

获取 IE 浏览器的版本号




### TypeScript 类型声明

```typescript
function getIEVersion(userAgent?: string): number | string | false
```



### 添加版本

`0.0.18`



### 参数

1. `string` userAgent：浏览器的 userAgent，默认为当前 window.navigator.userAgent




### 返回

`number` | `edge` | `false`

- 当遇到 IE 浏览器时，返回相应的版本号
- 如果是 Edge 浏览器，则会返回 edge
- 其他情况则返回 false



### 例子

```typescript
getIEVersion()
// => 6 | 7 | 8 | 9 | 10 | 11 | edge | false
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/browser/getIEVersion.ts)