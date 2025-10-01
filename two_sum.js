let nums = [3,2,4], target = 6

function twoSum(){
  for(let i=0; i<nums.length-1; i++){
    if(nums[i] + nums[i+1] === target){
      console.log(i, i+1);
    }
  }
}

twoSum(nums, target);
