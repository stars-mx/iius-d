# createSize

创建字节大小




### TypeScript 类型声明

```typescript
function createSize (size: number, type: SizeType): number
```



### 添加版本

`0.0.1`



### 参数
1. `number` size：要创建的大小

2. type：创建的类型

   ```typescript
   type SizeType = 'MB' | 'KB' | 'BYTE'
   ```

   

### 返回

`number`



### 例子

```typescript
const size01 = createSize(1, 'MB')
// => 1024 * 1024 * 1

const size02 = createSize(1, 'KB')
// => 1024 * 1

const size03 = createSize(1, 'BYTE')
// => 1
```


----

- [source](https://github.com/iius-l/iius-s/blob/main/src/common/createSize.ts)