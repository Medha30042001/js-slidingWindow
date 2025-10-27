//gpt approach

function findSubarrayWithSumK(arr, n, k){
  let left = 0, sum = 0, flag=false;
  for(let right = 0; right<n; right++){
    sum += arr[right];
    
    while(sum>k && left<=right){
      sum -= arr[left];
      left++;
    }
    
    if(sum == k){
      flag=true; break;
    } 
  }
  if(flag) console.log('Yes');
  else console.log('No');
}
