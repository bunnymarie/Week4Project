
$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();

    function order(sidesOrderedReduced, beveragesOrderedReduced, dessertsOrderedReduced, pizzaReduced){
      this.sidesOrderedReduced = sidesOrderedReduced;
      this.beveragesOrderedReduced = beveragesOrderedReduced;
      this.dessertsOrderedReduced = dessertsOrderedReduced;
      this.pizzaReduced = pizzaReduced;
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

    var pizza = 10;
    var pizzaSauce = parseInt($("input:radio[name=pizzaSauce]:checked").val());
    var pizzaToppingsListed = [];
    var pizzaToppingsOrdered = [];
    var pizzaReduced;
    pizzaReduced = pizzaReduced || 0
    var total;

    var newOrder = new order(sidesOrderedReduced, beveragesOrderedReduced, dessertsOrderedReduced, pizzaReduced, total);
    order.prototype.total = function(){
      return beveragesOrderedReduced+sidesOrderedReduced+dessertsOrderedReduced+pizza+pizzaReduced;
    }

      $("input:checkbox[value=sides]:checked").each(function(){
        sidesListed.push($(this).attr("id"));
        sidesOrdered.push(5);
        sidesOrderedReduced =  sidesOrdered.reduceRight(function(a,b){return a+b;});
        return sidesOrderedReduced;
      });

      $("input:checkbox[value=pizzaToppings]:checked").each(function(){
        pizzaToppingsListed.push($(this).attr("id"));
        pizzaToppingsOrdered.push(1);
        pizzaReduced = pizzaToppingsOrdered.reduceRight(function(a,b){return a+b;});
        return pizzaReduced;
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
           $(".pizzaToppings").text(pizzaToppingsListed);
           $(".beverages").text(beveragesListed);
           $(".desserts").text(dessertsListed);
           $(".total").text(newOrder.total);
         });

    });
});
