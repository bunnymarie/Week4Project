
$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();

    function order(sidesOrderedReduced, pizzaSauceReduced, beveragesOrderedReduced, dessertsOrderedReduced, pizzaToppingsReduced){
      this.sidesOrderedReduced = sidesOrderedReduced;
      this.beveragesOrderedReduced = beveragesOrderedReduced;
      this.dessertsOrderedReduced = dessertsOrderedReduced;
      this.pizzaSauceReduced = pizzaSauceReduced;
      this.pizzaToppingsReduced = pizzaToppingsReduced;
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

    var newOrder = new order(sidesOrderedReduced, beveragesOrderedReduced, dessertsOrderedReduced, pizzaSauceReduced, pizzaToppingsReduced, total);
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
           "<li><span class='orderInfo'>Order1</span></li>");
         $(".orderInfo").last().click(function(){
           $("#show-info").show();
           $(".sides").text(sidesListed);
           $(".pizzaSauce").text(pizzaSauceListed);
           $(".pizzaToppings").text(pizzaToppingsListed);
           $(".beverages").text(beveragesListed);
           $(".desserts").text(dessertsListed);
           $(".total").text(newOrder.total);
         });

    });
});
