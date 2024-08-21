arr=["hello","World","this","is","a","test"]
arr1=[],j=0;
for(i=0;i<arr.length;i++){
    if(arr[i].startsWith("h")){
        arr1[j]=arr[i];
    }
    
}
console.log(arr1)

arr=["hello","World","this","is","a","test"]
for(i=0;i<arr.length;i++){
    if(!arr[i].includes("o")){
        console.log(arr[i])
    }
}//this is a test

arr=["hello","World","this","is","a","test"]
for(i=0;i<arr.length;i++){
        console.log(arr[i].at(0))
} //h W t i a t