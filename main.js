menu_list_array = ["Veg Manchurian Pizza", "Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Tikka Pizza", " Deluxe Veggie Pizza", "Veg Extra Cheese Pizza"];

function getmenu() {

    var html_data = "";
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        html_data = html_data + menu_list_array[i] + '<br>'
    }

    document.getElementById("display_menu").innerHTML = html_data;
}

function add_item() {

    var html_data;
    var imgtags = '<img id="im1" src="pizzaImg.png"/>'
    var item = document.getElementById("add_item").value;
    menu_list_array.sort();
    html_data = "";
    for (var i = 0; i < menu_list_array.length; i++) {
        html_data = html_data + imgtags + menu_list_array[i] + '<br>'
    }

    document.getElementById("display_addedmenu").innerHTML = html_data;
}

function add_top() {

    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}