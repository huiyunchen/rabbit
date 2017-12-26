var mysql = require('mysql');
var queryContents = function(index, cb) {
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'a123456',
		database : 'typecho'
	});	
	connection.connect();
	connection.query('SELECT cid,title from typecho_contents limit '+(index-1)*2+',2;', function (error, results, fields) {
		console.log('query');
		if (error) {
			console.log('query err', error);
			throw error;
		};
		cb(results);
		//��δ��봦�ڻص�����������ִ��
		console.log('query end');
	});
	connection.end();
}

exports.queryContents = queryContents;