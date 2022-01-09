function GetAbout(event){
    $("[class*='nav-link']").removeClass('active');
    $(event.target).addClass('active');
    $('#content__div').html($('#about__code').html());
    $('#BigSlider').html($('#SmallSlider').html());
}

function GetContact(event){
    $("[class*='nav-link']").removeClass('active');
    $(event.target).addClass('active');
    $('#content__div').html($('#contact__code').html());
    $('#BigSlider').html($('#SmallSlider').html());
}

const categorie = $('#Chargeur').val();

switch(categorie){
    case $('#Chargeur').val():
        break;
}




$('#wrapper').pagination({
    dataSource: [...Array(100).keys()],
    pageSize: 12,
    formatResult: function(data) {
        console.log(data);
        for (var i = 0, len = data.length; i < len; i++) {

            data +=`
            
            <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
            <h3 class="heading-tittle text-center font-italic">New Brand Mobiles</h3>
            <div class="row">
                <div class="col-md-4 product-men mt-5">
                    <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                            <img src="images/m1.jpg" alt="">
                            <div class="men-cart-pro">
                                <div class="inner-men-cart-pro">
                                    <a href="single.html" class="link-product-add-cart">Quick View</a>
                                </div>
                            </div>
                        </div>
                        <div class="item-info-product text-center border-top mt-4">
                            <h4 class="pt-1">
                                <a href="single.html">Samsung Galaxy J7</a>
                            </h4>
                            <div class="info-product-price my-2">
                                <span class="item_price">$200.00</span>
                                <del>$280.00</del>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-4 product-men mt-5">
                    <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                            <img src="/ImagesProducts/Chargeur/${i}.jpg" alt="">
                            <div class="men-cart-pro">
                                <div class="inner-men-cart-pro">
                                    <a href="single.html" class="link-product-add-cart">Quick View</a>
                                </div>
                            </div>
                            <span class="product-new-top">New</span>

                        </div>
                        <div class="item-info-product text-center border-top mt-4">
                            <h4 class="pt-1">
                                <a href="single.html">OPPO A37f</a>
                            </h4>
                            <div class="info-product-price my-2">
                                <span class="item_price">$230.00</span>
                                <del>$250.00</del>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-4 product-men mt-5">
                    <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                            <img src="images/m3.jpg" alt="">
                            <div class="men-cart-pro">
                                <div class="inner-men-cart-pro">
                                    <a href="single.html" class="link-product-add-cart">Quick View</a>
                                </div>
                            </div>
                            <span class="product-new-top">New</span>

                        </div>
                        <div class="item-info-product text-center border-top mt-4">
                            <h4 class="pt-1">
                                <a href="single.html">Apple iPhone X</a>
                            </h4>
                            <div class="info-product-price my-2">
                                <span class="item_price">$280.00</span>
                                <del>$300.00</del>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            `;
        }
    },
    callback: function(data, pagination) {
        // template method of yourself
        var html = template(data);
        dataContainer.html(html);
    }
})





