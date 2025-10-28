//gpt and me

function maxFamiliesWithDiversity(n, k, arr) {
  arr.sort((a, b) => a - b);
  let left = 0, right = 0, max = 0, currentCount = 0;
  
  while(right < n){
    while(arr[right] - arr[left] > k){
      left++;
    }
    currentCount = right-left+1;
    if(currentCount > max){
      max = currentCount;
    }
    right++;
  }
  console.log(max);
}
