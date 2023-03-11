const clear_=()=>{
    console.log('Clear Button')
    localStorage.clear();
}
const Button1=()=>{
    // console.log("Button-1");
    localStorage.setItem('name','Shakib Kahn');
}
const Button2=()=>{
    // console.log("Button-1");
    localStorage.setItem('Age','40');
}
const getnameage=()=>{
    console.log('Get info Button')
    const Name=localStorage.getItem('name');
    const Age=localStorage.getItem('Age');
    console.log(`Name: ${Name} and Age: ${Age}`)
}
const removenameage=()=>{
    localStorage.removeItem("name");
    localStorage.removeItem("Age");
}
const setobj=()=>{
    console.log('This is object Button')
    let obj1={
        firstName: 'Abraham',
        lastName: 'Lincoln'
    }

    let objstringfy=JSON.stringify(obj1);
    localStorage.setItem('person',objstringfy)
}

const getobj=()=>{
    console.log('Get Obj Button');
    const get=localStorage.getItem('person');
    const getobj=JSON.parse(get);
    console.log(getobj.firstName)
}

///Step-2

const round=document.getElementById('round');



const DisplayCount=()=>{
    let getCount=localStorage.getItem('count')
    if(getCount){
        round.innerHTML=`${getCount}`
    }else{
        round.innerHTML=0;
    }
   
    return getCount;
}
let Result=DisplayCount();
console.log('Result: '+Result)

let count=0;
if(Result>0){
    count=Result;
}else{
    count=0;
}

const addmore=()=>{
    // const get=round.innerHTML;
    // console.log(get);
    count++;
    localStorage.setItem('count',count);
    DisplayCount();
}


////Level-3
const DeleteName=document.getElementById('dn');
const SendName=document.getElementById('sn');
const DeleteEmail=document.getElementById('de');
const SendEmail=document.getElementById('se');
const DeleteMessage=document.getElementById('dm');
const SendMessage=document.getElementById('sm');
const Reset=document.getElementById('reset1');
const SendALL=document.getElementById('sendall');

SendName.addEventListener('click',()=>{
   // console.log('Send Name')
   const Name=document.getElementById('namefield').value;
   console.log(Name)
   localStorage.setItem('Name',Name)
})
SendEmail.addEventListener('click',()=>{
   // console.log('Send Name')
   const Email=document.getElementById('emailfield').value;
   console.log(Email)
   localStorage.setItem('Email',Email)
})
SendMessage.addEventListener('click',()=>{
   // console.log('Send Name')
   const Message=document.getElementById('messagefield').value;
   console.log(Message)
   localStorage.setItem('Message',Message)
})

Reset.addEventListener('click',()=>{
    localStorage.removeItem('Name')
    localStorage.removeItem('Email')
    localStorage.removeItem('Message')
})

DeleteName.addEventListener('click',()=>{
    localStorage.removeItem('Name')
 })
 DeleteEmail.addEventListener('click',()=>{
    localStorage.removeItem('Email')
 })
 DeleteMessage.addEventListener('click',()=>{
    localStorage.removeItem('Message')
 })

 SendALL.addEventListener('click',()=>{
    console.log('Send all')
    const Name_=document.getElementById('namefield').value;
    const Email_=document.getElementById('emailfield').value;
    const Message_=document.getElementById('messagefield').value;

    let user={
        Name: Name_,
        Email: Email_,
        Message: Message_
    }
    let User_=JSON.stringify(user);
    localStorage.setItem('user',User_);
 })

 const _Name=document.getElementById('namefield');
 const _Email=document.getElementById('emailfield');
 const _Message=document.getElementById('messagefield');
 const GetFromLocalStorage=()=>{
    const ComeBaby=localStorage.getItem('user');
    const UserDetail=JSON.parse(ComeBaby);
    console.log(UserDetail)
    _Name.value=UserDetail.Name;
    _Email.value=UserDetail.Email;
    _Message.value=UserDetail.Message;
 }
 GetFromLocalStorage();
