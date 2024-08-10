function updateCard(){
    document.getElementById("schoolNameVal").innerText = document.getElementById(101).value;
    document.getElementById("studentNameVal").innerText = document.getElementById(102).value;
    document.getElementById("classVal").innerText = document.getElementById(103).value;
    document.getElementById("rollNumberVal").innerText = document.getElementById(104).value;
    document.getElementById("dobVal").innerText = document.getElementById(105).value;
    document.getElementById("contactNumberVal").innerText = document.getElementById(106).value;
}

function printIdCard(){
    window.print();
}