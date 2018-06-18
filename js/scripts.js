function order(sidesOrderedReduced, beveragesOrderedReduced, dessertsOrderedReduced, pizzaReduced){
  this.sidesOrderedReduced = sidesOrderedReduced;
  this.beveragesOrderedReduced = beveragesOrderedReduced;
  this.dessertsOrderedReduced = dessertsOrderedReduced;
  this.pizzaReduced = pizzaReduced;
}

var sidesOrdered = [];
var sidesOrderedReduced;
var beveragesOrdered = [];
var beveragesOrderedReduced;
var dessertsListed = [];
var dessertsOrdered = [];
var dessertsOrderedReduced;


var pizza = 10;
var pizzaSauce = parseInt($("input:radio[name=pizzaSauce]:checked").val());
var pizzaToppingsOrdered = [];
var pizzaReduced;
var total;

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    debugger;
    var newOrder = new order(sidesOrderedReduced, beveragesOrderedReduced, dessertsOrderedReduced, pizzaReduced, total);
    order.prototype.total = function(){
      return beveragesOrderedReduced+sidesOrderedReduced+dessertsOrderedReduced+pizza+pizzaReduced;
    }

      $("input:checkbox[value=sides]:checked").each(function(){
        sidesOrdered.push(5);
        sidesOrderedReduced =  sidesOrdered.reduceRight(function(a,b){return a+b;});
        return sidesOrderedReduced;
      });

      $("input:checkbox[value=pizzaToppings]:checked").each(function(){
        pizzaToppingsOrdered.push(1);
        pizzaReduced = pizzaToppingsOrdered.reduceRight(function(a,b){return a+b;});
        return pizzaReduced;
      });

      $("input:checkbox[value=beverages]:checked").each(function(){
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

      alert(beveragesOrderedReduced+sidesOrderedReduced+dessertsOrderedReduced);
      alert(pizza+pizzaReduced);
      alert(beveragesOrderedReduced+sidesOrderedReduced+dessertsOrderedReduced+pizza+pizzaReduced);

      $("ul#orders").append(
           "<li><span class='orderInfo'>Order1</span></li>");
         $(".orderInfo").last().click(function(){
           $("#show-info").show();
           $(".desserts").text(dessertsListed);
           $(".total").text(newOrder.total);

         });
    });
});
