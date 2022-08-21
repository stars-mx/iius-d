# isMobileByUa

通过 userAgent 判断是否移动端设备




### TypeScript 类型声明

```typescript
function isMobileByUa (userAgent: string): boolean
```



### 添加版本

`0.0.1`



### 参数
1. `string` userAgent?：浏览器的 userAgent 信息，默认为 window.navigator.userAgent

   

### 返回

`boolean`



### 例子

```typescript
// iphone userAgent
const iosUa = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'

const isMobile01 = isMobileByUa(iosUa)
// true

// Android userAgent
const androidUa = 'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36'

const isMobile02 = isMobileByUa(androidUa)
// true

// mac userAgent
const pcUa = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'

const isMobile03 = isMobileByUa(pcUa)
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/is/isMobileByUa.ts)