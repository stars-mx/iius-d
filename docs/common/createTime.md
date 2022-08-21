# createTime

创建 （时间戳 | 秒）




### TypeScript 类型声明

```typescript
function createTime (option: Partial<CreateTimeOption>, unit?: Unit): number
```



### 添加版本

`0.0.1`

`0.0.20` 增加对年、月、日的选项，之前仅支持时、分、秒的选项



### 参数

1. option：定义时间单位上的数量

   - year：年
   - month：月
   - day：天
   - hour：时
   - minute：分
   - second：秒

   ```typescript
   type CreateTimeOption = {
       year: number
       month: number
       day: number
       hour: number
       minute: number
       second: number
   }
   ```

   

2. unit?：生成的时间单位，支持 `毫秒` 和 `秒`，默认为 `毫秒`

   ```typescript
   type Unit = 'millisecond' | 'second'
   ```

   


### 返回

`number`

最终计算的 `毫秒数` 或者 `秒数`



### 例子

```typescript
const oneMinuteSeconds = createTime({ hour: 1 }, 'second')
// => 60

// 创建一个月的毫秒数
const oneMonthTime = createTime({ month: 1 })
// => 
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/common/createTime.ts)