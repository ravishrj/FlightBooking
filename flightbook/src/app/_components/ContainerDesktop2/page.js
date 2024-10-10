const Container2=()=>{
   return <div className="container">
   <div className="usp-vacation">
     <ul className="usp usp-vac">
       <li>
         <div>
           <span>
             <img src="/Content/images/p1.png" />
           </span>
           <span>
             <b>Unbeatable Packaged Deals</b> Exclusive holiday deals at
             great-offered prices with Low-Fare Promise.
           </span>
         </div>
       </li>
       <li>
         <div>
           <span>
             <img src="/Content/images/p3.png" />
           </span>
           <span>
             <b>Secure &amp; Transparent Bookings</b>100% secure transactions.
             Transparent booking terms at no hidden cost.
           </span>
         </div>
       </li>
       <li id="unpublisheDeal" className="unpublisheDeal 22">
         <div className="gredient">
           <span className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
             <span className="coccoc-alo-ph-circle" />
             <span className="coccoc-alo-ph-circle-fill" />
             <span className="coccoc-alo-ph-img-circle" />
           </span>
           <span className="callText">
             Call Only Offer: Save up to $30 on Unpublished Deals{" "}
             <a href="tel:1-833-914-2482">1-833-914-2482</a>
           </span>
           <figure>
             <img src="/Content/images/call-strip-girlImg.png" />
           </figure>
         </div>
       </li>
     </ul>
   </div>
   <div className="fly-now" style={{ display: "none" }}></div>
 </div>
 
}
export default Container2;