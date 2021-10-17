/*************************************
 * The decorator pattern focuses on adding properties,
 * functionalities, and behavior to existing classes
 * dynamically. The additional decoration functionalities
 * aren’t considered essential enough to be a part of the
 * original class definition as they can cause clutter.
 * Hence, the decorator pattern lets you modify the code
 * without changing the original class.
 *
 *
 *******************************************/

class FrozenYogurt {
    constructor(flavor, price) {
        this.flavor = flavor;
        this.price = price;
    }

    orderPlaced() {
        console.log(`The ${this.flavor} flavor will cost you ${this.price} dollars`)
    }
}


//decorator1

function addFlavors(froyo) {
    froyo.addStrawberry = true;
    froyo.addVanilla = true;
    froyo.price += 20;
    froyo.updatedInfo = function () {
        console.log(`The updated price after adding flavors is ${froyo.price} dollars`)
    }

    return froyo;
}

//decorator 2

function addToppings(froyo) {
    froyo.hasSprinkles = true;
    froyo.hasBrownie = true;
    froyo.hasWafers = true;
    froyo.allToppings = function () {
        console.log("Your froyo has sprinkles, brownie, and wafers")
    }
    return froyo;
}

//using decprators
const froyo = new FrozenYogurt('chocolate', 10);
froyo.orderPlaced();

//add flavors
const froyoWithFlavors = addFlavors(froyo);
froyoWithFlavors.updatedInfo();

//add Toppings
const froyoWithToppings = addToppings(froyo);
froyoWithToppings.allToppings();
