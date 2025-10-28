//gpt

function countEvenSumSubarrays(arr, n) {
  let even = 1, odd = 0, sum = 0, count = 0;
  for(let i=0; i<n; i++){
    sum+=arr[i];
    if(sum%2===0){
      count+=even;
      even++;
    }else{
      count+=odd;
      odd++;
    }
  }
  console.log(count);
}

// function countOddSumSubarrays(arr, n) {
//   let even = 1, odd = 0, sum = 0, count = 0;
//   for(let i=0; i<n; i++){
//     sum+=arr[i];
//     if(sum%2===0){
//       count+=odd;
//       even++;
//     }else{
//       count+=even;
//       odd++;
//     }
//   }
//   console.log(count);
// }
