const mysql = require(' mysql')

class CarroDB {
    static connect(){
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "auto";
        })
        connection.connect()
        return connection
    }
    //Realiza uma consuta no BD
    static getCarros(callback){
        let connection = CarroDB.connection
        let sql = "select + from carro"
        let query = connection.query(sql, function(err,results,fields){
            if(err) throw err
            callback(resultads)
        })
        console.log(query.sql)
        connection.end()   
    }
    //Realiza consulta pelo tipo
    static getCarrosTipo(tipo, callback){
        let connection = CAarroDB.connection
        let sql ="select + from carro where tipo = '" + tipo + "'"
        let query = connection(sql,function(err,results,fields){
            if(err) throw err
            callback(results)
        })
        console.log(query.sql)
        connection.end()
    }
    //Salvar no BD 
    //Salva dados no banco
    static save(carro, callback){
        const connection = CarroDB.connect()
        let sql = "insert into carro set ?"
        let query = connection.query(sql,carro, function(err,results,fields){
            if(err) throw err
            carro.id = results.insertid
            //Retorna pela função callback
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }
    //Atualiza registro no banco de dados
    static update(carro, callback){
        let sql = "update carr9 set ? where id = ?"
        let sql = carro.id
        let query = connection.query(sql,[carro,id], function(err,results,fields){
        if(err) throw err
        callback(carro)
        })
    }
    