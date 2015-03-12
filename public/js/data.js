---
---
{% assign stockArr = site.data.stocks.stockArr %}
{% assign stockName = site.data.stocks.stockName %}

//STOCK作为所有全局变量的容器
var STOCK = {};

//生成JSON格式的数据
STOCK.stockData = {
    "stock":[{% for stock in stockArr %}
        {   {% for s in stock %}   
            "{{stockName[forloop.index0]}}":"{{stock[forloop.index0]}}"{%if forloop.last == false %},{% endif %}
            {% endfor %} 
        }{%if forloop.last == false %},{% endif %}
    {% endfor %}
]};