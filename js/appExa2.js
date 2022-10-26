function calcular(){
    var can=document.getElementById('cantidad').value;
    var ori=document.getElementById('monedaOrigen').value;
    var des=document.getElementById('monedaDestino').value;
    let subtotal=0.0;

    if(ori==1 && des==2){
        subtotal=can/(19.85);
    } else if(ori==1 && des==3){
        subtotal=(can/(19.85))*1.35;
    } else if(ori==1 && des==4){
        subtotal=(can/(19.85))*0.99;
    } else if(ori==2 && des==1){
        subtotal=can*19.85;
    } else if(ori==2 && des==3){
        subtotal=can*1.35;
    } else if(ori==2 && des==4){
        subtotal=can*.99;
    } else if(ori==3 && des==1){
        subtotal=(can/(1.3))*19.85;
    } else if(ori==3 && des==2){
        subtotal=can/(1.3);
    } else if(ori==3 && des==4){
        subtotal=(can/(1.3))*0.99;
    } else if(ori==4 && des==1){
        subtotal=(can/(0.99))*19.85;
    } else if(ori==4 && des==2){
        subtotal=(can/(0.99));
    } else if(ori==4 && des==3){
        subtotal=(can/(0.99))*1.35;
    } else{
        subtotal=0; 
    }

    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("Tcomision").value = (subtotal*0.03).toFixed(2);
    document.getElementById("Tpagar").value = (subtotal-(subtotal*0.03)).toFixed(2); 

    return subtotal;
 }
 function registrar(subtotal){
    var subtotalx=document.getElementById('subtotalx');
    var comisionx=document.getElementById('comisionx');
    var totalx=document.getElementById('totalx');

    subtotalx.innerHTML=subtotal.toFixed(2);
    comisionx.innerHTML=(subtotal*0.03).toFixed(2);
    totalx.innerHTML=(subtotal-(subtotal*0.03)).toFixed(2); 
 }