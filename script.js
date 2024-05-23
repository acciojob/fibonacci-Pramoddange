function fibonacci(num) {
// your code here
	if(num>1){
	return num*fibonacci(num-1);
}else{
		return 1;
}
}

module.exports = fibonacci;
