const fetch = require('node-fetch');

var http = require('http');
var querystring = require('querystring');

var $ = require('jquery');
//var jsdom = require('jsdom');

//const url = "140.119.19.108"
global.Headers = fetch.Headers;

module.exports = function(app, db) {
//    var options = {
//        host: url,
//        port: 3000,
//        path: '/api/Bike',
//        method: 'GET'
//    };

    /*app.get('/', function(req, res) {
        res.render('header');
    })*/
    app.get('/', function(req, res) {
       
        console.log("I am in root!");
        
        var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };
        var myHeaders = new Headers();
        //傳出去的body要跟這邊宣告的格式型態一樣
        myHeaders.append( "Content-Type","application/json");
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity", { 
            method: 'POST',
            body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': "application/json; charset=utf-8" ,
                     //"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg"},
        })
           .then(res => res.text())//回傳tx ID
           .then(text => res.send(text))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
        
        
        
//        var datasend={
//            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
//            fcn : "initLedger",
//            args : [""]
//        };
//
//        $.ajax({
//            url: "http://localhost:4000/channels/mychannel/chaincodes/unity",
//            method: "POST",
//            dataType: "json",
//            contentType: "application/json; charset=utf-8",
//            data: JSON.stringify(datasend),
//            beforeSend: function(xhr) {
//                 xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzE5NTIwNzIsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzE5MTYwNzJ9.S9RFohVI3oiyO7NbKEgCTgQs8CX66gc_DjzLW6OG2zM")
//            }, success: function(data){
//                alert(data);
//                //process the JSON data etc
//                res.send(data);
//            }, error: function (jqXHR, textStatus, errorThrown) {
//
//            }
//        });
//        res.render('header');
        //res.send("hello");

        // curl -s -X POST \
        // http://localhost:4000/channels/mychannel/chaincodes/mycc \
        // -H "authorization: Bearer <put JSON Web Token here>" \
        // -H "content-type: application/json" \
        // -d '{
        //     "peers": ["peer0.org1.example.com","peer1.org1.example.com"],
        //     "fcn":"move",
        //     "args":["a","b","10"]
        // }'

    });
    
    app.get('/createUser', function(req, res) {

        res.render('createUser');
    });
    
    app.post('/createUser', function(req, res) {
        //var arguments={ Key:String(req.body.Key), Name:String(req.body.Name), Phone:String(req.body.Phone),Role:String(req.body.Role)};
        var arguments=[ String(req.body.Key), String(req.body.Name), String(req.body.Phone),String(req.body.Role)];
        
        console.log("I am in createUser!");
        
        var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "createUser",
            //args : ["POC15","Danny","0958571309","farmer"]
            args : arguments
        };
        var myHeaders = new Headers();
        myHeaders.append( "Content-Type","application/json");
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity", { 
            method: 'POST',
            body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
        })
           .then(res => res.text())//回傳tx ID
           .then(text => res.send(text))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
        
        res.redirect('/POCtables');
    });
    
    app.get('/tokenStore', function(req, res) {

        res.render('tokenStore');
    });
    
    app.post('/tokenStore', function(req, res) {
        var arguments=[ String(req.body.POCKey), String(req.body.Token)];
        
        console.log("I am in tokenStore!");
        
        var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "tokenStore",
            args : arguments
        };
        var myHeaders = new Headers();
        myHeaders.append( "Content-Type","application/json");
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity", { 
            method: 'POST',
            body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
        })
           .then(res => res.text())//回傳tx ID
           .then(text => res.send(text))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
        
        res.redirect('/POCtables');
    });
    
