setInterval(function(){ 
    console.log("Hello"); 
    let date = new Date();
    $('#hours').text(date.getHours());
    $('#minutes').text(date.getMinutes());
    $('#seconds').text(date.getSeconds());
}, 1000);


