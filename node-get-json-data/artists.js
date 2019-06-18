var rp = require('request-promise');
var getAlbums = require('./albums.js');
var exceptionHandler = require('./exception-handler.js');

var methods = {  
    getRelatedArtists: function(artistId, accessToken) {

        console.log('artistId: ', artistId);

        const urlArtistsRelated = `https://api.spotify.com/v1/artists/${artistId}/related-artists`;
        const auth = "Bearer " + accessToken;

        const options2 = {
            url: urlArtistsRelated,
            method: 'GET',
            headers: {
                'Authorization': auth
            }
        };

        rp(options2)
            .then(function (body) {
                const jsonObj = JSON.parse(body);

                for( let prop in jsonObj ){
                    const data = jsonObj[prop];
                    
                    for(let i = 0; i < data.length; i++) {
                        
                        const artistId = data[i].id;
                        console.log('artist' + i + ': ', artistId);
                        getAlbums.getArtistAlbums(artistId, accessToken);
                    }
                }
                return jsonObj;
            })
            .then(body => {
                return body;
            })
            .finally(response => {
                return response;
            })
            .catch((err) => {
                exceptionHandler.handleError("Artists Error: ", err);
            });
    }
}

module.exports = methods;

