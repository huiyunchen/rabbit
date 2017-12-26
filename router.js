var dataCenter = require('./dataCenter');
var async = require('async');

var router = function(app) {
	app.get('/', function(req, res) {
		var tasks = [
			function (cb) {
				console.log('task start ');
				dataCenter.readyData(1, function() {
					console.log('ready end');
					cb(null, 1);//转到第2个任务
				});
			},
			function (arg, cb) {
				console.log('task start ' + arg);
				dataCenter.readyData(2, function() {
					console.log('ready end');
					cb(null, 2);//转到第3个任务
				});
			},
			function (arg, cb) {
				console.log('task end ' + arg);
				cb(null, 3);//转到最高的回调
			}
		];
		async.waterfall(tasks, function(err, results) {
			console.log('results' + results);
			res.render('index', {
				title: '首页',
				results: dataCenter.getData(1).concat(dataCenter.getData(2))
			});
		});
	});

	app.get('/detail', function(req, res) {
		res.render('detail', {
			title: '详情',
			results: []
		});
	});

}
exports.router = router;