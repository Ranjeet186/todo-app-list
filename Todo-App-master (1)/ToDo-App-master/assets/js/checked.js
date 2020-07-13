//To change the color of category when window loads
window.addEventListener('load',function(){
    var p = document.getElementsByClassName('ctgs');
    //console.log(p);
   console.log(p.length)
    for(let i=0;i<p.length;i++){
        //console.log(p[i].innerHTML.toLocaleLowerCase());
        val = document.getElementsByClassName('available_category_p');
        console.log(val[i].innerHTML.toLocaleLowerCase());
        if(val[i].innerHTML.toLocaleLowerCase()=='personal'){
            p[i].style.backgroundColor="green"; 
        }
        else if(val[i].innerHTML.toLocaleLowerCase()=='family'){
            p[i].style.backgroundColor='blue';
        }
        else if(val[i].innerHTML.toLocaleLowerCase()=='medical'){
            p[i].style.backgroundColor="red";
        }
        else if(val[i].innerHTML.toLocaleLowerCase()=='work'){
            p[i].style.backgroundColor='maroon';
        }
        
    }
});




//To style the elements when checkbox is clicked

function track(){
    console.log('function called');
var agreed = document.getElementsByClassName('agreed');
for(let i=0;i<agreed.length;i++){
    var p = document.getElementsByClassName('lsts');
    if (agreed[i].checked==true){
        //p[i].style.textDecoration='line-through';
        p[i].style.textDecoration='line-through'
    }
    else{
        p[i].style.textDecoration='none'
    }
}
}
