const express = require('express')
const app = express()
const fs = require('fs'); 
const port = 3000
var rp = require('request-promise')
var getArtists = require('./artists.js');
var exceptionHandler = require('./exception-handler.js');
let accessToken = "";

app.get('/', (req, res) => { 

    fs.unlink('output.json',function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
   });  

   const jsonInit = [];

   fs.writeFile('output.json', JSON.stringify(jsonInit), 'utf8', function (err) {
        if(err) return console.log(err);
        console.log('file created successfully');
   });

    const urlAuthentication = "https://accounts.spotify.com/api/token";
    const username = "857492c065f540b6b827d840f23a82c3";
    const password = "3d55c8f546de4ec0b32bd6a1ebfb09d5";
    let auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64");
    
    const options = {
        url: urlAuthentication,
        method: 'POST',
        headers: {
          'Authorization': auth
        },
        form: {
            grant_type: 'client_credentials'
        }
    };
     
    rp(options)
        .then(function (body) {
            const data = JSON.parse(body);
            accessToken = data.access_token;
        })
        .then(function (body) {
            let artist = [
                "05fG473iIaoy82BF1aGhL8",
                "6olE6TJLqED3rqDCT0FyPh",
                "2ziB7fzrXBoh1HUPS6sVFn",
                "7eOGKFUwjDDem40BGPqnZR",
                "2d0hyoQ5ynDBnkvAbJKORj"
            ];
            
            getArtists.getRelatedArtists(artist[2], accessToken);
            
            res.send('Everything Ok!');
        })
        .catch((err) => {
            exceptionHandler.handleError("Login: ", err);
        });      
});


// rp(options2)
//             .then(function (body) {
                
//                 const jsonObj = JSON.parse(body);

//                 for( let prop in jsonObj ){
//                     const data = jsonObj[prop];
                    
//                     for(let i = 0; i < 2; i++) {
//                     // for(let i = 0; i < data.length; i++) {
                        
//                         const artistId = data[i].id;
//                         console.log('artist' + i + ': ', artistId);

//                         const options3 = {
//                             url: `https://api.spotify.com/v1/artists/${artistId}/albums`,
//                             method: 'GET',
//                             headers: {
//                               'Authorization': auth
//                             }
//                         };
                        
//                         rp(options3)
//                             .then(body => {
//                                 let album = JSON.parse(body);

//                                 for(let j = 0; j < album.items.length; j++)
//                                 {
//                                     album.items[j].artist = null;
//                                     album.items[j].external_urls = null;
//                                     album.items[j].available_markets = null;
//                                 }
//                                 jsonFinal.push(album);
//                                 return album;
//                             });
//                     }
//                 }
//         });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))