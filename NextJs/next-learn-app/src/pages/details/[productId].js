import { useRouter } from 'next/router'
import styles from './product-detail.module.css'
import { getAllData, getProductById } from '@/utils/request'
import Head from 'next/head'

export default function ProductDetail(props) {
    if (!props || Object.keys(props).length === 0) {
        return <div>正在加载....</div>
    }
    const { title, price, date, desc, id } = props
    return <div className={styles.productDetail}>
        <Head>
            <title>{title}</title>
            <meta name={title} />
        </Head>
        <div className={styles.productDetailContent}>
            <h3>{title}
                <b>id:{id}</b>
            </h3>
            <p>{desc}</p>
            <p>{date}</p>
            <h4>¥{price}</h4>
        </div>
    </div>
}

export async function getStaticProps(context) {
    const { params } = context
    console.log('params', params)
    const data = await getProductById(params?.productId)
    return {
        props: data
    }
}

export async function getStaticPaths() {
    const data = await getAllData()
    const pathsIds = data?.filter(v => v.isShow).map?.(v => ({
        params: {
            productId: v.id
        }
    }))
    return {
        paths: pathsIds,
        fallback: true
    }
}