var itemList = {
    SP01: {
        code: "SP01",
        name: "Bắp Cải",
        price: 33000,
        photo: "img/cabbage_PNG99121.png",
    },
    SP02: {
        code: "SP02",
        name: "Cà Rốt",
        price: 16000,
        photo: "img/carrot_PNG4985.png",
    },
    SP03: {
        code: "SP03",
        name: "Đậu Hà Lan",
        price: 160000,
        photo: "img/pea_PNG24331.png",
    },
    SP04: {
        code: "SP04",
        name: "Ớt Chuông",
        price: 59000,
        photo: "img/pepper_PNG3253.png",
    },
    SP05: {
        code: "SP05",
        name: "Bông Cải",
        price: 32000,
        photo: "img/cauliflower_PNG99310.png",
    },
    SP06: {
        code: "SP06",
        name: "Khoai Tây",
        price: 16000,
        photo: "img/potato_PNG98095.png",
    },
    SP07: {
        code: "SP07",
        name: "Dưa Leo",
        price: 45000,
        photo: "img/cucumber_PNG84327.png",
    },
    SP08: {
        code: "SP08",
        name: "Bắp/Ngô Mỹ",
        price: 6500,
        photo: "img/corn_PNG98660.png",
    },
    SP09: {
        code: "SP09",
        name: "Hoa Atiso",
        price: 175000,
        photo: "img/artichoke_PNG26.png",
    },
    SP10: {
        code: "SP10",
        name: "Hành Lá",
        price: 16000,
        photo: "img/leek_PNG69.png",
    },
    SP11: {
        code: "SP11",
        name: "Cà Chua",
        price: 22500,
        photo: "img/tomato_PNG12589.png",
    },
    SP12: {
        code: "SP12",
        name: "Đậu Que",
        price: 18000,
        photo: "img/green_bean_PNG99259.png",
    },
};

function addCart(code) {
    var number = parseInt(document.getElementById(code).value);
    var current = parseInt(window.localStorage.getItem(code));
    if (typeof localStorage[code] === "undefined") {
        window.localStorage.setItem(code, number);
    } else if (number + current > 100) {
        window.localStorage.setItem(code, 100);
    } else {
        window.localStorage.setItem(code, current + number);
    }
}


function showCart() {


    $("#detail-cart").html('');
    var TotalPretax = 0;
    var tax = 0;
    var discount = 0;
    var TotalCost = 0;
    for (var i = 0; i < localStorage.length; i++) {
        var item = itemList[localStorage.key(i)];
        var photo = item.photo;
        var name = item.name;
        var price = item.price;
        var code = item.code;
        var orderNumber = localStorage.getItem(localStorage.key(i));
        var number = localStorage.getItem(localStorage.key(i));
        if (number == null)
            continue;
        var tr = document.createElement("tr");

        var giohang_index = document.createElement("th");
        giohang_index.setAttribute("scope", "row")

        tr.appendChild(giohang_index);


        giohang_index.innerHTML = "<p>" + code + "</p>";




        var giohang_td_ten = document.createElement("td");

        tr.appendChild(giohang_td_ten);

        giohang_td_ten.innerHTML = "<p>" + name + "</p>";



        var giohang_td = document.createElement("td");


        tr.appendChild(giohang_td);

        giohang_td.innerHTML =
            "<img src='" + photo + "' class= 'round-figure' width = '100px' />";


        var giohang_td_price = document.createElement("td");

        tr.appendChild(giohang_td_price);

        giohang_td_price.innerHTML = "<p>" + price.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }) + "</p>";

        var giohang_td_soluong = document.createElement("td");

        tr.appendChild(giohang_td_soluong);

        giohang_td_soluong.innerHTML = "<p>" + number + "</p>";



        var giohang_td_thanhtien = document.createElement("td");

        tr.appendChild(giohang_td_thanhtien);

        giohang_td_thanhtien.innerHTML = "<p>" + (price * orderNumber).toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }) + "</p>";

        var giohang_td_remove = document.createElement("td");

        tr.appendChild(giohang_td_remove);


        giohang_td_remove.innerHTML = "<a data-code= '" + localStorage.key(i) + "' onclick='removeCart(this.dataset.code)' ><i class='fa fa-trash header-logo' style='cursor: pointer;'></i></a>";
        var cartBody = document.getElementById("detail-cart")

        cartBody.appendChild(tr);

        TotalPretax = TotalPretax + (price * orderNumber);
        
        if(totalCount(code) >= 99){
            document.getElementById("show-off").innerHTML = "99+"
        }else if(totalCount(code) > 0){
            document.getElementById("show-off").innerHTML = ""+totalCount(code)+""
        }else{
            document.getElementById("show-off").innerHTML = "0"
        }
    }
    var cart_footer = document.getElementById("total");

    cart_footer.innerHTML = TotalPretax.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    discount = TotalPretax * getDiscountRate();

    tax = 0.1 * (TotalPretax - discount);

    TotalCost = TotalPretax - discount + tax;

    var cart_footer1 = document.getElementById("total1");

    cart_footer1.innerHTML = discount.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });;

    var cart_footer2 = document.getElementById("total2");

    cart_footer2.innerHTML = tax.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    var cart_footer3 = document.getElementById("total3");

    cart_footer3.innerHTML = TotalCost.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
    
    // document.getElementsByClassName('totalCart').innerHTML = "" + totalCount() + "";



}

function removeCart(code) {
    if (typeof window.localStorage[code] !== "undefined") {
        window.localStorage.removeItem(code);
        // document.getElementById("detail-cart").getElementsByTagName('tbody')[0].innerHTML = "";
        showCart();
    }

}
function totalCount(code) {
    var total = 0;
    for (var i = 0; i < localStorage.length; i++) {
        if(window.localStorage.getItem(localStorage.key(i)) !== null){
            total += parseInt(window.localStorage.getItem(localStorage.key(i)));
        }else{
            total = 0;
        }
    }
    return total;
}

function getDiscountRate() {
    var d = new Date();
    var weekday = d.getDay();
    var totalMins = d.getHours() * 60 + d.getMinutes();
    if (weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660) || (totalMins >= 780 && totalMins <= 1020)))
        return 0.1;
    return 0;
}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 1500);
}

function guiform() {
    var filter = document.getElementById("search").value.toLowerCase();
    var str = "san pham bap cai ca rot carrot dau ha lan ot chuong ớt chuông đậu hà lan cà rốt bắp cải sản phẩm"
    var str1 = "gioi thieu giới thiệu"
    var str2 = "lien he liên hệ"
    var str3 = "ho so hồ sơ"
    var str4 = "gio hang giỏ hàng"
    var str5 = "bong cai khoai tay dua leo bap ngo my bông cải khoai tây dưa leo bắp ngô mỹ"
    var str6 = "hoa atiso hanh la ca chua dau que hành lá cà chua đậu que"

    if (str.search(filter) != -1) {
        window.location.href = 'product.html'
    } else if (str1.search(filter) != -1) {
        window.location.href = 'intro.html'
    } else if (str2.search(filter) != -1) {
        window.location.href = 'contact.html'
    } else if (str3.search(filter) != -1) {
        window.location.href = 'personal.html'
    } else if (str4.search(filter) != -1) {
        window.location.href = 'cartdetail.html'
    } else if (str5.search(filter) != -1) {
        window.location.href = 'page2.html'
    } else if (str6.search(filter) != -1) {
        window.location.href = 'page3.html'
    } else {
        alert("Từ khóa không có trong cơ sở dữ liệu");
    }
}

window.onload = fadeOut;

window.onstorage = () => {
    showCart()
};

