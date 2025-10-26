//my approach

function maximumSum(k, arr){
  let sum=0;
  for(let i=0; i<k; i++){
    sum+=arr[i];
  }
  
  let max=-Infinity;
  for(let p=0; p<(arr.length-k); p++){
    sum += (arr[p+k] - arr[p]);
    if(sum > max) max = sum;
  }
  console.log(max);
}
