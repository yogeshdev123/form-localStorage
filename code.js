/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let fo=document.createElement("form");
        let laus=document.createElement("label");
        let bre=document.createElement("br");
        let parag=document.createElement("span");
        let brek=document.createElement("br");
        parag.innerText="*UserName Already Exist"
        parag.style.color="red"
        parag.style.display="none";
        brek.style.display="none"
        laus.setAttribute("for","user");
        let nam=document.createElement("input");
        nam.setAttribute("id","user");
        document.body.appendChild(fo);
        fo.appendChild(laus);
        fo.appendChild(bre);
        
        fo.appendChild(nam);
        fo.appendChild(brek);
        fo.appendChild(parag);
        
        laus.innerHTML="UserName :";
       
        let lapla=document.createElement("label");
        fo.appendChild(document.createElement("br"));
        lapla.setAttribute("for","pla");
        let pla=document.createElement("input");
        pla.setAttribute("id","pla");
        fo.appendChild(lapla);
        fo.appendChild(document.createElement("br"))
        fo.appendChild(pla);
        lapla.innerHTML="Place :";
        let sub=document.createElement("input");
        sub.setAttribute("type","submit");
        fo.appendChild(document.createElement("br"))
        fo.appendChild(sub);
        let set=document.createElement("input");
        
        set.setAttribute("type","reset");
        fo.appendChild(set);
        set.innerHTML="Reset";
        set.addEventListener("click",(e)=>{
            localStorage.clear();
            let cla=document.querySelectorAll('.info');
            cla.forEach(el => el.remove());
        })
         let arr=[];
         let loco=localStorage.getItem("data");
         if(loco!==null){
            arr=JSON.parse(loco);
            for(let i in arr){
              reuse(i,arr);
         }
         }
       
        //  console.log( loco);
        function users(str){
            let res="";
            for(let i of str){
                if(i!=" "){
                    res+=i.toLowerCase();
                }
            }
            return res;
        }
        function isExist(chec,arr){
            for(let i of arr){
                if(chec==i.name)return true;
            }
            return false;

        }
         
        fo.addEventListener("submit",(e)=>{
            e.preventDefault();
            let chec=users(nam.value);
          
            if(isExist(chec,arr)){
                 parag.style.display="inline";
                 brek.style.display="block"
                return;}
                else{
        parag.style.display="none";
        brek.style.display="none"
                }
                if(nam.value==""){
                    parag.innerText="*please enter username"
                   parag.style.display="inline";
                 brek.style.display="block"
                    return ;
                }
            
            // if()
            
             let obj={
                username:nam.value,
                place:pla.value,
                name:chec
             }
             arr.push(obj)
             localStorage.setItem("userName",`${nam.value}`);
             localStorage.setItem("Place",`${pla.value}`);
            //  if()
             localStorage.setItem("data",`${JSON.stringify(arr)}`);
             reuse(arr.length-1,arr);
             
        })
        function reuse(el,aa){
         
             let div=document.createElement("div");
             div.setAttribute("class","info");
             div.style.border="solid 2px";
             div.style.backgroundColor="aqua";
             div.style.padding="30px";
             div.style.width="150px";
             document.body.appendChild(div);
             let par=document.createElement("p")
             let par2=document.createElement("p")
             div.appendChild(par);
             par.innerHTML="<span style=color:red;font-size:20px>Name </span>"+aa[el].username;
             div.appendChild(par2);
             par2.innerHTML="<span style=color:red;font-size:20px>Place </span>"+aa[el].place;
             let de=document.createElement("button");
             de.setAttribute("id",`${el}`);
             de.setAttribute("onclick",`fun(${el})`);
             de.innerHTML="delete";
             div.appendChild(de);};
             function fun(e){
                
                for(let i=e;i<arr.length-1;i++){
                    let swa=arr[i];
                    arr[i]=arr[i+1];
                    arr[i+1]=swa;
                }
                console.log(arr);
                arr.length=arr.length-1;
                localStorage.setItem("data",`${JSON.stringify(arr)}`);
                let deId=document.querySelectorAll('.info');
                
                deId.forEach(el => el.remove());
              
                for(let i in arr){
              reuse(i,arr);
         }
                
            console.log(arguments[0]);

             }
             

    </script>
</body>
</html>*/
