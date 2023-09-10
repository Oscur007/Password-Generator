const input=document.getElementById('inputbox')
let charecters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&_+-*/<>.,(){}[]|;?";
function gen()
{
    let capital=0 , small=0 , number=0 , special=0 , i=0 , password="";
    while(i<8)
    {
        let index=Math.floor(Math.random()*87);
        password+=charecters[index];
        if(index<26)
        {
            capital++;
        }
        else if(index<52)
        {
            small++;
        }
        else if(index<62)
        {
            number++;
        }
        else
        {
            special++;
        }
        i++;
    }
    if(capital==0)
    {
        let index=Math.floor(Math.random()*26);
        password+=charecters[index];
        capital++;
    }
    if(small==0)
    {
        let index=Math.floor(Math.random()*26);
        password+=charecters[index+26];
        small++;
    }
    if(number==0)
    {
        let index=Math.floor(Math.random()*10);
        password+=charecters[index+52];
        number++;
    }
    if(special==0)
    {
        let index=Math.floor(Math.random()*25);
        password+=charecters[index+62];
        special++;
    }
    let flag=Math.floor(Math.random()*2);
    while(flag && password.length<=12)
    {
        let index=Math.floor(Math.random()*87);
        password+=charecters[index];
        flag=Math.floor(Math.random()*2);
    }
    input.value=password;
}
function refresh()
{
    let password="";
    input.value=password;
}