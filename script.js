function makeid(l) {
  // write your code here
	let alph = 'aAbbcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
	let nums = '0123456789';
	let max = alph.length-1,min=0,max2=nums.length-1,min2=0;
	let flag = true;
	let ans = '';
	for(let i=0;i<l;i++){
		let rand = Math.random();
		let index = Math.floor(rand*(max-min+1)+min);
		let index2 = Math.floor(rand*(max2-min2+1)+min2);
		if(flag){
			flag=false;
			ans += alph[index];
		}
		else
		{
			ans+=nums[index2];
			flag = true;
		}
	}
	return ans;
} 

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
