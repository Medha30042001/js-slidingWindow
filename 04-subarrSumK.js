//gpt and me

// Function to count the number of subarrays with sum less than M
function countSubarraysWithSumLessThanM(arr, n, m) {
  let left = 0, sum = 0, count = 0;
  for(let right = 0; right<n; right++){
    sum+=arr[right];
    
    while(sum>=m && left<=right){
      sum-=arr[left]
      left++;
    }
    count += right-left+1;
  }
  console.log(count);
}
