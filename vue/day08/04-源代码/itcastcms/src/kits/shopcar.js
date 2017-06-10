// 负责操作localStorage

// 定义localStorage的可以为一个常量
const KEY ='shopcar';

function getJsonObject(){
	var lsSting = localStorage.getItem(KEY);
	var list = [];
	if(lsSting){
		list = JSON.parse(lsSting);
	}
	return list;
}

// obj格式：{goodsid:87,count:1}
export function setItem(obj){
	// 1.0 根据key获取localStorage中的已有数据
	var list = getJsonObject();
	// 2.0 将obj 追加到list中
	list.push(obj);

	// 3.0 将list数据转出json字符串存储到localStorage中
	localStorage.setItem(KEY,JSON.stringify(list))
}

// 获取所有的商品的购买总数
export function getTotalCount(){
	var list = getJsonObject();
	// 2.0 计算总数
	var totalcount = 0;
	list.forEach(function(item){
		totalcount+=item.count;
	})

	return totalcount;
}


// 获取所有商品的id
// 返回的格式： googdsid,goodsid
export function getIdString(){
	var list = [];
	var obj = getGoodsObj();
	for(let key in obj){
		list.push(key);
	}

	return list.join(',');
}

// tmpObj={87:1,90:2};
export function getGoodsObj(){
	var tmpObj={};
	var list =getJsonObject();
	// 2.0 遍历list 将goodsid的值push进入到tmplist
	list.forEach(item=>{
		if(tmpObj[item.goodsid]){
			tmpObj[item.goodsid] += item.count;
		}else{
			tmpObj[item.goodsid] = item.count
		}
	});
	return 	tmpObj;
}


// 根据商品id删除数据
export function removeGoods(goodsid){
	// 获取数据
	var list = getJsonObject();

	var newList=[];
	// 删除list中对应的goodsid的数据
	list.forEach(item=>{
		if(item.goodsid != goodsid){
			newList.push(item);
		}
	});

	// 写入新数据
	// 3.0 将list数据转出json字符串存储到localStorage中
	localStorage.setItem(KEY,JSON.stringify(newList))
	
}

// 实现shopnumber.vue组件的自减功能
export function substrictItem(goodsid){
// 获取数据
	var list = getJsonObject();
	// 
	// list.forEach((item,index)=>{
	// 	if(item.goodsid != goodsid){
	// 		//  自减逻辑
	// 		if(item.count == 1){
	// 			list.splice(index,1) //由于改变了list的数量导致forEach会异常
	// 		}
	// 	}
	// });

	for(var i = list.length-1;i>=0;i--){
		var tmpobj = list[i];
		if(tmpobj.goodsid == goodsid){
			if(tmpobj.count == 1){
				list.splice(i,1);
			}else{
				list[i].count = list[i].count -1;
			}
		}
	}

	// 3.0 将list数据转出json字符串存储到localStorage中
	localStorage.setItem(KEY,JSON.stringify(list))

} 