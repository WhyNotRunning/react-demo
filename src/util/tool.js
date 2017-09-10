
import * as config from './config';

const {target} = config;
export const tool = {};

tool.paramType = data => {
	let paramArr = [];
	let paramStr = '';
	for (let attr in data) {
		paramArr.push(attr + '=' + data[attr]);
	}
	paramStr = paramArr.join('&');
	paramStr = '?' + paramStr;
	return paramStr
}