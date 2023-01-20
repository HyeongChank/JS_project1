let n;
const showDice = () => {
    n = Math.floor(Math.random() * 6) + 1;
    const s1 = document.querySelector("#s1");

    s1.innerHTML = `<img src="./images/${n}.png" />`
    console.log(n)
    show("none", "block", "none" , "none", "block");
}

//요소 보이기 함수
const show = (dspS1,dspS2,dspS3,dspBt1,dspBt2) => {
    const s1 = document.querySelector("#s1") ;
    const s2 = document.querySelector("#s2") ;
    const s3 = document.querySelector("#s3") ;
    const bt1 = document.querySelector("#bt1") ;
    const bt2 = document.querySelector("#bt2") ;
    console.log(s1)
    s1.style.display = dspS1 ;
    s2.style.display = dspS2 ;
    s3.style.display = dspS3 ;
    bt1.style.display = dspBt1 ;
    bt2.style.display = dspBt2 ;
}

//주사위 번호 결과 확인
const showOk = () =>{
    const radios = document.querySelectorAll("input[type = radio]");
    //사용자가 선택한 숫자
    let usern ;
    for(let r of radios){
        if(r.checked){
            //숫자로 이루어진 문자열을 숫자로 변환
            usern = parseInt(r.value);
            break;
        }
    }

    // const s3 = document.querySelector("#s3");
    // if(n ==usern){
    //     s3.innerHTML = `<img src="./images/o.png" />`
    // }
    // else{
    //     s3.innerHTML = `<img src="./images/x.png" />`
    // }

    let tag;
    //비교 연산자 ===(데이터타입까지 같이 봄) : ==와 비교
    if(n === usern) tag = "o";
    else tag = "x";

    document.querySelector("form").reset();
    document.querySelector("#s1").innerHTML = `<img src="./images/${n}.png">`
    document.querySelector("#s3").innerHTML = `<img src="./images/${tag}.png" />`
    show("block", "none", "block" , "block", "none");
    console.log(n,usern)
}

//DOM 로드가 된 후 
document.addEventListener("DOMContentLoaded", ()=>{
    show("none", "none", "none" , "block", "none");
});




