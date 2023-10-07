let size=prompt("Enter the number of element")
let a=[]

for(i=0;i<size;i++){
    a[i]=prompt("Enter the "+(i+1)+" value")
}

document.write(a+"<br><br>")

let callback=(arr,iter)=>{
    iter(arr)
   
}

function iterate(array){
    array.forEach(e=>{
    document.write(e+"<br>")
})

}

callback(a,iterate)

