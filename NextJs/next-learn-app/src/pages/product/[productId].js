import { useRouter } from 'next/router'
import styles from './product-detail.module.css'
export default function ProductDetail() {
    const router = useRouter()
    const { productId } = router.query
    return <div className={styles.bg}>
        我的产品id是: {productId}
    </div>
}