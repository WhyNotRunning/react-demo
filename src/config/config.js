export default (() => {
	window.$GLOBALCONFIG = {};
	+function (global) {
		// 本地开发打开的路径以及端口
		global.ctx = 'http://localhost:8080';

		// 用户登录信息
		global.ADMIN = {
			name: 'admin',
			password: 'admin',
		};

	}(window.$GLOBALCONFIG);
})()