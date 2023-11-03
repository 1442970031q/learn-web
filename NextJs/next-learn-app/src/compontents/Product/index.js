
import styles from './index.module.css'
import { useRouter } from 'next/router'

export default function Product(props) {
    const { title, price, date, id, desc } = props
    const router = useRouter()
    const clickHandle = () => {
        router.push({
            pathname: '/details/[productId]',
            query: {
                productId:id
            }
        })
    }
    return <div className={styles.product}>
        <div className={styles.productTitle}>{title}</div>
        <div className={styles.productDesc}>{desc}</div>
        <div className={styles.productBottom}>
            <div className={styles.productBottomDate}>生产日期: {date}</div>
            <div className={styles.productBottomPrice}>价格: {price}</div>
        </div>
        <div className={styles.productDetail}
            onClick={clickHandle}
        >查看详情</div>
    </div>
}
