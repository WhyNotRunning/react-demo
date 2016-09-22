function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		//严格模式下callee会报错
		return num * arguments.callee(num - 1);
	}
}

function outer() {
	inner();
}

function inner() {
	//caller保存着调用当前函数的函数引用，全局作用域为空
	alert(inner.caller);
	alert(arguments.callee.caller);
}
outer();
/*call和apply的用途为在特定的作用域中调用函数,实际上等于设置函数体内this对象的值
 *apply()方法接收两个参数：一个函数作用域，一个参数数组，其中第二个参数可以是Array的实例，也可以是arguments对象
 *call()方法第一个参数this值，变化的参数都直接传递给函数
 */
function sum(n1, n2) {
	return n1 + n2;
}

function callSum(n1, n2) {
	return sum.call(this, n1, n2);
}

function applySum(n1, n2) {
	return sum.apply(this, arguments); //传入arguments
}

function applySumA(n1, n2) {
	return sum.apply(this, [n1, n2]); //传入数组
}
//扩充函数运行的作用域
window.color = 'red';
var o = {
	color: 'blue'
};

function sayColor() {
	alert(this.color);
}
sayColor(); //red
sayColor(this); //red
sayColor(window); //red
sayColor(o); //blue