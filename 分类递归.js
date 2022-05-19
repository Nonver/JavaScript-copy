let arr = [{
					id: 1,
					name: '部门1',
					pid: 0
				},
				{
					id: 2,
					name: '部门2',
					pid: 1
				},
				{
					id: 3,
					name: '部门3',
					pid: 1
				},
				{
					id: 4,
					name: '部门4',
					pid: 3
				},
				{
					id: 5,
					name: '部门5',
					pid: 4
				},
			]

			function listData(list, id) {
				let arr = []
				list.forEach((item) => {
					if (item.pid === id) {
						const children = listData(list, item.id)
			 		if (children.length > 0) {
							item.children = {
								...item,
								children
							}
						}
			 		arr.push(item)
					}
				})
				return arr
			}
			console.log(listData(arr, 0));
      
      
      
//function arrList(list) {

				// let newList = [];
				// let data = {}
				// list.map(item => {
				// 	if (!data[item.id]) {
				// 		data[item.id] = {
				// 			children: []
				// 		}
				// 	}
				// 	data[item.id] = {
				// 		...item,
				// 		children: data[item.id]['children']
				// 	}
				// 	const treeItem = data[item.id];
				// 	if (item.pid === 0) {
				// 		newList.push(treeItem);
				// 	} else {
				// 		if (!data[item.pid]) {
				// 			data[pid] = {
				// 				children: [],
				// 			}
				// 		}
				// 		data[item.pid].children.push(treeItem)
				// 	}

				// })
				// return newList;
		//	}
