const SequelizeAuto = require('sequelize-auto')
const auto = new SequelizeAuto("test", "root", "password", {
    host: "localhost",
    port: 3306,
    dialect: 'mysql',
    additional: {
        timestamps: false,
        freeTableName: true
    }
});

auto.run((err) => {
    if (err) throw err;

    //console.log(auto.tables); // table list
    //console.log(auto.foreignKeys); // foreign key list
});

module.exports = auto