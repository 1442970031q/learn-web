import { useRouter } from 'next/router'
export default function ProductDetail() {
    const router = useRouter()
    console.log(router.query)
    return <div>
        我是多余参数 页面
    </div>
}