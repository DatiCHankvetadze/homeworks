function isTeenager(age,hasPermission){
    if(age < 18 || hasPermission == false){
        return false
    }else if(age >= 18 && hasPermission == true){
        return true
    }
}

console.log(isTeenager(18,true))