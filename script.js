function fibonacci(num) {
// your code here
	let no1=0;
	let no2=1;
	let sum=0;
	while(true){
	 if(num==0){
		 console.log(sum)
		 break;
	 }
		sum=no1+no2;
		no1=no2;
		no2=sum;
		num--;
	}
}

module.exports = fibonacci;
