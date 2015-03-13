---
---
{% assign stockKeys = site.data.stocks.categories %}
{% assign stockValues = site.data.stocks.records %}

//STOCK作为所有全局变量的容器
var STOCK = {};

//生成JSON格式的数据
STOCK.data = [
    {% for stock in stockValues %}
        { {% for s in stock %}"{{stockKeys[forloop.index0]}}":"{{s}}"{%if forloop.last == false %},{% endif %}{% endfor %} }{%if forloop.last == false %},{% endif %}
    {% endfor %}];

//根据索引和值来过滤数据
STOCK.filter = function(key, value) {
    var result = [];
    for(var i = 0; i < this.data.length; i += 1) {
        if(this.data[i][key] === value) {
            result.push(this.data[i]);
        }
    }
    return result;
}