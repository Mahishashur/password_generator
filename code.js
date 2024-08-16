function Generated_Password(Length1,Lower_Case,Upper_Case,Include_Number,Include_Symbol){
    const Lower_Case_char="abcdefghijklmnopqrstuvwqyxz";
    const Upper_Case_char="ABCDEFGHIJKLMNOPQRSTUVWQYXZ";
    const Number_char="1234567890";
    const Symbol_char="!@#$%^&*():=?><{}[]|*/+-";
    let allowedchars = "";
    let password="";
    allowedchars +=Lower_Case?Lower_Case_char:"";
    allowedchars +=Upper_Case?Upper_Case_char:"";
    allowedchars +=Include_Number?Number_char:"";
    allowedchars +=Include_Symbol?Symbol_char:"";
    if(Length1<=0){
        return `(password length must be at least 1)`;
    }
    if(allowedchars.length===0){
        return `(At least 1 set of character need to be selected)`;
    }
    for(let i=0;i<Length1;i++){
        const random_index=Math.floor(Math.random()*allowedchars.length);
        password += allowedchars[random_index];
    }
    return password;

}
    const Length1 =8;
    const Lower_Case=true;
    const Upper_Case=true;
    const Include_Number=true;
    const Include_Symbol=true;
    const password= Generated_Password(Length1 ,Lower_Case,Upper_Case,Include_Number,Include_Symbol);
    console.log(`Generated Password:${password}`);
