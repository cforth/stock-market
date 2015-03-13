var insertStockList = function (idList, data) {
    var text = '<ul>';
    var stock;

    for (var i=0; i<idList.length; i++){
        stock = data[idList[i]];
        text = text + '<li>' + stock.id + ' : ' + stock.trade + '</li>';
    }
    text = text +  '</ul>';
    
    return text;
};