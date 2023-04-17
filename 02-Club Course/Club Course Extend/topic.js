var topic = ["尚未開學","國定假日","環境準備","隨機性","重複性"];

var startDate= new Date();

const dateSelect = document.querySelector('input[type="date"]');
dateSelect.value = '2023-02-21';
dateString = dateSelect.value
var year = dateString.split("-")[0];
var month = dateString.split("-")[1];
var date = dateString.split("-")[2];

function clearTable() {
	var Table = document.getElementById("courseTable");
	Table.innerHTML = "";
}

function setMonthAndDay(startMonth, startDay){    
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(month,date);

function changeTime(){    
    clearTable();
    dateString = dateSelect.value
    year = dateString.split("-")[0];
    month = dateString.split("-")[1];
    date = dateString.split("-")[2];
    setMonthAndDay(month,date);
    getCourseTable();
}

function addCourse(){    
    clearTable();
    var course = document.getElementById("newCourse").value;
    topic.push(course);
    getCourseTable();
}

