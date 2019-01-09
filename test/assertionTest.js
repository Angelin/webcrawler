var assert = require('assert');

var sampleText = ' <a class="Fx4vi" href="https://wiprodigital.com/xmlrpc.php" /> <a class="Fx4vi" href="https://sfads.com/who-we-are" /> href="https://wiprodigital.com/?s=&post_type[]=post" ';

describe('test for domain', function () {
	var regex   = /href="https:\/\/wiprodigital\.com.*?"/g;
	var matches = sampleText.match(regex);

 	it('should return 2 links', function () {
        assert.equal(matches.length, 2);
    });
});