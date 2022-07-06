
if (typeof jQuery !== 'undefined') {
    (function($) {
        $(document).ajaxStart(function() {
            $('#spinner').fadeIn();
        }).ajaxStop(function() {
            $('#spinner').fadeOut();
        });
        
        $('a').click(function(){
            $('a').removeClass("active");
            $(this).addClass("active");
        });
        
        if($("#controller_name").val() === 'adminstrative'){
            $('li').removeClass("active");
            $('a:contains("Administrative")').parent().addClass('active');
        }else{
            $('a:contains("Home")').parent().addClass('active');
        }
    })(jQuery);
}

$(document).ready(function() {
    loadHomePage();
    //loadBlockProfile();
});


$(document).ready(function() {
    $('.home-link').on("click", function(e){
        e.preventDefault(); // cancel the default a tag event.
        loadHomePage();
    });
});

function loadHomePage(){
    $.get("html/home.html", function( data ) {
        $("#body-content").html(data);
    });
}

$(".block-profile").click(function(){
    loadBlockProfile();
});

$(".office-staff").click(function(){
    $.ajax({url: "/adminstrative/officeStaff", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('office-staff', '/assets/non-teaching-staff.txt');
    }});
});

$(".education-scenario").click(function(){
    $.ajax({url: "/adminstrative/educationScenario", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('education-scenario', '/assets/education-scenario.txt');
    }});
});

$(".office-staff-contact").click(function(){
    $.ajax({url: "/adminstrative/officesSaffContact", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('office-staff-contact', '/assets/contact-office-staff.txt');
    }});
});

$(".teaching-staff").click(function(){
    $.ajax({url: "/adminstrative/teachingStaff", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('teaching-staff', '/assets/teaching-staff.txt');
        initiateTable('abstract-staff', '/assets/abstract.txt');
    }});
});

$(".category").click(function(){
    $.ajax({url: "/adminstrative/category", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('category-ct', '/assets/category-ct.txt');
        initiateTable('category-school', '/assets/category-school.txt');
    }});
});

$(".crcc").click(function(){
    $.ajax({url: "/adminstrative/crcc", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('roll-strength', '/assets/crcc-school-strength.txt');
        initiateTable('crcc-details', '/assets/crcc-details.txt');
    }});
});

$(".cal-school-list").click(function(){
    $.ajax({url: "/adminstrative/calList", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('block-school-list', '/assets/cal-school-list.txt');
    }});
});

$(".hm-contacts").click(function(){
    $.ajax({url: "/adminstrative/hsContact", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('highschool-contact-list', '/assets/hshm-contact.txt');
    }});
});

$(".school-list").click(function(){
    $.ajax({url: "/adminstrative/schoolList", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('school-list-with-contact', '/assets/school-list.txt');
    }});
});

$(".private-school").click(function(){
    $.ajax({url: "/adminstrative/privateSchool", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('private-school-list', '/assets/private-school.txt');
    }});
});

$(".roll-strength").click(function(){
    $.ajax({url: "/adminstrative/rollStrength", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('roll-strength-schools', '/assets/roll-strength.txt');
    }});
});

$(".electric-status").click(function(){
    $.ajax({url: "/adminstrative/electricityStatus", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('school-electricity-status', '/assets/electricity.txt');
    }});
});

$(".building-toilet").click(function(){
    $.ajax({url: "/adminstrative/buildingToilet", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('building-toilet', '/assets/building-toilet.txt');
    }});
});

$(".boundary-wall").click(function(){
    $.ajax({url: "/adminstrative/boundaryWall", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('boundary-wall', '/assets/boundary-wall.txt');
    }});
});

$(".play-ground-status").click(function(){
    $.ajax({url: "/adminstrative/playGroundstatus", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('play-ground-status', '/assets/play-ground-status.txt');
    }});
});



function loadBlockProfile(){
    $.ajax({url: "/adminstrative/blockProfile", success: function(result){
        $("#sub-menu-tab-content").html(result);
        initiateTable('block-profile', '/assets/block-profile.txt');
    }});
}

function initiateTable(tableId, source) {
    $("#" + tableId).DataTable({
        "ajax": source,
        "destroy": true,
        "bFilter": true,
        "bLengthChange": false,
        "bPaginate": true,
        "ordering": true
    });
}