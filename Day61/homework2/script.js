function isValidCoupon(couponCode,totalAmount){
    if(couponCode == "LILSALE"){
        return true
    }
    else if(couponCode == "SALE" || "BIGSALE"){
        if (totalAmount >= 50){
            return true
        } 
        else{
            return false
        }
    }
}

console.log(isValidCoupon("LILSALE",30))