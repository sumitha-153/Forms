let count=0;
const btn=document.getElementById('btn')
btn.addEventListener('click' ,(Event)=>{
    Event.preventDefault();
    
    const fname=document.getElementById("fname");
    const lname=document.getElementById("lname")
    const gender=document.getElementById("gender")
    const dob=document.getElementById("dob")

    const address=document.getElementById("address")
    const num=document.getElementById("num")
    const email=document.getElementById("email")


    const clgname=document.getElementById("clgname")
    const dep=document.getElementById("dep")
    const year=document.getElementById("year")  

    fname.addEventListener('focus', () => {
        document.getElementById("nameerror").textContent = "";
        fname.style.borderColor = '';
    });
    lname.addEventListener('focus', () => {
        document.getElementById("nameerror").textContent = "";
        lname.style.borderColor = '';
    });
    gender.addEventListener('focus', () => {
        document.getElementById("gendererror").textContent = "";
        gender.style.borderColor = '';
    });
    address.addEventListener('focus', () => {
        document.getElementById("addresserror").textContent = "";
        address.style.borderColor = '';
    });
    document.getElementById("dob").addEventListener('focus', () => {
        document.getElementById("doberror").textContent = "";
        document.getElementById("dob").style.borderColor = '';
    });
    clgname.addEventListener('focus', () => {
        document.getElementById("clgerror").style.display = "none";
        document.getElementById("clgname").style.borderColor = '';
    });
    dep.addEventListener('focus', () => {
        document.getElementById("deperror").style.display = "none";
        document.getElementById("dep").style.borderColor = '';
    });
    year.addEventListener('focus', () => {
        document.getElementById("yrerror").style.display = "none";
        document.getElementById("year").style.borderColor = '';
    });
    num.addEventListener('focus' ,()=>{
        document.getElementById('numerror').style.display='none'
        num.style.borderColor=''
    })
    email.addEventListener('focus' ,()=>{
        document.getElementById('emailerror').style.display='none'
        email.style.borderColor=''
    })


    localStorage.clear()

    if(fname.value !==""  && fname.value.length >=3 && address.value.length>=5 && dob.value!==""
      &&  num.value.length === 10 && gender.value!=="" && clgname.value !=="" &&
       year.value !=="" && dep.value!==""){
        const personal_obj={
            First_name:"",
            Last_Name:"",
            DOB:"",
            Gender:"",
            Address:"",
            Number:"",
            Email:"",
            College_name:"",
            Department:"",
            Year:""
        }
        //pushing input data into arrays
        const arrayvalues=[fname.value]
        const values=[lname.value,dob.value,gender.value,address.value,num.value,email.value,clgname.value,dep.value,year.value]
        arrayvalues.push(...values)   
        
        //assinging the values to object using fo loop
        let i=0;
        for(const keys in personal_obj){  
            personal_obj[keys]=arrayvalues[i];
            
            i++;
        }
        count++;
        localStorage.setItem(count,JSON.stringify(personal_obj)) 
        window.location.href="greetings.html"
    }else{
            Event.preventDefault()
            if(fname.value === ""|| fname.value.length <=3){
                nameerror.textContent="Name should be empty or length should be less than 3"
                nameerror.style.display='block'
                fname.style.borderWidth='0.5px'
                fname.style.borderColor='red'
            }
            if (gender.value==="") {
                gendererror.textContent="Please select the option"
                gendererror.style.display='block'
                gender.style.display='0.5px'
                gender.style.borderColor='red'
            }
            if(dob.value===""){
                doberror.textContent="Please fill out the field"
                doberror.style.display-'block'
                dob.style.display='0.5px'
                dob.style.borderColor='red'
            }
            if(address.value.length <=5 || address.value ===""){
                addresserror.textContent="Address field should not be empty"
                addresserror.style.display='block'
                address.style.borderWidth='0.5px'
                address.style.borderColor='red'
            }    
            if(num.value.length <10 || num.value.length > 10 || num.value ===""){
                numerror.textContent="Enter valid Phone number"
                numerror.style.display='block'
                num.style.borderWidth='0.5px'
                num.style.borderColor='red'
            }
            if(email.value === ""){
                mailerror.textContent="Field should not be empty"
                mailerror.style.display='block'
                email.style.borderWidth='0.5px'
                email.style.borderColor='red'
            }
            if(clgname.value ===""){
                        clgerror.textContent="Field should be empty"
                        clgerror.style.display='block' 
                        clgname.style.borderWidth='0.5px'
                        clgname.style.borderColor='red'        
                    }
            if(dep.value === ""){
                        deperror.textContent="Select your department"
                        deperror.style.display='block'
                        dep.style.borderWidth='0.5px'
                        dep.style.borderColor='red'
                    }
                    if(year.value ===""){
                        yrerror.textContent="Field should not be empty"
                        yrerror.style.display='block'
                    year.style.borderWidth='0.5px'
                    year.style.borderColor='red'
                    }
        }           
    });
  
       
  

    