//    app.get('/uploadData', function(req, res) {
//       
//        console.log("I am in uploadData!");
//        
//        var datasend={
//            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
//            fcn : "uploadData",
//            args : ["人蔘","補氣","棕色","POC0"]
//        };
//        var myHeaders = new Headers();
//        myHeaders.append( "Content-Type","application/json");
//        myHeaders.append("Authorization", "Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
//        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity", { 
//            method: 'POST',
//            body:    JSON.stringify(datasend),
//            credentials: "include",
//            headers: myHeaders,
//        })
//           .then(res => res.text())//回傳tx ID
//           .then(text => res.send(text))
//           .catch(function(error) {
//              console.log(res)
//              console.log(error);
//            }); 
//    });
    
    
    app.get('/que', function(req, res) {
       
        console.log("I am in root query!");
        
        /*var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryTest&args=%5B%22a%22%5D", { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
           .then(json => res.send(json))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 

//        var xhr = new XMLHttpRequest();
//        xhr.open("GET", "http://localhost:4000/channels/mychannel/chaincodes/mycc?peer=peer0.org1.example.com&fcn=queryTest&args=", true);
//        xhr.withCredentials = true;
//        xhr.setRequestHeader("Authorization", 'Basic ' + btoa('myuser:mypswd'));
//        xhr.onload = function () {
//            console.log(xhr.responseText);
//        };
//        xhr.send();
        
        //res.send('que');
    });
    
    
    app.get('/queryAllByKey', function(req, res) {
       
        console.log("I am in root queryAllByKey!");
        
        /*var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryAllByKey&args=%5B%22TRANSACTIONRECORD%22%5D", { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
           .then(json => res.send({data:json}))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
    });
    
     app.get('/queryHistoryByKey', function(req, res) {
       
        console.log("I am in root queryHistoryByKey!");
        
        /*var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryHistoryByKey&args=%5B%22POC0%22%5D", { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
           .then(json => res.send(json))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
    });
    
    app.get('/queryByKey', function(req, res) {
       
        console.log("I am in root queryByKey!");
        
        /*var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryByKey&args=%5B%22POC0%22%5D", { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
           .then(json => res.send(json))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
    });
    
    
    //查詢所有POC
    app.get('/POCtables', (req, res) => {

        console.log("I am in root queryAllByKey-> POC !");
        
        /*var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryAllByKey&args=%5B%22POC%22%5D", { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
           .then(json => res.render("POCtables",{data : json}))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
        
//        fetch('http://140.119.19.108:3000/QueryAllPoCs')
//            .then(res => res.text())
//            .then((query_responses) => {
//                console.log("query_responses is ", query_responses);
//                console.log("Type is ", typeof query_responses);
//                console.log("length : ", query_responses.length);
//                let result = JSON.parse(query_responses.toString());
//                console.log("Response is ", result);
//                console.log("Type is ", typeof result);
//                console.log("length : ", result.length);
//                //第一次parse後還是string只是去掉了/ 所以再進行一次parse
//                let result2 = JSON.parse(result.toString());
//                console.log("Response is ", result2);
//                console.log("Type is ", typeof result2);
//                console.log("length : ", result2.length);
//
//                result2.sort(function(a,b){
//                    var nameA=a.Record.Name.toLowerCase(), nameB=b.Record.Name.toLowerCase()
//                    if (nameA < nameB) //sort string ascending
//                        return -1 
//                    if (nameA > nameB)
//                        return 1
//                    return 0 //default return value (no sorting)
//                })
//                res.render("tables",{data: result2});
//            });
            //.then(body => console.log(body));
    });

    //查詢所有Materials
    app.get('/DATAtables', (req, res) => {

        console.log("I am in root queryAllByKey-> MATERIAL !");
        
        /*var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryAllByKey&args=%5B%22MATERIAL%22%5D", { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
           .then(json => res.render("DATAtables",{data : json}))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
    });
    
    //查詢所有TMC
    app.get('/TMCtables', (req, res) => {

        console.log("I am in root queryAllByKey-> TMC !");
        
        /*var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryAllByKey&args=%5B%22TMC%22%5D", { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
           .then(json => res.render("TMCtables",{data : json}))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
    });
    
    //查詢所有TRANSACTIONRECORD
    app.get('/TRANSACTIONRECORDtables', (req, res) => {

        console.log("I am in root queryAllByKey-> TRANSACTIONRECORD !");
        
        /*var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryAllByKey&args=%5B%22TRANSACTIONRECORD%22%5D", { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
           .then(json => res.render("TRANSACTIONRECORDtables",{data : json}))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
    });
    
    
    //查詢數據!!!
    //因為查詢數據會同時牽涉到query及invoke,所以用了兩個fetch來實現
//    app.get('/queryData', (req, res) => {
//
//        console.log("I am in root queryData 查詢數據 MATERIAL0 POC0 !");
//        
//        /*var datasend={
//            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
//            fcn : "initLedger",
//            args : [""]
//        };*/
//        var myHeaders = new Headers();
//        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
//        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryData&args=%5B%22MATERIAL1%22%2C%22POC0%22%5D", { 
//            method: 'GET',
//            //body:    JSON.stringify(datasend),
//            credentials: "include",
//            headers: myHeaders,
//            //headers: { 'Content-Type': 'application/json' },
//        }).then(res => res.json())
//           .then(json => res.render("queryData",{data : json}))
//           .catch(function(error) {
//              console.log(res)
//              console.log(error);
//            }); 
//        
//        var arguments=[ "MATERIAL1", "POC0"];
//        
//        
//        var datasend={
//            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
//            fcn : "queryData",
//            //args : ["人蔘","補氣","棕色","POC0"]
//            args : arguments
//        };
//        var myHeaders = new Headers();
//        myHeaders.append( "Content-Type","application/json");
//        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
//        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity", { 
//            method: 'POST',
//            body:    JSON.stringify(datasend),
//            credentials: "include",
//            headers: myHeaders,
//        })
//           .catch(function(error) {
//              console.log(res)
//              console.log(error);
//            }); 
//        
//    });
    //查詢數據!!!
    //因為查詢數據會同時牽涉到query及invoke,所以用了兩個fetch來實現
    //改成可以輸入要搜尋Data的KEY 以及是誰(POCX)搜尋
    //原本想要兩個放在同一頁實現，但後來費時太久實現不了
    app.get('/queryDataPage', function(req, res) {
        
        //為了包裝MATERIAL Key到頁面選擇上
        console.log("I am in queryDataPage !");
        
        /*var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryAllByKey&args=%5B%22MATERIAL%22%5D", { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        })
           .then(function(res){ 
            return res.json();})
           .then(function(json){ //在上一層中json後去console.log會是pending狀態
            console.log(json);
            let arr = new Array();
                 for(let i=0;i<json.length;i++){
                     let temp = 1;
                     for(let j=0;j<arr.length;j++){
                        if(json[i].Key == arr[j]){
                            temp = 0;
                        }
                     }
                     if(temp!=0){
                        arr.push(json[i].Key);
                     }
                 }
                 //return arr;
            console.log(arr);
            res.render("queryDataPage",{data : arr});
                               
            })
           .catch(function(error) {
              console.log(res)
              console.log(error);
            });
        
        //res.render("queryDataPage");
    });
    app.post('/queryDataPage', function(req, res) {
        
        var arguments=[ String(req.body.MaterialKey), String(req.body.Inquirer)];
        
        console.log("I am in queryDataPage!");
        
        var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "queryData",
            //args : ["人蔘","補氣","棕色","POC0"]
            args : arguments
        };
        var myHeaders = new Headers();
        myHeaders.append( "Content-Type","application/json");
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity", { 
            method: 'POST',
            body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
        })
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 

        var argu0 = encodeURIComponent(arguments[0]);
        var argu1 = encodeURIComponent(arguments[1]);
        
        res.redirect('/queryData?MaterialKey=' + argu0 + '&Inquirer='+ argu1);
    });
    
    app.get('/queryData', function(req, res) {
        //var arguments={ Name:String(req.body.Name), Efficacy:String(req.body.Efficacy), Color:String(req.body.Color),Owner:String(req.body.Owner)};
        //var arguments=[ String(req.query.MaterialKey), String(req.query.Inquirer)];

        var Argus = [req.query.MaterialKey, req.query.Inquirer];
        console.log("I am in queryData!");
        console.log(Argus[0]);
        
        var fetchString = "http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryData&args=%5B%22"+Argus[0]+"%22%2C%22"+Argus[1]+"%22%5D";
        
        console.log("I am in queryData!");
        console.log(fetchString);
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch(fetchString, { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
           .then(json => res.render("queryData",{data : json}))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
            
    });
    
    //查詢數據 with HarvestBatch !!!
    //因為查詢數據會同時牽涉到query及invoke,所以用了兩個fetch來實現
    //改成可以輸入要搜尋Data的KEY 以及是誰(POCX)搜尋
    //原本想要兩個放在同一頁實現，但後來費時太久實現不了
    app.get('/queryHarvestBatchPage', function(req, res) {
        
        //為了包裝HarvestBatch到頁面選擇上
        console.log("I am in queryHarvestBatchPage !");
        
        /*var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryAllByKey&args=%5B%22MATERIAL%22%5D", { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        })
           .then(function(res){ 
            return res.json();})
           .then(function(json){ //在上一層中json後去console.log會是pending狀態
            console.log(json);
            let arr = new Array();
                 for(let i=0;i<json.length;i++){
                     let temp = 1;
                     for(let j=0;j<arr.length;j++){
                        if(json[i].Record.HarvestBatch == arr[j]){
                            temp = 0;
                        }
                     }
                     if(temp!=0){
                        arr.push(json[i].Record.HarvestBatch);
                     }
                 }
                 //return arr;
            console.log(arr);
            res.render("queryHarvestBatchPage",{data : arr});
                               
            })
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
        
        //res.render("queryHarvestBatchPage");
    });
    app.post('/queryHarvestBatchPage', function(req, res) {
        
        var arguments=[ String(req.body.HarvestBatch), String(req.body.Inquirer)];
        
        console.log("I am in queryHarvestBatchPage!");
        
        var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "queryHarvestBatch",
            //args : ["人蔘","補氣","棕色","POC0"]
            args : arguments
        };
        var myHeaders = new Headers();
        myHeaders.append( "Content-Type","application/json");
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity", { 
            method: 'POST',
            body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
        })
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 

        var argu0 = encodeURIComponent(arguments[0]);
        var argu1 = encodeURIComponent(arguments[1]);
        
        res.redirect('/queryHarvestBatch?HarvestBatch=' + argu0 + '&Inquirer='+ argu1);
    });
    
    app.get('/queryHarvestBatch', function(req, res) {
        //var arguments={ Name:String(req.body.Name), Efficacy:String(req.body.Efficacy), Color:String(req.body.Color),Owner:String(req.body.Owner)};
        //var arguments=[ String(req.query.MaterialKey), String(req.query.Inquirer)];

        var Argus = [req.query.HarvestBatch, req.query.Inquirer];
        console.log("I am in queryHarvestBatch!");
        console.log(Argus[0]);
        
        var fetchString = "http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryHarvestBatch&args=%5B%22"+Argus[0]+"%22%2C%22"+Argus[1]+"%22%5D";
        
        console.log("I am in queryHarvestBatch!");
        console.log(fetchString);
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch(fetchString, { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
           .then(json => res.render("queryHarvestBatch",{data : json}))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
            
    });
                 
    //查詢POC0的History
    app.get('/historyPOC0', (req, res) => {

        console.log("I am in root queryHistoryByKey-> POC0 !");
        
        /*var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryHistoryByKey&args=%5B%22POC0%22%5D", { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
           .then(json => res.render("historyPOC0",{data : json}))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
    });
    
    //切換至Batch Upload 下載附件畫面
    app.get('/BatchUploadDownload', (req, res) =>{
       
        console.log("I am in BatchUploadDownload !");
        
        res.render('BatchUploadDownload');
    });
    
    //切換至Batch Upload 上傳CSV畫面
    app.get('/BatchUploadCSV', (req, res) =>{
       
        console.log("I am in BatchUploadCSV !");
        
        res.render('BatchUploadCSV');
    });
    
    //切換至Certification 畫面
    app.get('/Certification', (req, res) =>{
       
        console.log("I am in Certification !");
        
        res.render('Certification');
    });
    
    app.get('/InitLedger', function(req, res) {
        console.log("I am in root!");
        
        var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };
        var myHeaders = new Headers();
        //傳出去的body要跟這邊宣告的格式型態一樣
        myHeaders.append( "Content-Type","application/json");
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity", { 
            method: 'POST',
            body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': "application/json; charset=utf-8" ,
                     //"Authorization": "Bearer """"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg"},
        })
           .then(res => res.text())//回傳tx ID
           .then(text => res.send(text))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 

        res.redirect('/POCtables');
    });
    //兩個名字相同變成一直redirect無限迴圈 get 跟 redirect
    //render是到那個ejs檔 不用加/ 是檔名    redirect會是 get 命令
    app.get('/UploadData', function(req, res) {

        res.render('uploadDataPage');
    });
    app.post('/UploadData', function(req, res) {
        //var arguments={ Name:String(req.body.Name), Efficacy:String(req.body.Efficacy), Color:String(req.body.Color),Owner:String(req.body.Owner)};
        //var arguments=[ String(req.body.Name), String(req.body.Efficacy), String(req.body.Color),String(req.body.Owner)];
        
        var arguments = ["","","","","",
                        "","","","","",
                        "","","",""];
        
        arguments[0] = String(req.body.Name);
        arguments[1] = String(req.body.Efficacy);
        arguments[2] = String(req.body.Color);
        arguments[13] = String(req.body.Owner);
        
        console.log("I am in uploadData!");
        
        var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "uploadData",
            //args : ["人蔘","補氣","棕色","POC0"]
            args : arguments
        };
        var myHeaders = new Headers();
        myHeaders.append( "Content-Type","application/json");
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity", { 
            method: 'POST',
            body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
        })
           .then(res => res.text())//回傳tx ID
           .then(text => res.send(text))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
        
//        fetch('http://140.119.19.108:3000/UploadData', { 
//            method: 'POST',
//            body:    JSON.stringify(args),
//            headers: { 'Content-Type': 'application/json' },
//        })
//           .then(res => res.json())
//           .then(json => console.log(json))
//           .catch(console.log(res)); //catch 有res error function可用嗎

        res.redirect('/POCtables');
    });
    
    //兩個名字相同變成一直redirect無限迴圈 get 跟 redirect
    //render是到那個ejs檔 不用加/ 是檔名    redirect會是 get 命令
    app.get('/UploadDataHarvest', function(req, res) {

        res.render('uploadDataHarvest');
    });
    app.post('/UploadDataHarvest', function(req, res) {
        //var arguments={ Name:String(req.body.Name), Efficacy:String(req.body.Efficacy), Color:String(req.body.Color),Owner:String(req.body.Owner)};
        var arguments = ["","","","","",
                        "","","","","",
                        "","","",""];
        
        arguments[0] = String(req.body.Name);
        arguments[1] = String(req.body.Efficacy);
        arguments[2] = String(req.body.Color);
        arguments[3] = String(req.body.HarvestBatch);
        arguments[4] = String(req.body.Action);
        arguments[5] = String(req.body.HarvestPlace);
        arguments[6] = String(req.body.HarvestWeather);
        arguments[7] = String(req.body.HarvestNumber);
        arguments[8] = String(req.body.HarvestUnit);
        arguments[9] = String(req.body.HarvestTemperature);
        arguments[10] = String(req.body.Fertilizer);
        arguments[13] = String(req.body.Owner);
        
        console.log("I am in uploadDataHarvest!");
        console.log(arguments);
        
        var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "uploadData",
            //args : ["人蔘","補氣","棕色","POC0"]
            args : arguments
        };
        var myHeaders = new Headers();
        myHeaders.append( "Content-Type","application/json");
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity", { 
            method: 'POST',
            body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
        })
           .then(res => res.text())//回傳tx ID
           .then(text => res.send(text))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
        
//        fetch('http://140.119.19.108:3000/UploadData', { 
//            method: 'POST',
//            body:    JSON.stringify(args),
//            headers: { 'Content-Type': 'application/json' },
//        })
//           .then(res => res.json())
//           .then(json => console.log(json))
//           .catch(console.log(res)); //catch 有res error function可用嗎

        res.redirect('/POCtables');
    });
    
    //兩個名字相同變成一直redirect無限迴圈 get 跟 redirect
    //render是到那個ejs檔 不用加/ 是檔名    redirect會是 get 命令
    app.get('/UploadDataFirstProcess', function(req, res) {

        //為了包裝HarvestBatch到頁面選擇上
        console.log("I am in UploadDataFirstProcess !");
        
        /*var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "initLedger",
            args : [""]
        };*/
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity?peer=peer0.org1.example.com&fcn=queryAllByKey&args=%5B%22MATERIAL%22%5D", { 
            method: 'GET',
            //body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
            //headers: { 'Content-Type': 'application/json' },
        })
           .then(function(res){ 
            return res.json();})
           .then(function(json){ //在上一層中json後去console.log會是pending狀態
            console.log(json);
            let arr = new Array();
                 for(let i=0;i<json.length;i++){
                     let temp = 1;
                     for(let j=0;j<arr.length;j++){
                        if(json[i].Record.HarvestBatch == arr[j]){
                            temp = 0;
                        }
                     }
                     if(temp!=0){
                        arr.push(json[i].Record.HarvestBatch);
                     }
                 }
                 //return arr;
            console.log(arr);
            res.render("uploadDataFirstProcess",{data : arr});
                               
            })
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
        
        //res.render('uploadDataFirstProcess');
    });
    app.post('/UploadDataFirstProcess', function(req, res) {
        
        var arguments = ["","","","","",
                        "","","","","",
                        "","","",""];
        
//        arguments[0] = String(req.body.Name);
//        arguments[1] = String(req.body.Efficacy);
//        arguments[2] = String(req.body.Color);
        arguments[3] = String(req.body.HarvestBatch);
        arguments[4] = String(req.body.Action);
        arguments[5] = String(req.body.FirstPlace);
        arguments[6] = String(req.body.FirstWeather);
        arguments[7] = String(req.body.FirstNumber);
        arguments[8] = String(req.body.FirstUnit);
        arguments[11] = String(req.body.FirstBatch);
        arguments[12] = String(req.body.FirstSkill);
        arguments[13] = String(req.body.Owner);
        
        console.log("I am in uploadDataFirstProcess!");
        
        var datasend={
            peers: ["peer0.org1.example.com","peer1.org1.example.com"],
            fcn : "uploadData",
            //args : ["人蔘","補氣","棕色","POC0"]
            args : arguments
        };
        var myHeaders = new Headers();
        myHeaders.append( "Content-Type","application/json");
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzUxMjc2MzEsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1MzUwOTE2MzF9.QVOx5NK0cPGWqvobtOaOzNdqLs-B2wPACGlYUfAxkwg");
        fetch("http://localhost:4000/channels/mychannel/chaincodes/unity", { 
            method: 'POST',
            body:    JSON.stringify(datasend),
            credentials: "include",
            headers: myHeaders,
        })
           .then(res => res.text())//回傳tx ID
           .then(text => res.send(text))
           .catch(function(error) {
              console.log(res)
              console.log(error);
            }); 
        
//        fetch('http://140.119.19.108:3000/UploadData', { 
//            method: 'POST',
//            body:    JSON.stringify(args),
//            headers: { 'Content-Type': 'application/json' },
//        })
//           .then(res => res.json())
//           .then(json => console.log(json))
//           .catch(console.log(res)); //catch 有res error function可用嗎

        res.redirect('/POCtables');
    });
    
    
    
    //新增一台腳踏車
    app.post('/bike', (req, res) => {
        var args={ $class:String(req.body.$class), status:String(req.body.status), provider:String(req.body.provider),
             remark:String(req.body.remark), aid:String(req.body.aid)};
        fetch('http://140.119.19.108:3000/api/Bike', { 
            method: 'POST',
            body:    JSON.stringify(args),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => console.log(json));

        res.redirect('/bike');
    });
    //修改一台腳踏車
    app.get('/update_bike/:bike_Id', function(req, res) {
        console.log(req.params.bike_Id);
        fetch('http://140.119.19.108:3000/api/Bike/'+req.params.bike_Id)
            .then(res => res.text())
            .then((query_responses) => {
                let result = JSON.parse(query_responses.toString());
                console.log("Response is ", result);
                console.log("length : ", result.length);
                res.render("update_bike",{data: result});
        });
    });
    app.post('/update_bike/:bike_Id', (req, res) => {
        var args={ $class:String(req.body.$class), status:String(req.body.status), provider:String(req.body.provider),
            remark:String(req.body.remark), aid:String(req.body.aid)};
            fetch('http://140.119.19.108:3000/api/Bike/'+args.aid, { 
                method: 'PUT',
                body:    JSON.stringify(args),
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(json => console.log(json));
    
            res.redirect('/bike');    
    });

    //刪除一台腳踏車
    app.get('/delete_bike/:bike_Id', function(req, res) {
        console.log(req.params.bike_Id);
        fetch('http://140.119.19.108:3000/api/Bike/'+req.params.bike_Id)
            .then(res => res.text())
            .then((query_responses) => {
                let result = JSON.parse(query_responses.toString());
                console.log("Response is ", result);
                console.log("length : ", result.length);
                res.render("delete_bike",{data: result});
        });
    });
    app.post('/delete_bike/:bike_Id', (req, res) => {
        var args={ $class:String(req.body.$class), status:String(req.body.status), provider:String(req.body.provider),
            remark:String(req.body.remark), aid:String(req.body.aid)};
            fetch('http://140.119.19.108:3000/api/Bike/'+args.aid, { 
                method: 'DELETE',
                //body:    JSON.stringify(args),
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(json => console.log(json));
    
            res.redirect('/bike');    
    });

};