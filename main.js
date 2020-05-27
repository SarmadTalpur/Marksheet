$(document).ready(function(){

    sub1df=$('#sub1d');
    sub2df=$('#sub2d');
    sub3df=$('#sub3d');
    sub4df=$('#sub4d');
    sub5df=$('#sub5d');

    credit1=$('#subject1');
    credit2=$('#subject2');
    credit3=$('#subject3');
    credit4=$('#subject4');
    credit5=$('#subject5');

    //name validation
    let nametest='';
    $('#name').blur(function(){
        nametest=$(this).val();
    });
    //father's name validation
    let fathertest='';
    $('#fathername').blur(function(){
        fathertest=$(this).val();
    });
    //roll no validation
    let rolltest='';
    $('#rollno').blur(function(){
        rolltest=$(this).val();
    });
    //semester validation
    semtest='';
    $('#sem').blur(function(){
        semtest=$(this).val();
    });
    //signin
    $('#gm').click(function(){
        if(nametest.length<3){
            nametest='';
            $('#failname').html("Username must contain atleast three letters");
            $('#failname').css({"color":"white","padding":"2px 4px","background-color":"red","opacity":"0.7","margin-top":"0px"});
        }
        else{
            $('#failname').html("");
            $('#failname').css("background-color","green");
            $('#candidate').html("Candidate Name: "+nametest);
        }
    
        if(fathertest.length<3){
            fathernametest='';
            $('#failfathername').html("Father's Name must contain atleast three letters");
            $('#failfathername').css({"color":"white","padding":"2px 4px","background-color":"red","opacity":"0.7","margin-top":"0px"});
        }
        else{
            $('#failfathername').html("");
            $('#failfathername').css("background-color","none");
            $('#father').html("Father's Name: "+fathertest);
        }
    
        if(rolltest.length<5){
            rolltest='';
            $('#failrollno').html("Seat No. must contain atleast five letters");
            $('#failrollno').css({"color":"white","padding":"2px 4px","background-color":"red","opacity":"0.7","margin-top":"0px"});
        }
        else{
            $('#failrollno').html("");
            $('').css("background-color","none");
            $('#seat').html("Seat No: "+rolltest);
        }
    
        if(semtest.length<1 || (Number(semtest)>8) || (Number(semtest)<1)){
            semtest='';
            $('#failsem').html("Semester must be between 1 to 8");
            $('#failsem').css({"color":"white","padding":"2px 4px","background-color":"red","opacity":"0.7","margin-top":"0px"});
        }
        else{
            $('#failsem').html('');
            $('#failsem').css("background-color","none");
            $('#semester').html("Semester: "+semtest);
        }
        if(semtest==1) {
            credit1.html("Computer Fundamentals"); credit2.html("Basic Electrical Engineering"); credit3.html("Electronic Engineering");
            credit4.html("Functional English"); credit5.html("Applied Calculus");
            sub1df.html("Computer Fundamentals"); sub2df.html("Basic Electrical Engineering"); sub3df.html("Electronic Engineering");
            sub4df.html("Functional English"); sub5df.html("Applied Calculus");
        }
        else if(semtest==2) {
            credit1.html("Computer Programming"); credit2.html("Digital Logic and Design"); credit3.html("Communication Skills");
            credit4.html("Liner Algebra and Analytical Geometry"); credit5.html("Islamic Studies");
            sub1df.html("Computer Programming"); sub2df.html("Digital Logic and Design"); sub3df.html("Communication Skills");
            sub4df.html("Liner Algebra and Analytical Geometry"); sub5df.html("Islamic Studies");
        }
        else if(semtest==3) {
            credit1.html("Computer Architecture and Assembly Programming"); credit2.html("Object Oriented Programming"); credit3.html("Computer Graphics");
            credit4.html("Electrical Circuits"); credit5.html("Differential Equations");
            sub1df.html("Computer Architecture and Assembly Programming"); sub2df.html("Object Oriented Programming"); sub3df.html("Computer Graphics");
            sub4df.html("Electrical Circuits"); sub5df.html("Differential Equations");
        }
        else if(semtest==4) {
            credit1.html("Data Structure and Algorithm Analysis"); credit2.html("Microprocessor and Interfacing Techniques"); credit3.html("Modelling and Simulation");
            credit4.html("Database Management Systems"); credit5.html("Fourier Series and Transforms");
            sub1df.html("Data Structure and Algorithm Analysis"); sub2df.html("Microprocessor and Interfacing Techniques"); sub3df.html("Modelling and Simulation");
            sub4df.html("Database Management Systems"); sub5df.html("Fourier Series and Transforms");
        }
        else if(semtest==5) {
            credit1.html("Analogue and Digital Simulation Processing"); credit2.html("Operating System Design Concepts"); credit3.html("Technical Report Writing");
            credit4.html("Engineering Economics and Management"); credit5.html("Statistics and Probability");
            sub1df.html("Analogue and Digital Simulation Processing"); sub2df.html("Operating System Design Concepts"); sub3df.html("Technical Report Writing");
            sub4df.html("Engineering Economics and Management"); sub5df.html("Statistics and Probability");
        }
        else if(semtest==6) {
            credit1.html("Communication Systems"); credit2.html("Embedded Systems"); credit3.html("Professional Ethics");
            credit4.html("Mobile Application Development"); credit5.html("Web Engineering");
            sub1df.html("Communication Systems"); sub2df.html("Embedded Systems"); sub3df.html("Professional Ethics");
            sub4df.html("Mobile Application Development"); sub5df.html("Web Engineering");
        }
        else if(semtest==7) {
            credit1.html("Digital Image Processing"); credit2.html("Computer Communication and Networks"); credit3.html("Software Engineering");
            credit4.html("Computer Engineering Project"); credit5.html("Pakistan Studies");
            sub1df.html("Digital Image Processing"); sub2df.html("Computer Communication and Networks"); sub3df.html("Software Engineering");
            sub4df.html("Computer Engineering Project"); sub5df.html("Pakistan Studies");
        }
        else if(semtest==8) {
            credit1.html("Mobile and Wireless Communication"); credit2.html("Artificial Intelligence"); credit3.html("Enterpreneurship and Leadership");
            credit4.html("Data Science and Analytics"); credit5.html("Computer Engineering Project");
            sub1df.html("Mobile and Wireless Communication"); sub2df.html("Artificial Intelligence"); sub3df.html("Enterpreneurship and Leadership");
            sub4df.html("Data Science and Analytics"); sub5df.html("Computer Engineering Project");
        }
    
    });

    //credit1 validation
    let cr1test='';
    $('#sub1').blur(function(){
        cr1test=$(this).val();
    });
    //credit2 validation
    let cr2test='';
    $('#sub2').blur(function(){
        cr2test=$(this).val();
    });
    //credit3 validation
    let cr3test='';
    $('#sub3').blur(function(){
        cr3test=$(this).val();
    });
    //credit4 validation
    let cr4test='';
    $("#sub4").blur(function(){
        cr4test=$(this).val();
    });
    //credit5 validation
    let cr5test='';
    $('#sub5').blur(function(){
        cr5test=$(this).val();
    });

    //confirm subjects
    $('#done').click(function(){

    sub1a=false;
    sub2a=false;
    sub3a=false;
    sub4a=false;
    sub5a=false;

    sub1df=$('#sub1d');
    sub2df=$('#sub2d');
    sub3df=$('#sub3d');
    sub4df=$('#sub4d');
    sub5df=$('#sub5d');

    ob1f=$('#ob1');
    ob2f=$('#ob2');
    ob3f=$('#ob3');
    ob4f=$('#ob4');
    ob5f=$('#ob5');

    perc=$('#percentage');
    grd=$('#grade');
    perctest='';
    gradetest='';

        if(Number(cr1test)>=0 && Number(cr1test)<=100) {
            $('#failsub1').html('');
            $('#failsub1').css("background-color","none");
            ob1f.html(cr1test);
            sub1a=true;
        }
        else{
            $('#failsub1').html('Score must be in 0-100 range');
            $('#failsub1').css({"color":"white","padding":"2px 4px","background-color":"red","opacity":"0.7","margin-top":"0px"});
            ob1f.html("-");
        }
        if(Number(cr2test)>=0 && Number(cr2test)<=100) {
            $("#failsub2").html('');
            $("#failsub2").css("background-color","none");
            ob2f.html(cr2test);
            sub2a=true;
        }
        else{
            $("#failsub2").html('Score must be in 0-100 range');
            $("#failsub2").css({"color":"white","padding":"2px 4px","background-color":"red","opacity":"0.7","margin-top":"0px"});
            ob2f.html("-");
        }
        if(Number(cr3test)>=0 && Number(cr3test)<=100) {
            $('#failsub3').html('');
            $('#failsub3').css("background-color","none");
            ob3f.html(cr3test);
            sub3a=true;
        }
        else{
            $('#failsub3').html('Score must be in 0-100 range');
            $('#failsub3').css({"color":"white","padding":"2px 4px","background-color":"red","opacity":"0.7","margin-top":"0px"});
            ob3f.html("-");
        }
        if(Number(cr4test)>=0 && Number(cr4test)<=100) {
            $('#failsub4').html("");
            $('#failsub4').css("background-color","none");
            ob4f.html(cr4test);
            sub4a=true;
        }
        else{
            $('#failsub4').html('Score must be in 0-100 range');
            $('#failsub4').css({"color":"white","padding":"2px 4px","background-color":"red","opacity":"0.7","margin-top":"0px"});
            ob4f.html("-");
        }
        if((Number(cr5test)>=0) && (Number(cr5test)<=100)) {
            $('#failsub5').html('');
            $('#failsub5').css("background-color","none");
            ob5f.html(cr5test);
            sub5a=true;
        }
        else{
            $('#failsub5').html("Score must be in 0-100 range");
            $('#failsub5').css({"color":"white","padding":"2px 4px","background-color":"red","opacity":"0.7","margin-top":"0px"});
            ob5f.html("-");
        }
        if(sub1a==true && sub2a==true && sub3a==true && sub4a==true && sub5a==true){
            perctest=(Number(cr1test)+Number(cr2test)+Number(cr3test)+Number(cr4test)+Number(cr5test))/5;
            perc.html("Percentage: "+perctest+"%");
            if(perctest>=85) {
                gradetest='A+';
            }
            else if(perctest>=75 && perctest<85) {
                gradetest='A';
            }
            else if(perctest>=65 && perctest<75){
                gradetest='B+';
            }
            else if(perctest>=60 && perctest<65) {
                gradetest='B';
            }
            else if(perctest>=50 && perctest<60){
                gradetest='C';
            }
            else{
                gradetest="FAIL";
            }
            grd.html("Grade: "+gradetest);
        }
        else{
            perc.html("Percentage: ");
            grd.html("Grade: "+gradetest);
        }
    });

});