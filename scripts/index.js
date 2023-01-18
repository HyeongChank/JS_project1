const domAdd = () => {
    console.log('domAdd');
    const btn1 = document.createElement("button");
    btn1.innerHTML = "누르기";
    btn1.id = "bt1";
    btn1.className = "btc";

    document.getElementById("content").append(btn1);

    const btn2 = document.createElement("button");
    btn1.innerHTML = "확인하기";
    btn1.id = "bt2";
    btn1.className = "btc";

    document.getElementById("content").append(btn2);

   
}





const domUpdate = () => {
    const div1 = document.querySelector("#div1");

    const btc = document.querySelector("#bt1");
    btc.addEventListener("click", () => {

    let n = Math.floor(Math.random() * 6 + 1);
    div1.innerHTML = `<h1><img src="images/${n}.png"></h1>`;
    console.log(bt1.innerHTML);
    });
   
}
//요소 보이기 함수
const show = (dsps1, dsps2, dsps3, bspbt1, bspbt2) =>{
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const bt1 = document.querySelector("#s1");
    const bt2 = document.querySelector("#s1");

    s1.style.display = dsps1;
    s2.style.display = dsps2;
    s3.style.display = dsps3;
    bt1.style.display = bspbt1;
    bt1.style.display = bspbt2;
    
}


document.addEventListener("DOMContentLoaded", () => {
    show("none", "none","none", "block", "block");    
    domAdd();

    domUpdate();

});





