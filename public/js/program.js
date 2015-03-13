//将股票数据插入到网页中
var insertStockList = function (data) {
    var text = '<ul>';
    var stock;

    for (var i=0; i<data.length; i++){
        stock = data[i];
        text = text + '<li>' + stock.id + ' ' + stock.trade + '</li>';
    }
    text = text +  '</ul>';
    
    return text;
};