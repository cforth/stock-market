---
---
{% assign stockCategories = site.data.stocks.categories %}
{% assign stockRecords = site.data.stocks.records %}

//STOCK作为所有全局变量的容器
var STOCK = {};

STOCK.idList = [{% for stock in stockRecords %}
        "{{stock[1]}}"{%if forloop.last == false %},{% endif %}
    {% endfor %}
];

//生成JSON格式的数据
STOCK.data = {
    {% for stock in stockRecords %}
        "{{stock[1]}}":{
            {% for s in stock %}   
            "{{stockCategories[forloop.index0]}}":"{{s}}"{%if forloop.last == false %},{% endif %}
            {% endfor %} 
        }{%if forloop.last == false %},{% endif %}
    {% endfor %}
};