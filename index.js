//import json-server
const jsonserver=require('json-server')


//2 create a server for mediaapp
const mediaappserver=jsonserver.create()

//3 setup path for db.json file
const router=jsonserver.router('db.json')

//4 return a middleware used by json server

const middleware=jsonserver.defaults()

//5 setup a port number

const port=process.env.PORT || 4000

//6  use middleware in app

mediaappserver.use(middleware)
mediaappserver.use(router)

//7 to listen for resolving request
mediaappserver.listen(port,()=>{
    console.log('listening on port'+port);
})//import json-server
