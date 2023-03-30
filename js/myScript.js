// JavaScript Document


//$('.lor__form').hide();
$('.lorH__form').hide();
//$('.lorH__form').hide();

$('.billing__button').click(function (e) {
   e.preventDefault();
   $(this).addClass('active');
   $('.lor__button').removeClass('active');
   $('.lorH__button').removeClass('active');
   $('.billingKW__button').removeClass('active');
   $('.DTRloading__button').removeClass('active');
   $('.fuse__button').removeClass('active');
   $('.billing__form').show();
   $('.billingKW__form').hide();
   $('.lor__form').hide();
   $('.lorH__form').hide();
   $('.DTRloading__form').hide();
   $('.fuse__form').hide();

});

$('.lor__button').click(function (e) {
   e.preventDefault();
   $(this).addClass('active');
   $('.billing__button').removeClass('active');
   $('.billingKW__button').removeClass('active');
   $('.lorH__button').removeClass('active');
   $('.DTRloading__button').removeClass('active');
   $('.fuse__button').removeClass('active');
   $('.lor__form').show();
   $('.lorH__form').hide();
   $('.billingKW__form').hide();
   $('.billing__form').hide();
   //   $('.fuse__form').hide();
   $('.DTRloading__form').hide();
   $('.fuse__form').hide();

});


$('.lorH__button').click(function (e) {
   e.preventDefault();
   $(this).addClass('active');
   $('.billing__button').removeClass('active');
   $('.billingKW__button').removeClass('active');
   $('.lor__button').removeClass('active');
   $('.DTRloading__button').removeClass('active');
   $('.fuse__button').removeClass('active');
   $('.lorH__form').show();
   $('.lor__form').hide();
   $('.billingKW__form').hide();
   $('.billing__form').hide();
   $('.DTRloading__form').hide();
   $('.fuse__form').hide();
})

$('.DTRloading__button').click(function (e) {
   e.preventDefault();
   $(this).addClass('active');
   $('.billing__button').removeClass('active');
   $('.lorH__button').removeClass('active');
   $('.billingKW__button').removeClass('active');
   $('.lor__button').removeClass('active');
   $('.fuse__button').removeClass('active');
   $('.DTRloading__form').show();
   $('.billingKW__form').hide();
   $('.lorH__form').hide();
   $('.lor__form').hide();
   $('.billing__form').hide();
   $('.fuse__form').hide();


});

$('.fuse__button').click(function (e) {
   e.preventDefault();
   $(this).addClass('active');
   $('.billing__button').removeClass('active');
   $('.billingKW__button').removeClass('active');
   $('.lorH__button').removeClass('active');
   $('.lor__button').removeClass('active');
   $('.DTRloading__button').removeClass('active');
   $('.fuse__form').show();
   $('.lorH__form').hide();
   $('.lor__form').hide();
   $('.billingKW__form').hide();
   $('.billing__form').hide();
   $('.DTRloading__form').hide();

});

$('.billingKW__button').click(function (e) {
   e.preventDefault();
   $(this).addClass('active');
   $('.billing__button').removeClass('active');
   $('.lorH__button').removeClass('active');
   $('.lor__button').removeClass('active');
   $('.fuse__button').removeClass('active');
   $('.DTRloading__button').removeClass('active');
   $('.billingKW__form').show();
   $('.lorH__form').hide();
   $('.lor__form').hide();
   $('.fuse__form').hide();
   $('.billing__form').hide();
   $('.DTRloading__form').hide();


});


//  BILLING (AMP)

const loadAmps = document.querySelector("#inputAmps");
const Band = document.querySelector("#selectBand");
const output = document.querySelector("#outputCost");
const start = document.getElementById("btnStart");
const refresh = document.getElementById("btnRefresh");

function calculate(e) {
   e.preventDefault();
   var total = (loadAmps.value * Band.value * (0.240 * 0.6 * 0.85 * 1.075));
   output.innerHTML = "\u20a6" + total.toLocaleString('en-US');
}


function emptyInput() {
   output.innerHTML = "";
   loadAmps.value = "";
   Band.value = "";
   //  Phase.value = "";
}


start.addEventListener("click", calculate);
refresh.addEventListener("click", emptyInput);

//      BILLING (WATT)

