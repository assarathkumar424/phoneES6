class phone{
    constructor(num){
        this.num=num;
    }
    call(){
        var tonum=getNumber("enter number to which you want to call");
        alert('calling from '+this.num+' to '+tonum); 
    }
    sms(){
        var tonum=getNumber("enter number to which you want to message");
        var msg=prompt("enter the message");
        alert('messaging from '+this.num+' to '+tonum+" as=> "+msg);
    }
}

class smart extends phone{
    constructor(num,email){
        super(num);
        this.email=email;
    }
    mail(){
        var tomail=getEmail("enter the mail id to which you want to mail");
        var msg=prompt("enter the message");
        alert('mailing from '+this.email+' to '+tomail+" as=> "+msg);
    }
}

class android extends smart{
    constructor(num,email){
        super(num,email);
    }
    googleduo(){
        var tomail=getEmail("enter the mail id to which you want to make video call on googleduo");
        alert('video calling via googleduo from '+this.email+' to '+tomail);
    }
}
class ios extends smart{
    constructor(num,email){
        super(num,email);
    }
    facetime(){
        var tomail=getEmail("enter the mail id to which you want to make video call on faetime");
        alert('video calling via facetime from '+this.email+' to '+tomail);
    }
}
class windows extends smart{
    constructor(num,email){
        super(num,email);
    }
    skype(){
        var tomail=getEmail("enter the mail id to which you want to make video call on skype");
        alert('video calling via skype from '+this.email+' to '+tomail);
    }
}

class basic extends phone{
    constructor(num){
        super(num);
    }
}

class single extends basic{
    constructor(num){
        super(num);
    }
}

class duo extends basic{
    constructor(num1,num2){
                super();
        this.num1=num1;
        this.num2=num2;
        console.log(this.num);
        console.log(this.num1);
        console.log(this.num2);
    }
    sms(){
        while(true){
            var sim=prompt("enter the sim on which you want to call \"sim1\" or \"sim2\"");
            if(sim.toLowerCase()==="sim1"){
                this.num=this.num1;
                break;
            }
            else if(sim.toLowerCase()==="sim2"){
                this.num=this.num2;
                break;
            }
            else{
                alert('enter the correct sim');
            }
        }
        super.sms();
    }
    call(){
    while(true){
    var sim=prompt("enter the sim on which you want to call \"sim1\" or \"sim2\"");
    if(sim.toLowerCase()==="sim1"){
        this.num=this.num1;
        break;
    }
    else if(sim.toLowerCase()==="sim2"){
        this.num=this.num2;
        break;
    }
    else{
        alert('enter the correct sim');
    }
    }
    super.call();
}
}

function singlee(){
    var num=getNumber("enter the number");
    singleobj=new single(num);
    var arr=[];
    arr[0]="call";
    arr[1]="sms";
    createbutton(arr,"singleobj.");  
}

function duoo(){
    var num1=getNumber("enter the first number");
    var num2=getNumber("enter the second number");
    duoobj=new duo(num1,num2);
    var arr=[];
    arr[0]="call";
    arr[1]="sms";   
    createbutton(arr,"duoobj.");   
}

function androidd(){
    var num=getNumber("enter the number");
    var email=getEmail("enter the mail");
    androidobj=new android(num,email);
    var arr=[];
    arr[0]="call";
    arr[1]="sms";
    arr[2]="mail";
    arr[3]="googleduo";
    createbutton(arr,"androidobj.");  
}


function ioss(){
    var num=getNumber("enter the number");
    var email=getEmail("enter the mail");
    iosobj=new ios(num,email);
    var arr=[];
    arr[0]="call";
    arr[1]="sms";
    arr[2]="mail";
    arr[3]="facetime";
    createbutton(arr,"iosobj.");  
}

function windowss(){
    var num=getNumber("enter the number");
    var email=getEmail("enter the mail");
    windowsobj=new windows(num,email);;
    var arr=[];
    arr[0]="call";
    arr[1]="sms";
    arr[2]="mail";
    arr[3]="skype";
    createbutton(arr,"windowsobj.");
}




function createbutton(arr,objstr){
    document.getElementById("detail").innerHTML="";
    for(var i=0;i<arr.length;i++){
        var button=document.createElement("input");
        button.type="button";
        button.value=arr[i];
        button.setAttribute("onclick",objstr+arr[i]+"()");
        document.getElementById("detail").appendChild(button);
        document.getElementById("detail").appendChild(document.createElement("br"));
        document.getElementById("detail").appendChild(document.createElement("br"));
    }
}

function checknumber(num){
    var pat=/[0-9]{10}$/;
    return (pat.test(num));
}

function checkmail(mail){
    var pat=/[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,3}$/;
    return (pat.test(mail));
}
function getNumber(s){
    while(true){
        var num=prompt(s);
        if(checknumber(num)){
            return num;
        }
        alert('enter correct number');
    }
}

function getEmail(s){
    while(true){
        var mail=prompt(s);
        if(checkmail(mail)){
            return mail;
        }
        alert('enter correct mail');
    }
}