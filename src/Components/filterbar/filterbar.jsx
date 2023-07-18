import React from 'react'
import { useFilter } from '../../Context/index';
import "./filterbar.css"
import {MdKeyboardArrowRight,MdKeyboardArrowDown} from "react-icons/md"
const Filterbar = () => {
    const{state,dispatch} =useFilter();
    const{sortby,gender,categoryName,brandName,discount} = state;
    const{casual,formal,digital,sports} = categoryName;
    const{apple,fossil,fastrack,titan} = brandName;

  return (
    <>
    <div className="col-2 filterbar">
   <div className="filterbar__box">
   <div className="filterbar__heading">Filter</div>
  <div className="filterbar__deleteBtn"onClick = {() => dispatch({type:'CLEAR'})}>Delete all filter</div>
  </div>

  <div className="filterbar__searchbox">
      {/* <i className="fa fa-search icon a"></i> */}
      <input type="text" placeholder="search filter"/>
  </div>


     <div className="flex-vertical-outer">
         <div className="filterbar__heading">Price</div>
         <div className="flex-horizontal-inner price-input">
             <input type="text" />
             <input type="text" placeholder=""/>
         </div>
         <input type="range" min="1" max="100" />
     </div>

  <div className="accordian-item flex-vertical-outer ">
  <div className="accordian-tap ">
    <div className="filterbar__heading">Categories</div>
    {/* <MdKeyboardArrowRight className="arrow-right" size = "2rem"/>
    <MdKeyboardArrowDown className="arrow-down" size = "2rem"/> */}
  </div> 
    <div className="accordian-answer flex-horizontal-inner ">
  
  
                <input 
                id='men'
                class="radiobox"
                  type="radio"
                  name="gender"
                  value="Men"
                  onChange={() => dispatch({type:"GENDER",payload:"SHOW_MEN"})}
                />
              <label For='men'>Men</label>
                <input
                  id='women'
                   class="radiobox"
                  type="radio"
                  name="gender"
                  value="Women"
                  onChange={() => dispatch({type:"GENDER",payload:"SHOW_WOMEN"})}
                />
                <label for="women">Women</label>
          
                <input
                id='kid'
                  class="radiobox"
                  type="radio"
                  name="gender"
                  value="kids"
                  onChange={() => dispatch({type:"GENDER",payload:"SHOW_KID"})}
                />
              <label for="kid">Kid</label>
  
</div> 
</div>
<hr/>
  {/* ---------------------------------------------------------------------- */}
  <div className="accordian-item flex-vertical-outer">
  <div className="accordian-tap">
    <div className="filter-text">Producer</div>
    <div className="filterbar__heading">Producer</div>
    {/* <MdKeyboardArrowRight className="arrow-right" size = "2rem"/>
    <MdKeyboardArrowDown className="arrow-down" size = "2rem"/> */}
  </div> 
  <div className="accordian-answer flex-vertical-inner">
           
           <div className="input-horizontal-flex">
             <input class="check" type="checkbox"
             checked={apple}
             onChange = {(e) => {
             dispatch({type:"SHOW_APPLE"})
              }}
             />
             <label>Apple</label>
           </div>
           <div className="input-horizontal-flex">
             <input class="check" type="checkbox"
                 checked={fossil}
                 onChange = {(e) => {
                 dispatch({type:"SHOW_FOSSIL"})
                 }}
             />
             <label>Fossil(5)</label>
           </div>
           <div className="input-horizontal-flex">
             <input class="check" type="checkbox"
                 checked={fastrack}
                 onChange = {(e) => {
                 dispatch({type:"SHOW_FASTRACK"})
                 }}
             />
             <label>Fastrack(5)</label>
           </div>
           <div className="input-horizontal-flex">
             <input class="check" type="checkbox"
                   checked={titan}
                   onChange = {(e) => {
                   dispatch({type:"SHOW_TITAN"})
                   }}
             />
             <label>Titan(5)</label>
           </div>
   
           </div>
           </div> 
            <hr/>
  {/* ------------------------------------------------------------------------------ */}
  <div className="accordian-item flex-vertical-outer">
  <div className="accordian-tap">
    <div className="filterbar__heading">Style</div>
    {/* <MdKeyboardArrowRight className="arrow-right" size = "2rem"/>
    <MdKeyboardArrowDown className="arrow-down" size = "2rem"/> */}
  </div> 
    <div className="accordian-answer flex-vertical-inner">
         
        
    <div className="input-horizontal-flex">
           <input class="check" type="checkbox" 
           checked={casual}
           onChange = {(e) => {
           dispatch({type:'SHOW_CASUAL'})
            }}
           />
           <label>Casual(2)</label>
         </div>
         <div className="input-horizontal-flex">
           <input class="check" type="checkbox" 
           checked={formal}
           onChange = {(e) => dispatch({type:'SHOW_FORMAL'})}
           />
           <label> Formal(7) </label>
         </div>
         <div className="input-horizontal-flex">
           <input class="check" type="checkbox"
           checked={digital}
           onChange = {(e) => dispatch({type:'SHOW_DIGITAL'})}
           />
           <label>Smart Watches(2)</label>
         </div>
         <div className="input-horizontal-flex">
           <input class="check" type="checkbox" 
           checked={sports}
           onChange = {(e) => {
           dispatch({type:"SHOW_SPORTS"})
            }}
           />
           <label>Sports(4)</label>
         </div>
         </div>
         </div>
    
          <hr/>
          {/* ---------------------------------------------- */}

  <div className="accordian-item flex-vertical-outer">
  <div className="accordian-tap">
    <div className ="filterbar__heading">Discount</div>
    {/* <MdKeyboardArrowRight className="arrow-right" size = "2rem"/>
    <MdKeyboardArrowDown className="arrow-down" size = "2rem"/> */}
  </div> 
    <div className="accordian-answer flex-vertical-inner">
            
    <div className="input-horizontal-flex">
                  <input className = "radio" type="radio" value="10" name="discount" 
                  onChange = {() => dispatch({type:"DISCOUNT" ,payload: "ABOVE_10"})}
                  />
                  <label>10% and above</label>
                </div>
                <div className="input-horizontal-flex">
                  <input className = "radio" type="radio" value="20" name="discount"
                  onChange = {() => dispatch({type:"DISCOUNT" ,payload: "ABOVE_20"})}
                  
                  />
                  <label>20% and above</label>
                </div>
                <div className="input-horizontal-flex">
                  <input className = "radio" type="radio" value="30" name="discount"
                  onChange = {() => dispatch({type:"DISCOUNT" ,payload: "ABOVE_30"})}
                  
                  /> 
                  <label>30% and above</label>
                </div>
                <div className="input-horizontal-flex">
                  <input className = "radio" type="radio" value="40" name="discount"
                  onChange = {() => dispatch({type:"DISCOUNT" ,payload: "ABOVE_40"})}
                  
                  />
                  <label>40% and above</label>
                </div>
                <div className="input-horizontal-flex">
                  <input className = "radio" type="radio" value="50" name="discount" 
                  onChange = {() => dispatch({type:"DISCOUNT" ,payload: "ABOVE_50"})}
                  
                  />
                  <label>50% and above</label>
                </div>
              </div>
              </div>
              <hr/>
    </div>
    
    </>
  )
}
export {Filterbar}