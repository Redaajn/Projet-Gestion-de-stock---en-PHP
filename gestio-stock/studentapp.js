$(document).ready(function(){
var phonesList;
function getall() {
  $(".phonesList").html(" ");
  $.ajax({
    url:"api/getPhones.php",
    method:"GET",
    success:function(data) {
     phonesList = JSON.parse(data);
      console.log(phonesList);
      for (var i = 0; i < phonesList.length; i++) {
        $(".phonesList").append('<li><h2>'+"Name: "+phonesList[i]["Name"]+
        '</h2><h3>'+"Price: "+phonesList[i]["Price"]+
        '</h3><h4>'+"Model: "+phonesList[i]["Model"]+
        '</h4><span class="update-btn">update</span><span class="delete-btn">delete</span><input type="hidden" value="" class="stdID"></li>');
      }
    }
  })
}
getall();

//update-btn-on-click
$("body").on("click",".PhonesList .update-btn",function() {
  $("li").hide();
  $(".edit-form").show();
  var index = $(this).parents("li").index();
  $(".edit-form .PhoneName").val(PhonesList[index]["name"]);
  $(".edit-form .PhonePrice").val(PhonesList[index]["Price"]);
  $(".edit-form .PhoneModel").val(PhonesList[index]["Model"]);

  $(".edit-form .sid").val(PhonesList[index]["id"]);
});

// save-student-to-database
$(".save-student").click(function() {
  var sName = $(".edit-form .studentName").val();
  var sFname = $(".edit-form .studentFname").val();
  var sRollno = $(".edit-form .studentRollno").val();
  var sDegree = $(".edit-form .studentDegree").val();
  var sBranch = $(".edit-form .studentBranch").val();
  var sID = $(".edit-form .sid").val();

  //send to php file via ajax
  $.ajax({
    url:"/api/editStudents.php",
    method:"POST",
    data:{
      sid : sID,
      name : sName,
      fathername : sFname,
      rollno : sRollno,
      degree : sDegree,
      branch : sBranch
    },
        success:function(data) {
        getall();
      }
  })
})
// Add a student to database
$(".submit-phone").click(function() {
  var fName = $(".Name").val();
  var fPrice = $(".Price").val();
  var fModel = $(".Model").val();

  $.ajax({
    url:"/api/addPhones.php",
    method:"POST",
    data:{
      Name :fName,
      Price :fPrice,
      Model :fModel,
    },
    success:function(data) {
    getall();
  }
  })
})
$("body").on("click",".delete-btn",function() {
  var index = $(this).parents("li").index();
  $(".phonesList .stdID").val(phonesList[index]["id"]);
  var phoneID =$(".phonesList .stdID").val();
  $.ajax({
    url:"/api/deletePhones.php",
    method:"POST",
    data:{
      sid :phoneID
    },
    success:function(data) {
      $(this).parent().remove();
      getall();
    }
  })
})
$(".downArrow").click(function() {
  $(".add-form").slideToggle("slow");
})
$(".save-student").click(function() {
$(".edit-form").hide();
})
$(".submit-phone").click(function() {
$(".add-form").hide();
})
$(".close").click(function() {
$(".add-form").hide();
})
$(".close").click(function() {
$(".edit-form").hide("fast",function() {
getall();
});
})
})
