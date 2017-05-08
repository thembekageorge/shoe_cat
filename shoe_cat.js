
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
    bootPrice : 400,
    quantity : 3

    }];
    function showData(data) {

        var bootNames = [];
        var bootColors = [];
        var bootSizes = [];
        var bootPrices = [];
        var quantities = [];

        for (var i = 0; i < data.length; i++) {
            var bootsData = data[i];
            bootNames.push(bootsData.bootName);
            bootColors.push(bootsData.bootColor);
            bootSizes.push(bootsData.bootSize);
            bootPrices.push(bootsData.bootPrice);
            quantities.push(bootsData.quantity);
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
            boots: data
        });
}
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

    filters.addEventListener('click', function(evt){
        if (evt.target.name === 'filterButton'){

            var bootNameFilter = document.querySelector('.bootNameFilter');
            var bootColorFilter = document.querySelector('.bootColorFilter');
            var bootSizeFilter = document.querySelector('.bootSizeFilter');
            var bootPriceFilter = document.querySelector('.bootPriceFilter');
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
            && bootSizeValue !== '' && bootPriceValue !== '' && quantityValue !== '') {
            boots.push({
              bootName : bootNameValue,
              bootColor : bootColorValue,
              bootSize : bootSizeValue,
              bootPrice : bootPriceValue,
              quantity : quantityValue
            });
        }

        showData(boots);
    });

    showData(boots);

})();
