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
    pageSize: 9,
    formatResult: function(data) {

        var data = `
            <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                <h3 class="heading-tittle text-center font-italic">New Brand Mobiles</h3>
        `;

        let i=0, countItem=0;
        while(i < data.length && countItem < 3){
            data += `<div class="row">`;
            let j=0;
            while(j < 3){
                data += `
                <div class="col-md-4 product-men mt-5">
                <div class="men-pro-item simpleCart_shelfItem">
                    <div class="men-thumb-item text-center">
                        <img src="images/ImagesProducts/Chargeur/${i+j}.jpg" alt="">
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
                `;
                j++
            }
            i++;
            countItem++;
        }
        data += `
                    </div>
                </div>
            </div>
        `;
        $('#wrapper').html(data);
    },
    callback: function(data, pagination) {
        // console.log(data);
        console.log(pagination);
        // template method of yourself
        // var html = template(data);
        // dataContainer.html(html);
        // $('#wrapper').html(data);
    }
})





