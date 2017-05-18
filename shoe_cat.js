
(function() {
    'use strict';

    function initTemplate(templateSelector) {
        var templateText = document.querySelector(templateSelector).innerHTML;
        return Handlebars.compile(templateText);
    }

    var filterTemplate = initTemplate('.filterTemplate');
    var filters = document.querySelector('.filters');

    var bootsTemplate = initTemplate('.bootsTemplate');
    var bootsElement = document.querySelector('.bootsList');

    var addStockButton = document.querySelector('.addBootStock');
    var showAvailableStock = document.querySelector('.showAvailableBoots');

    var addButton = document.querySelector('.addButton');
    var filterButton = document.querySelector('.filterButton');

    var bootName = document.querySelector('.bootName');
    var bootColor = document.querySelector('.bootColor');
    var bootSize = document.querySelector('.bootSize');
    var bootPrice = document.querySelector('.bootPrice');
    var quantity = document.querySelector('.quantity');


    var boots = [{
    bootName : 'boot1',
    bootColor : 'pink',
    bootSize : 4,
    bootPrice :"R"+400,
    quantity : 3
    }];

    function display(data, bootsList) {

 if (!bootsList){

   bootsList = data;
 }
        var bootNames = [];
        var bootColors = [];
        var bootSizes = [];
        var bootPrices = [];
        var quantities = [];

var bootMap = {};
for (var i = 0; i < data.length; i++) {
    var bootsData = data[i];
    if (bootMap[bootsData.bootName] === undefined){
      bootMap[bootsData.bootName] = bootsData.bootName;
      bootNames.push(bootsData.bootName);
    }
    if (bootMap[bootsData.bootColor] === undefined){
      bootMap[bootsData.bootColor]= bootsData.bootColor;
      bootColors.push(bootsData.bootColor);
    }
    if (bootMap[bootsData.bootSize] === undefined){
      bootMap[bootsData.bootSize] = bootsData.bootSize;
      bootSizes.push(bootsData.bootSize);
    }
    if (bootMap[bootsData.bootPrice] === undefined){
      bootMap[bootsData.bootPrice] = bootsData.bootPrice;
      bootPrices.push(bootsData.bootPrice);
    }
  }
        for (var i = 0; i < data.length; i++) {
            var bootsData = data[i];

            // bootNames.push(bootsData.bootName);
          //  bootColors.push(bootsData.bootColor);
          //  bootSizes.push(bootsData.bootSize);
        //    bootPrices.push(bootsData.bootPrice);
        //    quantities.push(bootsData.quantity);
        }

        filters.innerHTML = filterTemplate({
            bootNames: bootNames.sort(),
            bootColors  : bootColors.sort(),
            bootSizes  : bootSizes.sort(),
            bootPrices  : bootPrices.sort(),
            quantities  : quantities.sort(function(a,b){
                return a - b;
            })
        });

        bootsElement.innerHTML = bootsTemplate({
            boots: bootsList
        });
}
//When button 'Add Stock' is clicked, this will be so that the user
// has access to the div that allows them to add stock
addStockButton.addEventListener('click', function() {
      var getDiv = document.querySelector('.add');

       if (getDiv.style.display === 'none')
       {
       getDiv.style.display = 'block';
       }
       else {
       getDiv.style.display = 'none';
       }
  });

  showAvailableStock.addEventListener('click', function() {
        var getDiv = document.querySelector('.display');

         if (getDiv.style.display === 'none')
         {
         getDiv.style.display = 'block';
         }
         else {
         getDiv.style.display = 'none';
         }
    });

    filters.addEventListener('click', function(evt){
        if (evt.target.name === 'filterButton'){

            var bootNameFilter = document.querySelector('.bootNameFilter');
            var bootColorFilter = document.querySelector('.bootColorFilter');
            var bootSizeFilter = document.querySelector('.bootSizeFilter');
            var bootPriceFilter = document.querySelector('.bootPriceFilter');

  var filteredboots = [];
            if (bootNameFilter.value == ""
            && bootColorFilter.value == ""
            && bootSizeFilter.value == ""
            && bootPriceFilter.value == "")
            {
              display(boots);
              return;
            }


            for (var i = 0; i < boots.length; i++) {
              var boot = boots[i]
              if (boot.bootName === bootNameFilter.value){
                filteredboots.push(boot);
              }
              if (boot.bootColor === bootColorFilter.value){
                filteredboots.push(boot);
              }
              if (boot.bootSize === bootSizeFilter.value){
                filteredboots.push(boot);
              }
              if (boot.bootPrice === bootPriceFilter.value){
                filteredboots.push(boot);
              }
            }
            display(boots, filteredboots);
        }
    });

    addButton.addEventListener('click', function() {
        var bootNameValue = bootName.value;
        var bootColorValue = bootColor.value;
        var bootSizeValue = bootSize.value;
        var bootPriceValue = bootPrice.value;
        var quantityValue = quantity.value;


        if (bootNameValue !== ''
            && bootColorValue !== ''
            && bootSizeValue !== ''
            && bootPriceValue !== ''
             && quantityValue !== '') {
            boots.push({
              bootName : bootNameValue,
              bootColor :bootColorValue,
              bootSize : bootSizeValue,
              bootPrice :"R"+bootPriceValue,
              quantity : quantityValue
            });

        }

        display(boots);

        bootName.value = "";
        bootColor.value = "";
        bootSize.value = "";
        bootPrice.value = "";
        quantity.value = "";
    });

    display(boots);

})();
