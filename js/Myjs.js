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

/*
<input type="text" value="Chargeur" id="Chargeur" hidden/>
	<input type="text" value="FILL_LIGHT" id="FILL_LIGHT" hidden/>
	<input type="text" value="PLAY" id="PLAY" hidden/>
	<input type="text" value="POWER_BANK" id="POWER_BANK" hidden/>
	<input type="text" value="SPEAKER" id="SPEAKER" hidden/>
	<input type="text" value="USB_CABLE" id="USB_CABLE" hidden/>
	<input type="text" value="SearchProducts" id="SearchProducts" hidden/>
*/

function ChangeCategorie(){
    let resultats = [];

    switch($('#SearchProducts').val()){
        case $('#Chargeur').val():
            resultats = [...Array(101).keys()]
            break;
        case $('#FILL_LIGHT').val():
            resultats = [...Array(8).keys()]
            break;
        case $('#PLAY').val():
            resultats = [...Array(100).keys()]
            break;
        case $('#POWER_BANK').val():
            resultats = [...Array(100).keys()]
            break;
        case $('#SPEAKER').val():
            resultats = [...Array(100).keys()]
            break;
        case $('#USB_CABLE').val():
            resultats = [...Array(100).keys()]
            break;
        default:
            resultats = [...Array(101).keys()]
            break;
    }
    return resultats;
}



function GetCategorie() {
    $('#SearchProducts').val($('#agileinfo-nav_search').val());
    $('.pagination-container').pagination({
        dataSource: ChangeCategorie(),
        pageSize: 9,
        callback: function(data, pagination) {
            console.log(data);
            var html = simpleTemplating(data);
            $('#data-container').html(html);
            if(data[0] != 0){
                $('<a href="#TopProducts"></a>')[0].click();
            }
        }
    })
}

$(function() {
    $('.pagination-container').pagination({
        dataSource: ChangeCategorie(),
        pageSize: 9,
        callback: function(data, pagination) {
            console.log(data);
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
    const folder = $('#SearchProducts').val()== ''? 'Chargeur' : $('#SearchProducts').val();
    dataHtml += `<div class="row">`;
    let element = data[0] == 0 ? 1 : data[0];
    while(i < data.length && countItem < 3){
        let j=0;
        while(j < 3){
            let $htmlProduct = $('#ModelProducts').html();
            $(".IdImageProduit", $htmlProduct).attr('src', $(".IdImageProduit", $htmlProduct).attr('src') + folder + '/' + element + '.jpg');
            $htmlProduct = $htmlProduct.replace('"images/ImagesProducts/"', '"images/ImagesProducts/'+ folder + '/' + element + '.jpg' + '"')
            dataHtml += $htmlProduct;
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
