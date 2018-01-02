/*
* array_unique — 移除数组中重复的值
*/
function array_unique(array){
	var _array = [];
	for(var i= 0; i < array.length; i++){
		if(_array.indexOf(array[i])==-1){
			_array.push(array[i])
		}
	}
	return _array;
}
