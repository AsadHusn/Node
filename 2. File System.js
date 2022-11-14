fs = require('fs')

// synchronous call
folder = fs.readdirSync('./')


// async call
folder = fs.readdir('./', (error, files)=> {
    if(error) console.log(error)
    else console.log(files)
})
