// 计算数组的长度
var arrCount = function(o) {
    var t = typeof o;
    if(t === 'string'){
        return o.length;
    }else if(t === 'object'){
        var n = 0;
        for(var i in o){n++;}
        return n;
    }
    return false;
}


//将股票数据插入到网页中
var insertStockList = function (data) {
    //将关联数组转换为数组进行排序
    var arr = [];
    for(var name in data) {
        arr.push([name, data[name]]);
    }
    arr.sort(function(a,b){return a[1].date < b[1].date ? 1 : -1});
    
    var text = '<table border = 1>';
    var stock;
    
    text += '<tr><td>关注日期</td><td>股票代码</td><td>股票名称</td><td>当日涨跌%</td><td>当前价格</td><td>行业分类</td><td>目标价</td><td>累计涨跌%</td></tr>';
    for (var i = 0; i < arr.length; i += 1){
        stock = arr[i][1];
        text = text + '<tr><td>' + stock.date + '</td><td>' + stock.id + '</td><td>' + stock.name  + '</td><td>' + stock.percent + '</td><td>' + stock.price + '</td><td>' + stock.trade +'</td><td>' + stock.targetPrice +'</td><td>' + stock.totalPercent +'</td></tr>';
    }
    text = text +  '</table>';
    
    return text;
};


