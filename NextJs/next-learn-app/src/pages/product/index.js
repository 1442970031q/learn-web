export default function Product() {
    return <div>
        <ul>
            {new Array(100).fill('').map((_, i) => <div key={i}>我是第{i}产品</div>)}
        </ul>
    </div>
}