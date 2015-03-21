---
---
{% assign keys = site.data.stocks.keys %}
{% assign values = site.data.stocks.values %}
//STOCK作为股票数据的容器
var STOCK = {};


//使用关联数组保存股票数据
STOCK._hashArr = {
    {% for v in values %}
        "{%if v[8] == 'SH'%}0{% else %}1{% endif %}{{v[1]}}":{ {% for s in v %}"{{keys[forloop.index0]}}":"{{s}}"{%if forloop.last == false %},{% endif %}{% endfor %} }{%if forloop.last == false %},{% endif %}
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
        var price = parseFloat(data[stock]['price']);
        var initPrice = parseFloat(STOCK._hashArr[stock]['initPrice']);
        STOCK._hashArr[stock]['name'] = data[stock]['name'];
        STOCK._hashArr[stock]['percent'] = (data[stock]['percent'] * 100).toFixed(2) ;
        STOCK._hashArr[stock]['price'] = data[stock]['price'].toFixed(2);
        STOCK._hashArr[stock]['totalPercent'] = ((price - initPrice) * 100 / initPrice).toFixed(2);
    }
};

