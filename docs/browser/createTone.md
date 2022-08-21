# createTone

创建色调管理器，当浏览器支持 `window.matchMedia` API 的时候会返回一个色调管理器对象，否则返回 `false`



### TypeScript 类型声明

```typescript
function createTone<T extends string> (option: CreateToneOption<T>): ToneManager<T> | false
```



### 添加版本

`0.0.19`



### 参数

1. CreateToneOption：创建色调数组选项
   - `string` key：为在 localStorage 中的 key 值
   - `string[]` tones：传入你所需要的色调数组
   - `Function` onUpdate?：当更新色调的时候，会调用传入的函数（可选）
   
   ```typescript
   type CreateToneOption<U> = {
       key: string
       tones: U[]
       onUpdate?: (tone: string) => void
   }
   ```
   
   

### 返回

`ToneManager` | `false`

```typescript
type DefaultTone = 'Dark' | 'Light' | 'System'

type IsRecord<V extends string> = Record<`is${V}`, boolean>

type ToneManager<S extends string> = IsRecord<S> & IsRecord<DefaultTone> & {
    getMode: () => S,
    setMode: (tone: S) => void
    init: () => void
    cancel: () => void
}

/*
	getMode(): 获取当前色调的模式
	setMode(): 设置色调模式
	init(): 色调初始化。内部会判断如果是首次使用，进行一系列的初始化操作，并缓存在本地
	cancel(): 取消监听系统的色调变化事件。如果色调模式为跟随系统变化时，会监听系统的色调变化
	isLight(): 是否为亮色模式
	isDart(): 是否为暗色模式
	isSystem(): 是否为跟随系统模式
	...
*/
```



### 例子

```typescript
createTone({
  key: 'test-tone',
  tones: ['Red', 'Green', 'Blue'],
	onUpdate(tone) {
    console.log(tone)
  }
})

/*
=> {
  getMode,
  setMode,
  init,
  cancel，
  isDark,
  isLight,
  isSystem,
  isRed,
  isGreen,
  isBlue
}
*/
```



------

- [Source](https://github.com/iius-l/iius-s/blob/main/src/browser/createTone.ts)
- Demo



### 建议

强烈建议 `tones 数组` 为一个大写字母开头的字符串数组

- 一来是为了美观

- 二来少写点代码去拦截与判断 😂