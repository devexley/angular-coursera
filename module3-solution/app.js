(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController () {

	var narrowDownCtrl = this;


}

function MenuSearchService () {

	var searchService = this;

	function getMatchedMenuItems(searchTerm) {


	}

}



})();