const loadW = document.querySelector("#inputW");
const BandW = document.querySelector("#selectBandW");
const outputW = document.querySelector("#outputCostW");
const startW = document.getElementById("btnStartW");
const refreshW = document.getElementById("btnRefreshW");

function calcBillWatt(e) {
 
   e.preventDefault();
  
   var total = (((loadW.value) / 1000) * BandW.value * 1.075 * 0.6);
 
   outputW.innerHTML = "\u20a6" + total.toLocaleString('en-US');
}

function emptyBillWattInput() {
 
   outputW.innerHTML = "";
   loadW.value = "";
   BandW.value = "";
   //  Phase.value = "";
}


startW.addEventListener("click", calcBillWatt);
refreshW.addEventListener("click", emptyBillWattInput);

//       LOR (ENERGY THEFT)

const loadAmps1 = document.querySelector("#inputAmps1");
const billHrs = document.querySelector("#inputHrs");
const Band1 = document.querySelector("#selectBand1");
const output1 = document.querySelector("#outputCost1");
const start1 = document.getElementById("btnStart1");
const refresh1 = document.getElementById("btnRefresh1");

function calcLorRPD(e) {

   e.preventDefault();
  
   var total = loadAmps1.value * billHrs.value * Band1.value * 0.240 * 0.6 * 0.85 * 1.075;
  
   output1.innerHTML = "\u20a6" + total.toLocaleString('en-US');
}

function emptyLorRPDInput() {
   
   output1.innerHTML = "";
   loadAmps1.value = "";
   billHrs.value = "";
   Band1.value = "";
   //  Phase1.value = "";
}


start1.addEventListener("click", calcLorRPD);
refresh1.addEventListener("click", emptyLorRPDInput);


//              LOR (HAULAGE)

const loadMW = document.querySelector("#inputMW");
const billHrs2 = document.querySelector("#inputHrs2");
const Band2 = document.querySelector("#selectBand2");
const output2 = document.querySelector("#outputCost2");
const start2 = document.getElementById("btnStart2");
const refresh2 = document.getElementById("btnRefresh2");

function calcLorH(e) {
   total = total || 0;
   e.preventDefault();
  
   var total = ((40000) + ((loadMW.value * 1000) * billHrs2.value * Band2.value * 1.075));
  
   if (total === 40000) {
      output2.innerHTML = "\u20a6" + "0";
   } else {

      output2.innerHTML = "\u20a6" + total.toLocaleString('en-US');
   }
}

function emptyLorHInput() {
   output2.innerHTML = "";
   loadMW.value = "";
   billHrs2.value = "";
   Band2.value = "";
   //  Phase1.value = "";
}
start2.addEventListener("click", calcLorH);
refresh2.addEventListener("click", emptyLorHInput);


//       BILL DISCOUNT
document.getElementById("btnStartDiscount").addEventListener('click', doDisc);

   function doDisc() {
      var totalArrears = document.getElementById("inputBill").value;
      let rate = 0;
//      let tax = 1.06;
      let total = 0;
      if (totalArrears >9999 && totalArrears < 50000) {
        rate = 0.2;
      } else if (totalArrears > 49999 && totalArrears <200000){
        rate = 0.22;
	  } else if (totalArrears > 199999 && totalArrears <300000){
        rate = 0.25;
	  } else if (totalArrears > 299999 && totalArrears <400000){
        rate = 0.3;
	  }  else if (totalArrears > 399999 && totalArrears <500000){
        rate = 0.35;
	  }  else if (totalArrears >= 500000){
        rate = 0.4;
      } else{
        rate = 0;
      }
      let discount = totalArrears * rate;
      if (rate == 0.2) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "You're Eligible for 20% discount.";
      }else if (rate == 0.22) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "You're Eligible for 22% discount.";
	  }else if (rate == 0.25) {
        disctotal = "\u20a6" +discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "You're Eligible for 25% discount.";
	  }else if (rate == 0.3) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "You're Eligible for 30% discount.";
	  }else if (rate == 0.35) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "You're Eligible for 35% discount.";
	  }else if (rate == 0.4) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "You're Eligible for 40% discount.";
      } else {
        if (rate == 0) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "";
        } else {
          disctotal = "";
        }
      }
//      taxtotal = tax;
      finaltotal = ((totalArrears - discount) * 1);
      document.getElementById('discountDiv').innerHTML = disctotal;
      document.getElementById('discountGiven').innerHTML = discGiven;
