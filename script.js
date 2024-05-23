function fibonacci(num) {
// your code here
	  if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 0; // Ensure it returns 0 for n = 1 based on your test expectation
    } else if (num === 2) {
        return 1;
    }

    let a = 0, b = 1;
    for (let i = 3; i <= num; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
}

module.exports = fibonacci;
