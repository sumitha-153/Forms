
const msg=document.getElementById("msg")
const greeting=document.getElementById('greeting')

const len=localStorage.length;
console.log("length:"+len);
if(len==1){
        const data=JSON.parse(localStorage.getItem(len))
        console.log(localStorage.key(data[data.length-1]));
        const arraydata=data
        console.log("arraydata: " + arraydata);
        for( const keys in arraydata){

        if(keys==="First_name"){
            let name=document.createElement('p')
            let msgs=document.createElement('p')
            name.textContent="Welcome, "+arraydata[keys]+"! You have registered successfully!!" 
            msgs.textContent="Kindly check your details"
            msg.appendChild(name)
            msg.appendChild(msgs)
        }
        
        else{
            let list=document.createElement("li")
            list.textContent=keys+": "+arraydata[keys]
            msg.appendChild(list)
            console.log(keys +": "+ arraydata[keys]);
        }
    }
}
const closebtn=document.getElementById('closebtn')
closebtn.addEventListener('click', (e)=>{
    let para=document.createElement('p')
    para.textContent="Thank you !!!"
    greeting.appendChild(para)
});




