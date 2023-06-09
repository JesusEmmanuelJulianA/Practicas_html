var v1=0;
var v2=0;
var v3=0;

function captura1()
{
    v1=parseInt(document.getElementById("lado1").value);
}
function captura2()
{
    v2=parseInt(document.getElementById("lado2").value);
}
function captura3()
{
    v3=parseInt(document.getElementById("lado3").value);
}
function area()
{
/*
  ejemplos de longitudes negativas o cero:
    Suma de dos lados menor o igual que el tercer lado:
Lados: -2, 4, 5
Lados: 0, 3, 6
Suma de dos lados menor o igual que el tercer lado:
Lados: 2, 4, 7
Lados: 5, 10, 16
Conjunto de longitudes que no cumple la desigualdad triangular:
Lados: 1, 2, 4
Lados: 3, 6, 10
*/

    var s=(v1+v2+v3)/2;
    var resultadoA=Math.sqrt(s*(s-v1)*(s-v2)*(s-v3));

    if(v1>=1 && v2>=1 && v3>=1)
    {
       /* var v12=v1+v2;
        var v13=v1+v3;
        var v23=v2+v3;
        if(v12>v3 || v13>v2 || v23>v1)
        {*/
            document.getElementById("resultado").innerHTML="El area del triangulo es:" + resultadoA;
            // suma de dos lados sea mayor que el tercer lado para que sea un triangulo valido
       /* }*/
        /*else
        {
            document.getElementById("resultado").innerHTML="triangulo no validado";
        }*/
    }
    else
    {
        document.getElementById("resultado").innerHTML="no es posible con longitudes negativas/cero";
    }
}
function perimetro()
{
    var resultadoP=v1+v2+v3;
    document.getElementById("resultado").innerHTML="El perimetro del triángulo es: " + resultadoP;
    
}
function tipotriangulo()
{
    if(v1==v2 & v1==v3 & v2==v3)
    {
        document.getElementById("resultado").innerHTML="triangulo equilatero";
    }
    else if(v1==v2 || v1==v3 || v2==v3)
    {
        document.getElementById("resultado").innerHTML="trangulo escaleno";
    }
    else
    {
        document.getElementById("resultado").innerHTML="triangulo isosceles";
    }
}