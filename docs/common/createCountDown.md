# createCountDown
创建倒计时



### TypeScript 类型声明

```typescript
function createCountDown (time: Time): CountDown
```



### 添加版本

`0.0.1`



### 参数

1. time?：开始倒计时的 `时间戳`、`日期字符串`、`日期对象`。默认值为当前时间

   ```typescript
   type Time = number | string | Date
   ```




### 返回

`CountDown`

```typescript
type CountDown = {
    year: string
    month: string
    day: string
    hour: string
    minute: string
    second: string
}

/*
  year: 年, 
  month: 月
  day: 日
  hour: 时
  minute: 分
  second: 秒
*/
```



### 例子

```typescript
const createCutDown = (time) => {
    const timer = setInterval(() => {
        const now = +new Date()
        const diff = time - now
        if (diff < 0) {
            return clearInterval(timer)
        }
        const { year, month, day, hour, minute, second } = createCountDown(diff)

        console.log(`${year}/${month}/${day} ${hour}:${minute}:${second}`)
    }, 1000)

    return () => {
        clearInterval(timer)
    }
}

const targetDate = '2022-08-21 00:00:00'
const cancel = createCutDown(+new Date(targetDate))
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/common/createCountDown.ts)
- [demo](https://codepen.io/lunoob/pen/jOzJBYd)