let nums = [1,2,3,4];

function containsDuplicate(){ 
  let set = new Set();
  for(let i=0; i<nums.length; i++){
    if(!set.has(nums[i])){
      set.add(nums[i]);
    } else{
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate());
