function getCourseTable(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount= topic.length;

    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時
    let millisecsPerDay = 24*60*60*1000;

    var tables = document.getElementById("courseTable")
    
   // 分別輸出 場次 時間 主題
   // (行會左移)
    for(var x=0;x<topicCount;x++){
        var date = new Date(startDate.getTime()+7*x*millisecsPerDay)
        var month = date.getMonth() + 1
        var date = date.getDate()  
        var monthDate = month + '/' + date
        $("#courseTable").append("<tr>"+
        `<td>${x+1}</td>`+
        `<td>${monthDate}</td>`+
        `<td>${topic[x]}</td>`+
        "</tr>");
        if (topic[x] == "停課"){
            tables.rows[x+1].style.backgroundColor = "#D0D0D0";
        }
        else if (x % 2 == 0){
            tables.rows[x+1].style.backgroundColor = "#DDDDFF";
        }
        else{
            tables.rows[x+1].style.backgroundColor = "#FFF0AC";
        }
    }
}

getCourseTable();