import { Input, message } from 'antd'
import { useState, type ChangeEvent } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const { Search } = Input
export const ListSearch = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const [searchParams] = useSearchParams()
  //   useEffect(() => {
  //     const val = searchParams.get('keyword') || ''
  //     setInputVal(val)
  //   }, [searchParams])
  /*
在 `useEffect` 中读取 `searchParams` 同步设置 `inputVal`，导致 URL 变化时先渲染一次旧值，effect 执行后又触发第二次渲染，形成级联渲染（cascading render），既浪费性能又可能产生视觉闪烁；
由于 `searchParams` 本身就是 React 状态的一部分而非外部系统，这种派生状态应在渲染期间直接同步，而非通过 effect。
  */
  const curVal = searchParams.get('keyword') || ''
  const [prevInputVal, setPrevInputVal] = useState(curVal)
  const [inputVal, setInputVal] = useState(curVal)

  if (prevInputVal !== curVal) {
    setPrevInputVal(curVal)
    setInputVal(curVal)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputVal(event.target.value)
  }
  function handleSearch(value: string) {
    message.info('value' + value)
    nav({
      pathname,
      search: `keyword=${value}`,
    })
  }

  return (
    <Search
      placeholder="请输入关键字进行搜索"
      onChange={handleChange}
      allowClear
      value={inputVal}
      onSearch={handleSearch}
      style={{ width: '200px' }}
    />
  )
}
