const form = document.getElementById('form-cal');
let name1 = document.getElementById('name1') ;

let name2 = document.getElementById('name2') ;

form.addEventListener('submit', function(e){
    let pattern=/^[a-zA-Z]+$/;
    if((!isNaN(name1.value)) && (!isNaN(name2.value))){
      let mes='Please Enter Valid Name';
      document.getElementById('error').innerHTML+=mes;
      setTimeout(function(){document.getElementById('error').innerHTML= " ";}, 3000);
        }
    
     else if(name1.value.match(pattern) && name2.value.match(pattern)){

 
         let min=90;
         let max=101;
         randomnum=Math.floor(Math.random()*(+max-+min)+min);
         let html='<strong>' + name1.value + ' Loves ' + name2.value +': '+ randomnum+'%'+'</strong>';
        //  document.getElementById('result').innerHTML+=html;

         setTimeout(function(){ document.getElementById('result').innerHTML = " ";}, 3000);
         
          localStorage.setItem("lovepercent",html);
        
          document.getElementById("result").innerHTML = localStorage.getItem("lovepercent");
          console.log(localStorage);
      
        
        //  console.log(html)
   
    

    }
    else{
      document.getElementById('error').innerHTML+='Please Enter Valid Name';
      setTimeout(function(){document.getElementById('error').innerHTML= " ";}, 3000);

    }
    
   
    
    

     name1.value='';
     name2.value='';
    


    e.stopPropagation();
     e.preventDefault();
     //caniuse.com
     //localstorage
    
});