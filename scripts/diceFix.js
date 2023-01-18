//click함수
const clickBtn = (div0, bt0) => {
    bt0.addEventListener("click", ()=>{
        div0.innerHTML = `<h1>${bt0.innerHTML}</h1>`;
        console.log(bt0.innerHTML);
    });
} 

//DOM 요소 수정
const domUpdate = () => {
    const div1 = document.querySelector("#div1") ; 
    //div1.innerHTML = "요소를 수정하고 있습니다...";

    /* 함수 호출로 이벤트 달기
    const bt1 = document.querySelector("#bt1") ;
    const bt2 = document.querySelector("#bt2") ;
    const bt3 = document.querySelector("#bt3") ;
    
    clickBtn(div1, bt1);
    clickBtn(div1, bt2);
    clickBtn(div1, bt3);
    */

    const btc = document.querySelectorAll(".btc") ;
    console.log(btc)
    for (let bt of btc) {
        //console.log(bt);

        bt.addEventListener("click", ()=>{
            div1.innerHTML = `<h1>${bt.innerHTML}</h1>`;
            //console.log(bt.innerHTML);
        });

        //div1.innerHTML = `testbt`;
    }
 

 }

 const showDice = () => {
    const n = Math.floor(Math.random() * 6) + 1
    const s1 = document.querySelector("#s1")

    s1.innerHTML = `<img src="./images/${n}.png" />`
    console.log(n)
}

//요소 보이기 함수
const show = (dspS1,dspS2,dspS3,dspBt1,dspBt2) => {
    const s1 = document.querySelector("#s1") ;
    const s2 = document.querySelector("#s2") ;
    const s3 = document.querySelector("#s3") ;
    const bt1 = document.querySelector("#bt1") ;
    const bt2 = document.querySelector("#bt2") ;

    s1.style.display = dspS1 ;
    s2.style.display = dspS2 ;
    s3.style.display = dspS3 ;
    bt1.style.display = dspBt1 ;
    bt2.style.display = dspBt2 ;
}

//DOM 로드가 된 후 
document.addEventListener("DOMContentLoaded", ()=>{
    show("block", "block", "none" , "block", "none");

    //DOM 요소 생성
    domAdd();

    //DOM 요소 접근
    domRead();

    //DOM 요소 변경
    domUpdate();
}) ;