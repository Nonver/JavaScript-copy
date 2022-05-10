//数组
var arr = [{id: 1,name: 'a',value: 'a1'},
	{id: 2,name: 'a',value: 'a2'},
	{id: 3,name: 'b',value: 'b1'},
	{id: 4,name: 'b',value: 'b2'},
	{id: 5,name: 'b',value: 'b3'},
	{id: 6,name: 'c',value: 'xxxx'}
]
//处理之后输出结果
//var result = [
//  [{id:1,name:'a',value:'a1'},{id:2,name:'a',value:'a2'}],
//  [{id:3,name:'b',value:'b1'},{id:4,name:'b',value:'b2'},{id:5,name:'b',value:'b3'},],
//  [{id:6,name:'c',value: 'xxxx'}]
//]


function tran(arr) {
	// 数组去重
	var obj1 = arr
	var obj2 = Object.assign([], obj1); //避免深度拷贝修改原数组
	obj1.forEach((item, index) => {
		obj2.forEach((itm,ind)=>{
			if(item.name == itm.name){
				obj2.splice(index,1)
			}
		})
	})
	// 重组分类合并数组
	let list = []
	obj2.forEach((item,index)=>{
		let data = []
		obj1.forEach((itm,ind)=>{
			if(item.name == itm.name){
				data.push(itm)
			}
		})
		list.push(data)
	})
	return list;
	
}
const results = tran(arr)
console.log(results)
