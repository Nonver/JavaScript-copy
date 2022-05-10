var list = [{
	id: 1,
	name: 'a',
	children:[{name: 'aa'}]
}, {
	id: 2,
	name: 'b',
	children:[{name: 'bb'}]
}, {
	id: 3,
	name: 'c',
}]
//在函数里编写函数
function tran(arr) {
	arr.forEach(item=>{
		if(item.children == undefined){
			item.children = [{name:item.name+item.name}]
		}
	})
	console.log(arr)
}
