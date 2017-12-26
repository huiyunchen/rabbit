var dbManger = require('./dbManger');
var mData = new Array();
var readyData = function(index, cb) {
	console.log('ready start');
	if (mData.hasOwnProperty(index)) {
		console.log('has index');
		cb();
	} else {
		console.log('no has index');
		dbManger.queryContents(index, function(res){
			console.log('queryed and has res');
			mData[index] = res;
			cb();
		});
	}
}
var getData = function(index) {
	return mData.hasOwnProperty(index) ? mData[index] : [];
}

exports.readyData = readyData;
exports.getData = getData;