//콜백함수
function fetchData(callback){
	setTimeout(function(){
		const data = "여기 데이타";
		callback(data);
	},1000) ;
}

let f = function(data){
	console.log("데이타 도착 >> " + data);
}

fetchData(f);

fetchData(function(data){
	console.log("새로운 데이타 >> " + data);
});