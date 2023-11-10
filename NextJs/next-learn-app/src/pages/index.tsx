import Image from 'next/image'
import { getAllData } from '@/utils/request'
import styles from './index.module.css'
import Product from '@/compontents/Product'

export default function Home(props: { productList?: any[] }) {
  const { productList } = props

  return <div className={styles.main}>
    <div>
      {productList?.map((v, i) => <Product key={i} {...v} />)}
    </div>
  </div>
}

export async function getStaticProps() {
  const data = await getAllData()
  return {
    props: { productList: data }
  }
}