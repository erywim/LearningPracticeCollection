import { Outlet } from 'react-router-dom'
import styles from './ManageLayout.module.scss'

const ManageLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>ManaL footer</p>
        <button>创建问卷</button> <br />
        <a>我的问卷</a>
        <br />
        <a>星标问卷</a>
        <br />
        <a>回收站</a>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout
