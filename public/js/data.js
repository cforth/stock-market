---
---
{% assign stockKeys = site.data.stocks.categories %}
{% assign stockValues = site.data.stocks.records %}

//STOCK对象，保存股票数据与接口方法
var STOCK = {};


//使用关联数组保存股票数据，私有属性
STOCK._hashArr = {
    {% for stock in stockValues %}
        "{{stock[1]}}":{ {% for s in stock %}"{{stockKeys[forloop.index0]}}":"{{s}}"{%if forloop.last == false %},{% endif %}{% endfor %} }{%if forloop.last == false %},{% endif %}
{% endfor %}};


//获取STOCK._hashArr的接口方法
STOCK.gethashArr = function() {
    return STOCK._hashArr;
}; 
    

//过滤器方法，根据键值对来筛选数据
STOCK.filter = function(key, value) {
    var stockData = STOCK._hashArr;
    var result = {};
    for(var stock in stockData) {
        if(stockData[stock][key] === value) {
            result[stock] = stockData[stock];
        }
    }
    return result;
}


//查询值方法
STOCK.getValue = function(id, key) {
    return STOCK._hashArr[id][key];
};


//更新或插入键值对的方法
STOCK.setValue = function(data) {
    for(var stock in data) {
        var s = stock.slice(1);
        var price = parseFloat(data[stock]['price']);
        var initPrice = parseFloat(STOCK._hashArr[s]['initPrice']);
        STOCK._hashArr[s]['name'] = data[stock]['name'];
        STOCK._hashArr[s]['percent'] = (data[stock]['percent'] * 100).toFixed(2) ;
        STOCK._hashArr[s]['price'] = data[stock]['price'].toFixed(2);
        STOCK._hashArr[s]['totalPercent'] = ((price - initPrice) * 100 / initPrice).toFixed(2);
    }
};


//jsonp获取126股票数据
STOCK.do_jsonp_id = 1;

STOCK.doJsonp = function(url, callback, timeout) {
    var name = "do_jsonp_callback_"+(STOCK.do_jsonp_id++);
    var ele = document.createElement('script');
    var timer;

    window[name] = function() {
        //清理计时器
        window.clearTimeout(timer);
        //回调回调函数
        callback.apply(this, arguments);
        //清理元素
        ele.parentNode.removeChild(ele);
        //清理回调
        delete window[name];
    };

    url += ((url.indexOf("?") == -1) ? '?' : '&') + "callback=" + name;

    ele.src = url;

    //超时处理
    timer = window.setTimeout(function(){
        //清理元素
        ele.parentNode.removeChild(ele);
        //清理回调
        delete window[name];
    }, timeout||30000);

    //执行请求
    document.getElementsByTagName('head')[0].appendChild(ele);
};