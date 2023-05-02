// import age from './data.js'
import {age, name, Hi} from './data.js'

export default function Cart() {
    let 장바구니 = ['Tomato', 'Pasta']
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem item={장바구니[0]} />
            <CartItem item={장바구니[1]} />
            <Banner card="롯데카드" />
            <Banner card="현대카드" />
            <Btn color="red" />
            <Btn color="blue" />
        </div>
    )
}

function Btn(props){
    return(
        <button style={{background : props.color}}>버튼ㅋ</button>
    )
}

function CartItem(props){
    return(
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}
function Banner(props){
    return(
        <h5>{props.card} 결제 행사중</h5>
    )
}