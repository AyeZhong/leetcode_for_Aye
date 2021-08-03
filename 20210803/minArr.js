const arr = [2,6,4,8,10,9,15]
const findUnsortedSubarray = function(nums) {
    let num = 0
    let copylist = []
    for (let s = 0; s < nums.length; s++ ) {
        copylist[s] = nums[s]
    }
    copylist = copylist.sort((a, b) => a - b)
    for (let i = 0 ; i < copylist.length;) {
        if (copylist[i] === nums[i]) {
            i++
            num += 1
        } else if (copylist[i] !== nums[i]) {
            for (let j = copylist.length - 1; j >= 0 ; ) {
                if (copylist[j] === nums[j]) {
                    j--
                    num += 1
                } else {
                    return nums.length - num
                }
            }
        }
    }
    return 0
};

console.log(findUnsortedSubarray(arr))