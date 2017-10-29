<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$ciudad=$_POST["ciudad"];
$tipo=$_POST["tipo"];
$precio="";

$ruta="../data-1.json";
$archivo= fopen($ruta, "r");
$archivoLeido= fread($archivo, filesize($ruta));
$datos= json_decode($archivoLeido,true);
fclose($archivo);
$cont=0;
foreach ($datos as $llave => $valor) {
    /*
    if($ciudad==$valor["Ciudad"]&&$tipo==$valor["Tipo"]&&$precio==$valor["Precio"]){
            $response[]["id"]=$valor["Id"];
            $response[]["direccion"]=$valor["Direccion"];
            $response[]["ciudad"]=$valor["Ciudad"];
            $response[]["telefono"]=$valor["Telefono"];
            $response[]["tipo"]=$tipo;
            $response[]["precio"]=$valor["Precio"];
    }*/
      if(($ciudad==$valor["Ciudad"]&&$tipo==$valor["Tipo"])){
            $response["id"][]=$valor["Id"];
            $response["direccion"][]=$valor["Direccion"];
            $response["ciudad"][]=$valor["Ciudad"];
            $response["telefono"][]=$valor["Telefono"];
            $response["tipo"][]=$valor["Tipo"];
            $response["precio"][]=$valor["Precio"];
            $response["codigo"][]=$valor["Codigo_Postal"];
        }elseif(($ciudad==$valor["Ciudad"]&&$tipo==""&&$precio=="")||($tipo==$valor["Tipo"]&&$ciudad==""&&$precio=="")||($precio==$valor["Precio"]&&$ciudad==""&&$tipo=="")){
            $response["id"][]=$valor["Id"];
            $response["direccion"][]=$valor["Direccion"];
            $response["ciudad"][]=$valor["Ciudad"];
            $response["telefono"][]=$valor["Telefono"];
            $response["tipo"][]=$valor["Tipo"];
            $response["precio"][]=$valor["Precio"];
            $response["codigo"][]=$valor["Codigo_Postal"];
        }
}
echo json_encode($response);
