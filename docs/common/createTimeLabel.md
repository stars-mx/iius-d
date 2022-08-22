# createTimeLabel

创建时间段对应的问候语、问好、称呼等




### TypeScript 类型声明

```typescript
function createTimeLabel (range: TimeRange[]): TimeLabel
```



### 添加版本

`0.0.20`



### 参数

1. range：符合以下格式的数组

   ```typescript
   type TimeRange = {
       name: string
       range: [number, number]
   }
   ```

   

### 返回

`TimeLabel`

```typescript
type TimeLabel = {
    update: (_range: TimeRange[]) => void
    match: (time: string | number | Date) => string
}
```



### 例子

```typescript
const timeRange: TimeRange[] = [
    { name: '凌晨', range: [0, 6] },
    { name: '上午', range: [6, 11] },
    { name: '中午', range: [11, 14] },
    { name: '下午', range: [14, 17] },
    { name: '晚上', range: [17, 23] }
]
const timeLabel = createTimeLabel(timeRange)

// timeLabel.update(timeRange)
timeLabel.match(new Date())
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/common/createTimeLabel.ts)