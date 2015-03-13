//将股票数据插入到网页中
var insertStockList = function (data) {
    var text = '<table border = 1>';
    var stock;
    
    text += '<tr><td>股票代码</td><td>所属行业</td><td>关注日期</td><td>初始价</td><td>目标价</td><td>评级</td></tr>';
    for (var i=0; i<data.length; i++){
        stock = data[i];
        text = text + '<tr><td>' + stock.id + '</td><td>' + stock.trade + '</td><td>' + stock.date  + '</td><td>' + stock.initPrice + '</td><td>' + stock.targetPrice + '</td><td>' + stock.rate + '</td></tr>';
    }
    text = text +  '</table>';
    
    return text;
};