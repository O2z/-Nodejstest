var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next){
    var frm = '<form action="/" method="post">'+
    'FirstName: ' +
    '<input type="text" name="txtFirstName" placeholder="please enter firstname" />' +
    '<br />' +
    'LastName : ' +
    '<input type="text" name="txtLastName" placeholder="please enter lastname" />' +
    '<br />' +
    '<button type="submit">Submit</button>' +
    '</form>';
    res.send(frm);
});

module.exports = router; 