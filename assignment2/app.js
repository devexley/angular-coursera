(function () {
'use strict';

angular.module(`ShoppingListCheckOff`, [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service(`ShoppingListCheckOffService`, ShoppingListCheckOffService);


function ShoppingListCheckOffService () {

	var shopService = this;

	shopService.buyItems = [];
	shopService.boughtItems = [];	

	shopService.items = [
					{ id: 1, name: "cookiees", quantity: 10, added: "N"},
					{ id: 2, name: "pizza", quantity: 5,  added: "N"},
					{ id: 3, name: "sandwiches", quantity: 8, added: "N"},
					{ id: 4, name: "steak", quantity: 2, added: "N"},
					{ id: 5, name: "soymilk", quantity: 1, added: "N"}
					];

	shopService.addItem = function (record) {
		shopService.boughtItems.push(record);
	}

	shopService.removeItem = function(index) {
		return shopService.buyItems.splice(index, 1);
	}

}



ToBuyController.$inject = [ 'ShoppingListCheckOffService' ];
function ToBuyController(ShoppingListCheckOffService) {	

	var buy = this;
	
	buy.itemFilter = 'N';

	buy.items = [];

	buy.length = ShoppingListCheckOffService.buySize;

	if( ShoppingListCheckOffService.buyItems.length == 0) {
		ShoppingListCheckOffService.buyItems = ShoppingListCheckOffService.items;
		buy.items = ShoppingListCheckOffService.buyItems;
	}

	

buy.putMessage	= function () {

	var bool = false;
	var size = buy.items.length;

	if( size == 0 ) { 
		bool = true; 
	};

	return bool;
}

buy.moveItem = function(index) {
	
	var splicedItem = ShoppingListCheckOffService.removeItem(index);

	ShoppingListCheckOffService.addItem(splicedItem[0]);
}


}

AlreadyBoughtController.$inject =[ 'ShoppingListCheckOffService' ];
function AlreadyBoughtController(ShoppingListCheckOffService) {	

	var bought = this;

	bought.message = '';

	bought.itemFilter = 'Y';

	bought.items = ShoppingListCheckOffService.boughtItems;

bought.putMessage = function () {

	var size = bought.items.length;
	var bool = false;
	
	if( size == 0 ) { 
		bool = true; 
	};

	return bool;
}


}




})();