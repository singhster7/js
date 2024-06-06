const fs = require('fs/promises');
const filepath = __dirname + '/database/data.json';


function getData(filePath) {//fayda isem higa kyoki jabbhi file read karna hoga tab getdata call ho jayega
    return new Promise(async (resolve, reject) => {
        try {
            let data = await fs.readFile(filePath);
            data = JSON.parse(data);
            resolve(data);
        } 
        catch (err) {
            reject(err);
        }
    })
}

getData(filepath) //yaha agar data hai to data print hoga nhi hai to err print hoga aisa without promises wale me ppossible nhi tha
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
