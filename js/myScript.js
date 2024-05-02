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

//  BILLING (AMP)

const loadAmps = document.querySelector("#singlePhaseAmps");
const Band = document.querySelector("#selectBand");
const output = document.querySelector("#outputCost");
const start = document.getElementById("btnStart");
const refresh = document.getElementById("btnRefresh");
const a = document.getElementById("rAmp");
const b = document.getElementById("yAmp");
const c = document.getElementById("bAmp");
const neutral = document.getElementById("nAmp");


function calculate(e) {
   e.preventDefault();
	
	let avg = (Number(a.value) + Number(b.value) + Number(c.value) + Number(neutral.value)) / 3;
  let total = ((avg + loadAmps.value)* Band.value * 0.240 * 0.6 * 0.85 * 1.075);
//   var total = (((loadAmps.value)+ampThree) * Band.value * (0.240 * 0.6 * 0.85 * 1.075));
   output.innerHTML = "\u20a6" + total.toLocaleString('en-US');
}


function emptyInput() {
   output.innerHTML = "";
   loadAmps.value = "";
   Band.value = "";
   a.value = "";
   b.value = "";
   c.value = "";
   neutral.value = "";
   //  Phase.value = "";
}


start.addEventListener("click", calculate);
refresh.addEventListener("click", emptyInput);
tab1.addEventListener("click", emptyInput);
tab2.addEventListener("click", emptyInput);


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
      var totalArrears = parseFloat(document.querySelector("#inputBill").value);
      var currentBill = parseFloat(document.querySelector("#currentCharge").value);
      let rate = 0;
//      let tax = 1.06;
	  currentBill = currentBill || 0;
	  totalArrears = totalArrears || 0;
      let total = totalArrears
      if (total ==="") {
      rate = "";
	  discGiven = "null"; 
      } else if (total > 9999 && total <50000){
        rate = 0.2;
	  } else if (total > 49999 && total <200000){
        rate = 0.22;
	  } else if (total > 199999 && total <300000){
        rate = 0.25;
	  } else if (total > 299999 && total <400000){
        rate = 0.3;
	  }  else if (total > 399999 && total <500000){
        rate = 0.35;
	  }  else if (total >= 500000){
        rate = 0.4;
	  }  else if (total >0 && total <10000){
        rate = "0";
      } else{
        rate = 0;
      }
      let discount = total * rate;
      if (rate == 0.2) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Congrats, you are eligible for 20% discount.";
      }else if (rate == 0.22) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Congrats, you are eligible for 22% discount.";
	  }else if (rate == 0.25) {
        disctotal = "\u20a6" +discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Congrats, you are eligible for 25% discount.";
	  }else if (rate == 0.3) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Congrats, you are eligible for 30% discount.";
	  }else if (rate == 0.35) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Congrats, you are eligible for 35% discount.";
	  }else if (rate == 0.4) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Congrats, you are eligible for 40% discount.";
	  }else if (rate =="") {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "";
      } else {
        if (rate == 0) {
        disctotal = "\u20a6" + discount.toLocaleString(undefined,{maximumFractionDigits:2});
		discGiven = "Sorry, you are not eligible for this promo.";
        } else {
          disctotal = "";
        }
      }
//      taxtotal = tax;
      finaltotal = ((total - discount)+(currentBill));
      
      document.getElementById('discountDiv').innerHTML = disctotal;
      document.getElementById('discountGiven').innerHTML = discGiven;
      document.getElementById('totalDebt').innerHTML = "\u20a6" + total.toLocaleString(undefined,{maximumFractionDigits:2});
//      document.getElementById('taxDiv').innerHTML = "Tax: $".toFixed(2);
      document.getElementById('totalDiv').innerHTML = "\u20a6" + finaltotal.toLocaleString(undefined,{maximumFractionDigits:2});
    }

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
 const currentB = document.querySelector("#currentCharge");
function emptyArrears() {
  console.log("emptied!");
  
  Arrears.value = "";
  currentB.value = "";
  
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
		
		
		
		
		
		
		
	
	let imbalance = ((nn/Math.max(xx,yy,zz))*100);
		
		
		
		
		
		
		
	
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

const news = ["Current Non-MD Tariff  &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; Band A - \u20a6 225  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      Band B - \u20a6 69.96   &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; Band C - \u20a6 56.38  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;      Band D - \u20a6 39.67   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Band E - \u20a6 39.44. &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Designed by: &nbsp; &nbsp; &nbsp;Obot   &nbsp; Akpan ",
"&nbsp; &nbsp;" ]

//logo

const logo = "<img src  width='25px' style='margin:0 8px'/>";
let tickerText = "";
for(let i=0; i<news.length; i++){
  tickerText+=news[i];
  if(i!=news.length-1){
    tickerText+=logo;
  }
	
};

document.querySelector("#scroll").innerHTML = tickerText;

	
//	$( ".btnResetSingle" ).click(function() {
//  $( ".clearSingle" ).empty();
//	document.querySelector('#singlePhaseAmps').value ='';
//	
//});	
//
//$( ".btnReset8" ).click(function() {
//  $( ".clear3phase" ).empty();
//	document.querySelector('#rAmp').value ='';
//	document.querySelector('#yAmp').value ='';
//	document.querySelector('#bAmp').value ='';
//	document.querySelector('#nAmp').value ='';
//	
//});	
//	



//   
//		
//		document.getElementById("btnStart3").addEventListener('click', doCalc);
//		
//		
//		function doCalc() {
//   // Assign user inputs to variables
//			
//   let loadR = parseFloat(document.querySelector("#rAmp").value);
//   let loadY = parseFloat(document.querySelector("#yAmp").value);
//   let loadB = parseFloat(document.querySelector("#bAmp").value);
//   let loadN = parseFloat(document.querySelector("#nAmp").value);
//
////   // Call the average function
//   getAverage(loadR,loadY,loadB,loadN);
//}
//
//function getAverage(x,y,z,n) {
//   // Calculate the average
//   let average = ((loadR,loadY,loadB,loadN) / 3);
//   // Display result to user 
//	average = average || 0;
//
//	console.log(average);
//	outputLoading.innerHTML = average.toFixed(0);
////	loading = loading || 0;
//
////	 if(loading >= 80) {
////                document.getElementById('outputLoading').style.color = "red";
////
////            }
//
////	console.log(loading);
////	outputLoading.innerHTML = loading.toFixed(0) + "%";
//
//}
