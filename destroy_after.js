const bcrypt = require("bcrypt")
const fun = async ()=>{
    // const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash('12345678',"$2b$10$17HFGpgJphRSKAHaCDwOle")
    console.log(hash)
}
fun()