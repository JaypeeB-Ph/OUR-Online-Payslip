
// InputFields
let dateIF, branchIF, employeeIDIF, nameIF, positionIF;

// Earnings
let basicPay, transpoAllow, riceAllow , otPay, hollidayPay, otherPay;

// Deductions
let sss, pagibig, philhealth, employeeLoan, absent, lates, otherDeduct;

// calculation

let totalEarnings, totalDeducts, taxDeduct, netSalary;



const cbDeduction = document.querySelector(".cb-deductions");

cbDeduction.addEventListener("change", e =>{
  if(e.target.checked === true){
    document.getElementById("deductions").style.display = "block";
  }else{
    document.getElementById("deductions").style.display = "none";
  }
});






$(".generate-payslip").click(function(){
  displayPayslip();
});

$(".refresh-btn").click(function(){
  location.reload();
});





function getEmployeeInfo(){
  dateIF = $("#paymentDate").val();
  branchIF = $("#branch").val();
  employeeIDIF = $("#idNumber").val();
  nameIF = $("#name").val();
  positionIF = $("#position").val();
}

function getEarnings(){
  basicPay = parseFloat($("#salary").val());
  transpoAllow = parseFloat($("#transpoAllow").val());
  riceAllow = parseFloat($("#riceAllow").val());
  otPay = parseFloat($("#overtimePay").val());
  hollidayPay = parseFloat($("#hollidayPay").val());
  otherPay = parseFloat($("#otherPay").val());
}

function getDeductions(){
  sss = parseFloat($("#sss").val());
  pagibig =  parseFloat($("#pagibig").val());
  philhealth =  parseFloat($("#philhealth").val());
  employeeLoan =  parseFloat($("#employeeLoan").val());
  absent =  parseFloat($("#absent").val());
  lates =  parseFloat($("#lates").val());
  otherDeduct =  parseFloat($("#otherDeduct").val());
}

function setSlipInfo(){

  // head info
  $(".slipDateOfPayment").text(" " + dateIF);
  $(".slipBranch").text(" " + branchIF);
  // $(".slipPayPeriod").text("Pay period: ");
  $(".slipID").text(" " + employeeIDIF);
  $(".slipName").text(" " + nameIF);
  $(".slipPosition").text(" " + positionIF);

  // Earnings
  $(".data-basicPay").text(basicPay);
  $(".data-transpoAllow").text(transpoAllow);
  $(".data-riceAllow").text(riceAllow);
  $(".data-otPay").text(otPay);
  $(".data-hollidayPay").text(hollidayPay);
  $(".data-otherPay").text(otherPay);

  // Deductions
  $(".data-sss").text(sss);
  $(".data-pagibig").text(pagibig);
  $(".data-philhealth").text(philhealth);
  $(".data-employeeLoan").text(employeeLoan);
  $(".data-absent").text(absent);
  $(".data-lates").text(lates);
  $(".data-otherDeduct").text(otherDeduct);


  // Calculations
  totalEarnings = (basicPay + transpoAllow) + (riceAllow + otPay) + (hollidayPay + otherPay);

  if(totalEarnings >= 25000){
    taxDeduct = totalEarnings * .10;
  }else{
    taxDeduct = 0.00;
  }

  totalDeducts = (sss + pagibig) + (philhealth + employeeLoan) + (absent + lates) + (otherDeduct + taxDeduct);
  netSalary = totalEarnings - totalDeducts;

  // 

  $(".data-totalEarnings").text(totalEarnings);
  $(".data-taxDeduct").text(taxDeduct);
  $(".data-totalDeducts").text(totalDeducts);
  $(".data-netSalary").text(netSalary);

}

function displayPayslip(){
  getEmployeeInfo();
  getEarnings();
  getDeductions();



  setSlipInfo();
}




















// Date picker
$( function() {
  $( "#paymentDate" ).datepicker();
} );



// PRINTING
$(document).ready(function(){
  $('.print-btn').click(function(){
    $('#payslip-content').printThis();
  });
});



