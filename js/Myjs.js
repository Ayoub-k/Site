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


function ChangeCategorie(){
    let resultats = [];
    if($('#agileinfo-nav_search').val() != ''){
        $('#BigSlider').html($('#SmallSlider').html());
    }
    switch($('#SearchProducts').val()){
        case $('#Chargeur').val():
            resultats = [...Array(102).keys()]
            break;
        case $('#FILL_LIGHT').val():
            resultats = [...Array(8).keys()]
            break;
        case $('#PLAY').val():
            resultats = [...Array(6).keys()]
            break;
        case $('#POWER_BANK').val():
            resultats = [...Array(12).keys()]
            break;
        case $('#SPEAKER').val():
            resultats = [...Array(15).keys()]
            break;
        case $('#USB_CABLE').val():
            resultats = [...Array(63).keys()]
            break;
        default:
            break;
    }
    return resultats;
}

var ModoleProduit = `
        <div class="container py-xl-4 py-lg-2">
			<!-- tittle heading -->
			<h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span>O</span>ur
				<span>N</span>ew
				<span>P</span>roducts
			</h3>
			<!-- //tittle heading -->
			<div >
				<div class="row">
					<!-- product left -->
					<div class="agileinfo-ads-display col-lg-12">
						<div class="wrapper" >
							<div class="data-container"></div>
						</div>
					</div>
				</div>
				<div  class="pagination-container"></div>
			</div>
		</div>
    `;


function GetCategorie() {
    $('#SearchProducts').val($('#agileinfo-nav_search').val());

    if($("[class*='hasActive']").hasClass('active')){
        $("[class*='nav-link']").removeClass('active');
        $('#IdPageProducts_').addClass('active');
        $('#content__div').html(ModoleProduit);
    }

    $('.pagination-container').pagination({
        dataSource: ChangeCategorie(),
        pageSize: 9,
        callback: function(data, pagination) {
            var html = simpleTemplating(data);
            $('.data-container').html(html);
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
            var html = simpleTemplating(data);
            $('.data-container').html(html);
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
    const folder = $('#SearchProducts').val()== '' ? 'Chargeur' : $('#SearchProducts').val();
    dataHtml += `<div class="row">`;
    let element = data[0] == 0 ? 1 : data[0];
    let len = data.length // 5
    let elementTable = 0
    while(i <= len && countItem < 3 ){
        let j=0;
        while(j < 3 && i <= len){
            let $htmlProduct = $('#ModelShowProduct').html();
            $htmlProduct = $htmlProduct.replace('"images/ImagesProducts/"', '"images/ImagesProducts/'+ folder + '/' + element + '.jpg' + '"')
            if(elementTable <= len){
                dataHtml += $htmlProduct;
            }
            
            j++;
            element++;
            elementTable++;
            i++;
        }
        
        countItem++;
    }
    dataHtml += `
                </div>
            </div>
        </div>
    `;
    return dataHtml;
}



