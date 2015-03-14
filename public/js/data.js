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
    return this._hashArr;
}    
    

//过滤器方法，根据索引和值来筛选股票数据
STOCK.filter = function(key, value) {
    var stockData = this._hashArr;
    var result = {};
    for(var name in stockData) {
        if(stockData[name][key] === value) {
            result[name] = stockData[name];
        }
    }
    return result;
}


//查询值方法
STOCK.getValue = function(id, key) {
    return STOCK._hashArr[id][key];
}


//更新值方法
STOCK.setValue = function(id, key, value) {
    STOCK._hashArr[id][key] = value;
}