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




$(function() {
    $('#pagination-container').pagination({
        dataSource: [...Array(100).keys()],
        pageSize: 3,
        callback: function(data, pagination) {
            var html = simpleTemplating(data);
            $('#data-container').html(html);
            if(data[0] != 0){
                $('<a href="#TopProducts"></a>')[0].click();
            }
            
        }
    })
});


function simpleTemplating(data) {
    var dataHtml = `
        <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
            <h3 class="heading-tittle text-center font-italic" id="TopProducts">New Brand Mobiles</h3>
    `;
    let i=0, countItem=0;
    dataHtml += `<div class="row">`;
    let element = data[0] == 0 ? 1 : data[0];
    while(i < data.length && countItem < 3){
        let j=0;
        while(j < 3){
            dataHtml += `
                <div class="col-md-4 product-men mt-5">
                    <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                            <img src="images/ImagesProducts/Chargeur/${element}.jpg" alt="">
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
            j++;
            element++;
        }
        i++;
        countItem++;
    }
    dataHtml += `
                </div>
            </div>
        </div>
    `;
    return dataHtml;
}
