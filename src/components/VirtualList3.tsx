import { FC, useState } from 'react'
import { flushSync } from 'react-dom'

interface VirtualListProps {
  list: Array<any>
  itemHeight?: number
  containerHeight?: number
}

// item高度不固定的虚拟列表
const VirtualList: FC<VirtualListProps> = ({
  list,
  itemHeight = 50,
  containerHeight = 300
}) => {
  // 整个内容区的高度
  const contentHeight = list.length * itemHeight
  // 滚动高度
  const [scrollTop, setScrollTop] = useState(0)

  // 开始渲染和结束渲染元素的索引
  let startIndex = Math.floor(scrollTop / itemHeight)
  let endIndex = Math.floor((scrollTop + containerHeight) / itemHeight)

  // 上下多渲染2个元素 避免滚动时出现空白
  const paddingCount = 2

  // 重新计算开始和结束的索引
  startIndex = Math.max(0, startIndex - paddingCount)
  endIndex = Math.min(list.length - 1, endIndex + paddingCount)

  // 渲染的元素
  const renderList = []
  for (let i = startIndex; i <= endIndex; i++) {
    renderList.push(
      <div
        key={i}
        style={{
          height: itemHeight,
          lineHeight: `${itemHeight}px`,
          position: 'absolute',
          top: `${itemHeight * i}px`
        }}
      >
        {list[i]}
      </div>
    )
  }

  return (
    <div
      style={{
        height: containerHeight,
        overflow: 'auto',
        position: 'relative'
      }}
      onScroll={e => {
        flushSync(() => {
          setScrollTop(e.currentTarget.scrollTop)
        })
      }}
    > 
      <div style={{ height: contentHeight }}>{renderList}</div>
    </div>
  )
}

export default VirtualList
