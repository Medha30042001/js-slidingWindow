//my approach, gpt help

function minSumOfKConsecutive(N, K, arr) {
   let sum = 0;
   for(let i=0; i<K; i++){
     sum+=arr[i];
   }
   let min = sum;
   for(let j = 0; j<N-K; j++){
     sum+=arr[j+K]-arr[j];
     if(sum<min){
       min = sum;
     }
   }
   console.log(min);
}
