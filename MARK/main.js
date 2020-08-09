i = 2;
j = 1;
k = 1;
m = 1;
c = 2;
//sem[] = {24,24,27,27,24,}

function calc(x,c_p)
{
    var res = 0;
    for (var l=0;l<x.length;l++){
        c1 = parseInt(x[l].value);
        if(c1>=90 && c1<=100){
            res += 10*c_p;
            }
            else if(c1>=80 && c1<90){
            res += 9*c_p;
            }
            else if(c1>=70 && c1<80){
            res += 8*c_p;
            }
            else if(c1>=60 && c1<70){
            res += 7*c_p;
            }
            else if(c1>=50 && c1<60){
            res += 6*c_p;
        }
            else if(c1>=45 && c1<50){
            res += 5*c_p;
        }
        else if(c1>=40 && c1<45){
            res += 4*c_p;
        }
        else{
            res += 0;
        }
    }
     return res;
}
function input()
        {
            //Calculation of SGPA
            var  sgpa=0;
            var x = document.getElementById('main_sub').getElementsByTagName('INPUT');
            sgpa += calc(x,4);
            var y = document.getElementById('ele_sub').getElementsByTagName('INPUT');
            sgpa += calc(y,3);
            var z = document.getElementById('lab').getElementsByTagName('INPUT');
            sgpa += calc(z,2);
            sgpa /= (x.length*4+y.length*3+z.length*2)
            document.getElementById("res").innerHTML = sgpa;
        }
function cgpa_calc(){
    //Calculation of CGPA
    var cgpa = 0;
    var x = document.getElementById('lib2').getElementsByTagName('INPUT');
    count = 0;
    for (var l=0;l<x.length;l++){
        c1 = parseFloat(x[l].value);
        if(!(isNaN(c1))){
            cgpa += c1;
            count += 1;
        }
    }
    cgpa = cgpa/count;
    document.getElementById("cgpa").innerHTML = cgpa;
}
function perc_calc(){
    //Calculation of PERCENTAGE
    var percent = 0;
    var x = document.getElementById('lib3').value;
    if(x>0)
        percent=(x-0.75)*10;
    document.getElementById("percent").innerHTML = percent;
}
function grade_calc(){
    //Calculation of GRADE
    var gp = 0;
    var g=NaN;
    var x = document.getElementById('lib4').value;
    if(x>=90){
        gp=10;
        g="S";
    }
    else if(x>=80 && x<90){
        gp=9;
        g="A";
    }
    else if(x>=70 && x<80){
        gp=8;
        g="B";
    }
    else if(x>=60 && x<70){
        gp=7;
        g="C";
    }
    else if(x>=50 && x<60){
        gp=6;
        g="D";
    }
    else if(x>=40 && x<50){
        gp=5;
        g="E";
    }
    else{
        gp=0;
        g="F";
    }
    document.getElementById("gp").innerHTML = gp;
    document.getElementById("g").innerHTML = g;
}
function remove_msub(input) {
    document.getElementById('main_sub').removeChild(input.parentNode);
    i--;
  }
function onclick_msub(){
    var newdiv = document.createElement('div');

    newdiv.innerHTML = "Enter Main subject " + i + " Marks <br><input class='form-control form-control1' type='text' id='msub'"+i+"'>"+
    "<input type='button' class='btn btn-warning'  value='X' onclick='remove_msub(this)' />";
    document.getElementById("main_sub").appendChild(newdiv);

    i++;
}
function remove_esub(input) {
    document.getElementById('ele_sub').removeChild(input.parentNode);
    j--;
  }
function onclick_esub(){
    var newdiv = document.createElement('div');

    newdiv.innerHTML = "Enter Elective subject " + j + " Marks <br><input class='form-control form-control1' type='text' id='esub'"+j+"'>"+
    "<input type='button'  class='btn btn-warning'  value='X' onclick='remove_esub(this)' />";
    document.getElementById("ele_sub").appendChild(newdiv);

    j++;
}
function remove_lab(input) {
    document.getElementById('lab').removeChild(input.parentNode);
    k--;
  }
function onclick_lab(){
    var newdiv = document.createElement('div');

    newdiv.innerHTML = "Enter Lab " + k + " Marks <br><input class='form-control form-control1' type='text' id='lab'"+k+"'>"+
    "<input type='button'  class='btn btn-warning'  value='X' onclick='remove_lab(this)' />";
    document.getElementById("lab").appendChild(newdiv);

    k++;
}
function remove_one(input) {
    document.getElementById('one_credit').removeChild(input.parentNode);
    m--;
  }
function onclick_one_credit(){
    var newdiv = document.createElement('div');

    newdiv.innerHTML = "Enter subject " + m + " Marks <br><input class='form-control form-control1' type='text' id='one'"+m+"'>"+
    "<input type='button'  class='btn btn-warning'  value='X' onclick='remove_one(this)' />";
    document.getElementById("one_credit").appendChild(newdiv);

    m++;
}
function remove_sem(input) {
    document.getElementById('sem').removeChild(input.parentNode);
    c--;
  }
function onclick_sem(){
    if(c<=8){
        var newdiv = document.createElement('div');

        newdiv.innerHTML = "Enter SGPA of Sem " + c + "<br><input class='form-control form-control1' type='text' id='sem'"+c+"'>"+
        "<input type='button' class='btn btn-warning'  value='X' onclick='remove_sem(this)' />";
        document.getElementById("sem").appendChild(newdiv);
        c++;
    }
}
