const  passwordValidation=(passwordInputValue:string)=>{
    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const lowercaseRegExp   = /(?=.*?[a-z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp   = /.{8,}/;

    const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
    const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
    const digitsPassword =      digitsRegExp.test(passwordInputValue);
    const specialCharPassword = specialCharRegExp.test(passwordInputValue);
    const minLengthPassword =   minLengthRegExp.test(passwordInputValue);
    let pasMsg ="";
    if(!minLengthPassword){
            pasMsg="Przynajmniej 8 znaków";
    }else if(!uppercasePassword){
            pasMsg="Przynajmniej 1 wielka litera";
    }else if(!lowercasePassword){
            pasMsg="Przynajmniej 1 mała litera";
    }else if(!digitsPassword){
            pasMsg="Przynajmniej 1 cyfra";
    }else if(!specialCharPassword){
            pasMsg="Przynajmniej 1 znak specjalny (#?!@$%^&*-)";
    }
    return (pasMsg==="" ? true :pasMsg);
}

const emailValidation=(emailInputValue:string)=>{
    const emailRegExp = /\S+@\S+\.\S+/;
    let emaMsg="";
    if (emailInputValue.length==0) {
            emaMsg="";
    }else if(!emailRegExp.test(emailInputValue)){
            emaMsg="Niepoprawny adres email";
    }
    return (emaMsg==="" ? true :emaMsg + emailInputValue.length);
}

const nameValidation=(nameInputValue:string)=>{
    let namMsg="";
    if(nameInputValue.length>20){
            namMsg="Nazwa nie może być dłuższa niż 20 znaków"
    }
    return namMsg==="" ? true : namMsg;
}



export {passwordValidation,emailValidation, nameValidation};