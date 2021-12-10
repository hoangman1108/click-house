const ClickHouse = require('@apla/clickhouse')
const fs = require('fs');

const ch = new ClickHouse({
  host: "localhost",
  dataObjects: true,
  readonly: false,
  queryOptions: {
    database: "SM",
  },
});

const pathFile = './user_info.csv';
const newPathFile = './user_info_new.csv';

ch.query("DROP TABLE IF EXISTS SM.users");
ch.query("CREATE TABLE SM.users ( `UserId` UInt32, `Account` String, `Telephone` String, `Name` String, `Title` String, `Company` String, `Department` String, `RegisterTime` DateTime('Europe/London'), `Role` String, `Region` String, `Preference` String, `UserType` String, `RoleExpireTime` Date32, `UpdateTime` DateTime('Europe/London'), `Expert` String, `Status` String, PRIMARY KEY(UserId) ) ENGINE = MergeTree()");

setTimeout(()=>{
  let csvContent = fs.readFileSync(pathFile).toString().split('\n');
  csvContent.shift();
  csvContent = csvContent.join('\n');
  
  fs.writeFileSync(newPathFile, csvContent);
  
  
  // done
  const readableStream = fs.createReadStream(newPathFile)
  const writableStream = ch.query('INSERT INTO SM.users FORMAT CSV', (_err, _result) => {
    fs.unlinkSync(newPathFile);
  })
  readableStream.pipe(writableStream);
}, 300);

setTimeout(() => {
  ch.query('SELECT * FROM SM.users', (_err, result) => {
    console.log(result);
  });
}, 500);

