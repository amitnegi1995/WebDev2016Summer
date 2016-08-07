const express = require('express');
const app = express();

app.use('/', express.static('./public_html'));

app.get('/calculate', function (req, res) {

    res.send({fare: calcfare(req.query.dist, req.query.time)})
    
});

app.listen(5000, function() {
   console.log('http://localhost:5000/') 
});

function calcfare(km, min) {
    let fare = 25;
    if (km > 2)  { 
        fare += (km - 2) * 8
        
    } else if (km > 0) {
        fare += 0;
    }
    if (min > 15)  { 
        fare += (min - 15) 
    } else {
        fare += 0;
    }

    return fare;

}

module.exports  = {
    calcfare
};