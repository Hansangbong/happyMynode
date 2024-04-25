const mysql = require('mysql');



var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'gkstkdqhd123',
    database: 'hsb'
});





module.exports = {
    init: function () {
        return connection;
    },
    connect: function(connection) {
        connection.connect(function(err) {
            if(err) {
                console.error('mysql 연결 에러 : ' + err); 
            } else { 
                console.log('mysql cennected!!');
            }
        });
    }
};
