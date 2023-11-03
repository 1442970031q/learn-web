import { getUserById } from '@/utils/request'


export default function User(props) {
    const { userName, nickName, phone } = props
    return <div>
        <h4>名称：{userName}</h4>
        <p>昵称:{nickName}</p>
        <p>电话:{phone}</p>
    </div>
}

export async function getServerSideProps(context) {
    const { params, req, res } = context
    const userId = parseInt(Math.random() * 10) + 1
    const userProps = await getUserById(userId)
    console.log('userProps:',userProps)
    return {
        props: userProps
    }
}