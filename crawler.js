var http             = require('https');
var exceptionHandler = require('./exceptionHandler.js');
var fs               = require("fs");
var outputFile       = 'sitemap.txt';

module.exports.init = function(options) {
    var url     = 'https://'+options['domain'];
    var domain  = options['domain']
    
    try {
        http.get(url, function(response) {
            var regex   = /href="https:\/\/wiprodigital\.com.*?"/g;
            // @todo to make regex pattern dynamic href="https:\/\/'+ domain +'.*?"g'
            // var regex = new RegExp('href="https:\/\/'+ domain +'.*?"g');
            var matches; 
            var data    = '';

            response.on('data', function(chunk) {
                matches = chunk.toString().match(regex);
                if(matches != null){
                    data += matches[0] + "\n" ;
                }
            });

            response.on('end', function(chunk) {
                //write to file at the end of the response
                console.log('data: ',data);
                fs.writeFile('./'+outputFile, data, function (err) {
                    if (err) throw err;
                        console.log('\n',data);
                });
                console.log("status code:" + response.statusCode);
            });
        }).on("error", function(e) {
            console.log("error: ", e.message);
        });
    } catch (ex) {
        exceptionHandler.message(ex);

    }
};
