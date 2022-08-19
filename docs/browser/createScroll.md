# createScroll

创建浏览器滚动器，支持滚动到顶部，滚动到任意高度位置。完全使用 `JavaScript` 实现



### TypeScript 类型声明

```typescript
function createScroll (option: ScrollCondig = {}): IScrollIns
```



### 添加版本

`0.0.20`

之前函数名为 scroll， `0.0.20` 起重命名为 createScroll



### 参数

1. ScrollCondig：创建滚动器选项

   - target?：滚动元素的选择器，默认为 `window`
   - speed?：滚动速度，值越小，速度越快；反之。默认为 `100`

   ```typescript
   interface ScrollCondig {
       target?: string
       speed?: number
   }
   ```

   

### 返回

IScrollIns：滚动器对象

```typescript
interface IScrollIns {
    scrollTo: (distance: number, fn?: () => any) => void
    scrollToTop: (fn?: () => any) => void
}

/**
 * @returns {IScrollIns}
 */
```



### 例子

```typescript
const scroller = createScroll()
// => { scrollToTop, scrollTo }

scroller.scrollToTop(() => {
  console.log('Reach Top')
})

scoller.scrollTo(1000, () => {
  console.log('Reach to scrollTop 1000px')
})
```



----

- [source](https://github.com/iius-l/iius-s/blob/main/src/browser/createScroll.ts)
- demo