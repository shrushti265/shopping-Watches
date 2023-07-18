import "./productgallery.css"
import{FiShoppingCart} from "react-icons/fi"
import {BsHeart,BsFillHeartFill} from "react-icons/bs"
import {AiTwotoneStar} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useCart,useWishlist,useStore,useAuth} from "../../Context/index"
import {findInArray} from "../../utils/index"
import { useNavigate} from "react-router-dom"

const CardView = ({product}) =>
{
  const{cartState,cartDispatch} = useCart();
 const{wishlistState,wishlistDispatch} = useWishlist();
 const{storeDispatch} = useStore();
 const{auth} = useAuth()
const{_id,tittle,description,price,category,categoryName,qty,new_arrival,original_price,discount, isFillHeart,image,rating:{rate,count}} = product;
const navigate = useNavigate()

const isInCart = findInArray(_id,cartState.itemsInCart)
const cartHandler = (id,product) => {
  if(auth.isAuth) {if(isInCart) {
   navigate("/cart")
  }else{
    cartDispatch({
      type:"ADD_TO_CART",
      payload: product
       })
  }}else{
    toast.error("please login")
  }
}
const isInWishlist = findInArray(_id,wishlistState.itemsInWishlist)
const wishlistHandler = (id,product) => {
  if(auth.isAuth) { if(isInWishlist) {
    wishlistDispatch({
      type:"REMOVE_FROM_WISHLIST",
      payload: id
    })
    toast.success("Removed from Wishlist!")
  }else{
    wishlistDispatch({
      type:"ADD_TO_WISHLIST",
      payload: product
      })
  }
}else{
  toast.error("please login first!")
}}
  return (
    <div key={_id} class="card">
  <div class="card__media">
  <img  src={image}/>
{ isInWishlist? <BsFillHeartFill className="card__icon" size="3rem" onClick = {() => wishlistHandler(_id,product)}/> :<BsHeart className="card__icon" size="3rem" onClick = {() => wishlistHandler(_id,product)}/>}
  { new_arrival && <div className="card__new_arrival">
  <div className = "">NEW</div>
  </div>}
  <div className = "card__rate"><AiTwotoneStar/> {rate}|{count}</div>
  </div>
  <div class="card__details">
  <div class="card__head">{tittle}</div>
  <div class="card__desc">{description}</div>
 <div className="card__price card__horizontal__flex">
 <div class="card-price"> Rs.{price}</div>
  <div class="original-price"> Rs.{original_price} </div>
  <div class="card-off"> ({discount}% OFF) </div>
  </div>
</div>
  <div class="card__button">
  <button class="btn btn-primary button"  onClick = {() =>cartHandler(_id,product)}>{isInCart?"Go To Cart":"Add To Cart"}<FiShoppingCart size="2rem"/></button>
 </div>
 </div>
   )}
    
  
 
  
  export{CardView}