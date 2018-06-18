
$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();

    function order(sidesOrderedReduced, pizzaSauceReduced, beveragesOrderedReduced, dessertsOrderedReduced, pizzaToppingsReduced, zipcodeAddress, cityAddress, streetAddress, total){
      this.sidesOrderedReduced = sidesOrderedReduced;
      this.beveragesOrderedReduced = beveragesOrderedReduced;
      this.dessertsOrderedReduced = dessertsOrderedReduced;
      this.pizzaSauceReduced = pizzaSauceReduced;
      this.pizzaToppingsReduced = pizzaToppingsReduced;
      this.zipcodeAddress = zipcodeAddress;
      this.cityAddress = cityAddress;
      this.streetAddress = streetAddress;
      this.total = total;
    }

    var sidesListed = [];
    var sidesOrdered = [];
    sidesOrderedReduced = sidesOrderedReduced || 0
    var sidesOrderedReduced;
    var beveragesListed= [];
    var beveragesOrdered = [];
    var beveragesOrderedReduced;
    beveragesOrderedReduced = beveragesOrderedReduced || 0
    var dessertsListed = [];
    var dessertsOrdered = [];
    var dessertsOrderedReduced;
    dessertsOrderedReduced = dessertsOrderedReduced || 0

    var pizzaSauceListed = [];
    var pizzaSauce = [];
    var pizzaSauceReduced = [];
    pizzaSauceReduced = pizzaSauceReduced || 0
    var pizzaToppingsListed = [];
    var pizzaToppingsOrdered = [];
    var pizzaToppingsReduced;
    pizzaToppingsReduced = pizzaToppingsReduced || 0

    var total;

    var zipcodeAddress = $("input#zipcodeAddress").val();
    var cityAddress = $("input#cityAddress").val();
    var streetAddress = $("input#streetAddress").val();

    var newOrder = new order(sidesOrderedReduced, beveragesOrderedReduced, dessertsOrderedReduced, pizzaSauceReduced, pizzaToppingsReduced, zipcodeAddress, cityAddress, streetAddress, total);
    order.prototype.total = function(){
      return beveragesOrderedReduced+sidesOrderedReduced+dessertsOrderedReduced+pizzaSauceReduced+pizzaToppingsReduced;
    }

      $("input:checkbox[value=sides]:checked").each(function(){
        sidesListed.push($(this).attr("id"));
        sidesOrdered.push(5);
        sidesOrderedReduced =  sidesOrdered.reduceRight(function(a,b){return a+b;});
        return sidesOrderedReduced;
      });

      $("input:checkbox[value=pizzaSauce]:checked").each(function(){
        pizzaSauceListed.push($(this).attr("id"));
        pizzaSauce.push(10);
        pizzaSauceReduced =  pizzaSauce.reduceRight(function(a,b){return a+b;});
        return pizzaSauceReduced;
      });

      $("input:checkbox[value=pizzaToppings]:checked").each(function(){
        pizzaToppingsListed.push($(this).attr("id"));
        pizzaToppingsOrdered.push(1);
        pizzaToppingsReduced = pizzaToppingsOrdered.reduceRight(function(a,b){return a+b;});
        return pizzaToppingsReduced;
      });

      $("input:checkbox[value=beverages]:checked").each(function(){
        beveragesListed.push($(this).attr("id"));
        beveragesOrdered.push(3);
        beveragesOrderedReduced = beveragesOrdered.reduceRight(function(a,b){return a+b;});
        return beveragesOrderedReduced;
      });

      $("input:checkbox[value=desserts]:checked").each(function(){
        dessertsListed.push($(this).attr("id"));
        dessertsOrdered.push(5);
        dessertsOrderedReduced = dessertsOrdered.reduceRight(function(a,b){return a+b;});
        return dessertsOrderedReduced;
      });

      $("ul#orders").append(
           "<li><span class='orderInfo'>Order</span></li>");
         $(".orderInfo").last().click(function(){
           $("#show-info").show();
           $(".sides").text(sidesListed);
           $(".pizzaSauce").text(pizzaSauceListed);
           $(".pizzaToppings").text(pizzaToppingsListed);
           $(".beverages").text(beveragesListed);
           $(".desserts").text(dessertsListed);
           $(".zipcodeAddress").text(newOrder.zipcodeAddress);
           $(".streetAddress").text(newOrder.streetAddress);
           $(".cityAddress").text(newOrder.cityAddress);
           $(".total").text(newOrder.total);
         });
      $('input:checkbox').removeAttr('checked');
      $("input#zipcodeAddress").val("");
      $("input#cityAddress").val("");
      $("input#streetAddress").val("");
    });
});
