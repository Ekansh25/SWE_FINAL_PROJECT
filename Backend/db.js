const sql = require('msnodesqlv8');

const connectionString = "server=MAQ23606\\SQLEXPRESS;Database=SE_FINAL_DB;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

function getUsers(callback) {
    sql.query(connectionString, "SELECT * FROM [dbo].[User]", (err, rows) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, rows);
    });
}


module.exports = {
    getUsers
};
