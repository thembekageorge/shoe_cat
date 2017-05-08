
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

    var addButton = document.querySelector('.addButton');
    var filterButton = document.querySelector('.filterButton');

  var bootName = document.querySelector('.bootName');
  var bootColor = document.querySelector('.bootColor');
  var bootSize = document.querySelector('.bootSize');
  var bootPrice = document.querySelector('.bootPrice');
  var quantity = document.querySelector('.quantity');

    var boots = [{
    bootName : 'boot1';
    bootColor : 'pink'
    bootSize : 4
    bootPrice : 400
    quantity : 3;

    }];


        var bootNames = [];
        var bootColors = [];
        var bootSizes = [];
        var bootPrices = [];
        var quantities = [];

        for (var i = 0; i < data.length; i++) {
            var bootsData = data[i];
            bootNames.push(boosData.bootName);
            bootColors.push(bootsData.bootColor);
            bootSizes.push(bootsData.bootSize);
            bootPrices.push(bootsData.bootPrice);
            quantities.push(bootsData.quantity);
        }

        filters.innerHTML = filterTemplate({
            boots: bootNames.sort(),
            : bootColors.sort(),
            : bootSizes.sort(function(a,b){
                return a - b;
            })
        });

        bootsElement.innerHTML = bootsTemplate({
            boots: data
        });
    }

    filters.addEventListener('click', function(evt){
        if (evt.target.name === 'filterButton'){
            alert('filter!');

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
        var quantity = quantity.value;


        if (bootNameValue !== ''
            && bootColorValue !== ''
            && bootSizeValue !== '' && bootPriceValue !== '' && quantity !== '') {
            boots.push({
              bootName : bootNameValue;
              bootColor : bootColorValue;
              bootSize : bootSizeValue;
              bootPrice : bootPriceValue;
              quantity : quantity;
            });
        }

        showData(boots);
    });

    showData(boots);

})();
