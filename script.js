const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
/* เข้าถึง Element Id ที่ต้องการใน Form HTML กำหนดชื่อให้เป็น inputBox และ listContainer */

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";//เมื่อคลิกจะเป็นค่าว่าง
}
/* คำสั่ง function เข้าถึง Form HTML ที่เป็นคำสั่ง onclick ที่มีชื่อ addTask
ถ้า ค่าว่างจะเตือนว่า You must write something! 
กรณีอื่นๆ คือ การพิมพ์ เมื่อพิมพ์แล้ว click คำว่า Add จะมีคำนั้นปรากฏ */

/* การทำงานของ else คร่าวๆ
    เมื่อกด Add จะสร้าง li ที่เป็นวางกลมที่กำหนดใน css 
    และ สร้างรูปกากบาทด้วยคำสั่ง "\u00d7" */

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

/*  addEventListener() ช่วยให้คุณเพิ่มฟังชันก์เหตุการณ์บนวัตถุ DOM HTML 
ถ้า คลิกที่วงกลมจะทำให้ติ๊กถูกและมีเส้นขีดฆ่า เพราะเป็นค่าที่กำหนดใน css 
ถ้าอื่นๆหรือเมื่อคลิกกากบาท จะ remove text ออก*/