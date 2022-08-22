# isMobile

检验当前设备是否为移动端设备，内部会先进行 userAgent 的判断，userAgent 符合移动端的规则，则直接返回 `true`，否则再进行可视区域宽度的判断




### TypeScript 类型声明

```typescript
function isMobile (width?: number): boolean
```



### 添加版本

`0.0.1`



### 参数
1. `number` width?：移动端设备宽度的断点，默认为 576

   

### 返回

`boolean`



### 例子

```typescript
// 当 userAgent 符合移动端规则
isMobile() // true

// 当可视区域宽度小于 576
isMobile() // true
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/is/isMobile.ts)