//      document.getElementById('taxDiv').innerHTML = "Tax: $".toFixed(2);
      document.getElementById('totalDiv').innerHTML = "\u20a6" + finaltotal.toLocaleString(undefined,{maximumFractionDigits:2});
    };

$( ".btnReset2" ).click(function() {
  $( ".clear2" ).empty();
	document.querySelector('#totalArrears').value ='';
	document.querySelector('#inputBill').value ='';
	document.querySelector('#discountDiv').value ='';
	document.querySelector('#totalDiv').value ='';
	document.querySelector('#discountGiven').value ='';
//	document.querySelector('#inputKVA1').value ='';
});	

document.getElementById("btnRefreshDisc").addEventListener('click', emptyArrears);
 const Arrears = document.querySelector("#inputBill");
function emptyArrears() {
  console.log("emptied!");
  
  Arrears.value = "";
  
//  Phase1.value = "";
};



//        DTR LOADING

document.getElementById("btnStart3").addEventListener('click', doCalc);

function doCalc() {

   let x = parseFloat(document.querySelector("#red").value);
   let y = parseFloat(document.querySelector("#yellow").value);
   let z = parseFloat(document.querySelector("#blue").value);
   const outputLoad = document.querySelector("#outputLoading");
   const capacity = document.querySelector("#inputKVA");
	
//  const refresh3 = document.getElementById("btnRefresh3");

   let loading = ((Math.max(x, y, z) / (capacity.value * 1.4)) * 100);

   loading = loading || 0;
	if(loading === 0) {
	document.getElementById('outputLoading').style.color = "black";
		
    }else if(loading < 50) {
	document.getElementById('outputLoading').style.color = "green";
		
    }else if(loading >= 50) {
                document.getElementById('outputLoading').style.color = "red";
	}
	
   outputLoad.innerHTML = loading.toFixed(0) + "%";
}

document.getElementById("btnStart3").addEventListener('click', doMath);

		
	function doMath() {

   let xx = parseFloat(document.querySelector("#red").value);
   let yy = parseFloat(document.querySelector("#yellow").value);
   let zz = parseFloat(document.querySelector("#blue").value);
   let nn = parseFloat(document.querySelector("#neutral").value);
	
	let imbalance = ((nn/Math.max(xx,yy,zz,nn))*100);
	
	imbalance = imbalance || 0;
	
	if(imbalance === 0) {
	            balance.innerHTML = "";
	            document.getElementById('outputImbalance').style.color = "black";
		
    }else if(imbalance <= 20) {
                document.getElementById('outputImbalance').style.color = "green";
                document.getElementById('balance').style.color = "green";
    			balance.innerHTML = "DTR's Load is Balanced";
			}else if(imbalance > 49) {
                document.getElementById('outputImbalance').style.color = "red";
                document.getElementById('balance').style.color = "red";
    			balance.innerHTML = "DTR's Load is Highly Unbalanced";
		
            }else if(imbalance >= 20) {
                document.getElementById('outputImbalance').style.color = "brown";
                document.getElementById('balance').style.color = "brown";
		 		balance.innerHTML = "DTR's Load is Moderately Balanced";
					} 
	
			outputImbalance.innerHTML = imbalance.toFixed(0) + "%";
	
}

	$( ".btnReset" ).click(function() {
  $( ".clear" ).empty();
	document.querySelector('#red').value ='';
	document.querySelector('#yellow').value ='';
	document.querySelector('#blue').value ='';
	document.querySelector('#neutral').value ='';
	document.querySelector('#inputKVA').value ='';
});	


	
	
//                    TARIFF TICKER

const news = ["Current Non-MD Tariff  &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; Band A - \u20a6 72.67  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      Band B - \u20a6 69.96   &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; Band C - \u20a6 56.38  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;      Band D - \u20a6 39.67   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Band E - \u20a6 39.44. &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Designed by: &nbsp; &nbsp; &nbsp;Obot   &nbsp; Akpan ",
"&nbsp; &nbsp;" ]

//logo

const logo = "<img src  width='25px' style='margin:0 8px'/>";
let tickerText = "";
for(let i=0; i<news.length; i++){
  tickerText+=news[i];
  if(i!=news.length-1){
    tickerText+=logo;
  }
	
}

document.querySelector("#scroll").innerHTML = tickerText;
	




