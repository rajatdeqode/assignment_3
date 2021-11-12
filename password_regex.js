const password="Rajat@12345"
const reg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

if(reg.test(password)){
    console.log("valid Password")
}else{
    console.log("Invalid Password")
}