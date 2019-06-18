var rp = require('request-promise');
var fs = require('fs');

var methods = {
     getArtistAlbums: function (artistId, accessToken) 
     {
        const auth = "Bearer " + accessToken;
        

        const options3 = {
            url: `https://api.spotify.com/v1/artists/${artistId}/albums`,
            method: 'GET',
            headers: {
              'Authorization': auth
            }
        };
        
        rp(options3)
            .then(body => {
                var jsonFinal = JSON.parse(fs.readFileSync('output.json', 'utf8'));
                
                let album = JSON.parse(body);

                for(let j = 0; j < album.items.length; j++)
                {

                    album.items[j].external_urls = null;
                    album.items[j].available_markets = null;
                    album.items[j].price = Math.floor(Math.random() * 25) + 5;
                    jsonFinal.push(album.items[j]);
                }
                
                fs.unlink('output.json',function(err){
                    if(err) return console.log(err);
                    console.log('file deleted successfully');
               });  

                fs.appendFileSync("output.json", JSON.stringify(jsonFinal), 'utf8', function (err) {
                    if (err) {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }
                
                    console.log("JSON file has been saved.");
                }); 

                return album;
            });
      }
}

module.exports = methods;