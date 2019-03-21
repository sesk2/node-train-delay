const Line = require('./line-notify');
const Delay = require('./train-delay');

const myLine = new Line();
const myDelay = new Delay();

var CHECK_LIST = [
  {
    'name': '山手線',
    'company': 'JR東日本',
    'website': 'https://traininfo.jreast.co.jp/train_info/kanto.aspx#direction_yamate'
  },
  {
    'name': '田園都市線',
    'company': '東急電鉄',
    'website': 'https://www.tokyu.co.jp/unten2/unten.html'
  },
]

var check = 0;
var names;

// get LINE token from a environment[$LINE_TOKEN].
myLine.setToken(process.env.LINE_TOKEN);

// get information for train delaying
myDelay.getDelayData().then(function(res){
    res.forEach(function(data){
      // Send messages via LINE Notify
      CHECK_LIST.forEach(function(check_item){
        if(data.name == check_item.name && data.company == check_item.company){
          myLine.notify("現在、" + check_item.name + "が遅延しています。\n" + check_item.website);
          check++;
        }
      });
    });
    if(check == 0){
      CHECK_LIST.forEach(function(check_item){
        if(names){
          names = names + " " + check_item.name;
        } else {
          names = check_item.name;
        }
      });
      myLine.notify("\n現在、[" + names + "]で遅延情報はありません。");
    }
});
