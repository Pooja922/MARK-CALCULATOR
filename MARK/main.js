i = 2;
j = 1;
k = 1;
m = 1;
c = 2;
//sem[] = {24,24,27,27,24,}
function onclick_sgpa()
{
    document.getElementById("cgpa1").style.display="none";
    document.getElementById("perc").style.display="none";
    document.getElementById("grade").style.display="none";
    document.getElementById("sgpa1").style.display="block";
}
function onclick_cgpa()
{
    document.getElementById("sgpa1").style.display="none";
    document.getElementById("perc").style.display="none";
    document.getElementById("grade").style.display="none";
    document.getElementById("cgpa1").style.display="block";
}
function onclick_perc()
{
    document.getElementById("sgpa1").style.display="none";
    document.getElementById("cgpa1").style.display="none";
    document.getElementById("grade").style.display="none";
    document.getElementById("perc").style.display="block";
}
function onclick_grade()
{
    document.getElementById("sgpa1").style.display="none";
    document.getElementById("cgpa1").style.display="none";
    document.getElementById("perc").style.display="none";
    document.getElementById("grade").style.display="block";
}
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

function onclick_msub(){
    var newdiv = document.createElement('div');

    newdiv.innerHTML = "Enter Main subject " + i + " Marks <br><input type='text' id='msub'"+i+"'>";

    document.getElementById("main_sub").appendChild(newdiv);

    i++;
}

function onclick_esub(){
    var newdiv = document.createElement('div');

    newdiv.innerHTML = "Enter Elective subject " + j + " Marks <br><input type='text' id='esub'"+j+"'>";

    document.getElementById("ele_sub").appendChild(newdiv);

    j++;
}

function onclick_lab(){
    var newdiv = document.createElement('div');

    newdiv.innerHTML = "Enter Lab " + k + " Marks <br><input type='text' id='esub'"+k+"'>";

    document.getElementById("lab").appendChild(newdiv);

    k++;
}

function onclick_one_credit(){
    var newdiv = document.createElement('div');

    newdiv.innerHTML = "Enter subject " + m + " Marks <br><input type='text' id='esub'"+m+"'>";

    document.getElementById("one_credit").appendChild(newdiv);

    m++;
}

function onclick_sem(){
    if(c<=8){
        var newdiv = document.createElement('div');

        newdiv.innerHTML = "Enter SGPA of Sem " + c + "<br><input type='text' id='sem'"+c+"'>";

        document.getElementById("sem").appendChild(newdiv);

        c++;
    }


}