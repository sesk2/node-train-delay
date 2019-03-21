const Line = require('./line-notify');
const Delay = require('./train-delay');

const myLine = new Line();
const myDelay = new Delay();

// get LINE token from a environment[$LINE_TOKEN].
myLine.setToken(process.env.LINE_TOKEN);

// get information for train delaying
myDelay.getDelayData().then(function(res){
    res.forEach(function(data){
       // Send messages via LINE Notify
       if(data.name == "東海道線" || data.name == "上野東京ライン"){
           myLine.notify("現在、" + data.name + "が遅延しています。");
       }
    });
});
