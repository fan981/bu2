const students = [
    "张三", "李四", "王五", "赵六", "钱七",
    "孙八", "周九", "吴十", "郑十一", "王十二",
    "刘十三", "陈十四", "杨十五", "黄十六", "林十七"
];

const randomDisplay = document.getElementById('random-display');
const selectedResult = document.getElementById('selected-result');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

let timer = null;
let isRunning = false;
let lastSelected = "";

function getRandomStudent() {
    const randomIndex = Math.floor(Math.random() * students.length);
    return students[randomIndex];
}

function startSelection() {
    if (isRunning) return;
    
    isRunning = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
    randomDisplay.textContent = "";
    
    timer = setInterval(() => {
        const currentStudent = getRandomStudent();
        randomDisplay.textContent = currentStudent;
        lastSelected = currentStudent;
    }, 100);
}

function stopSelection() {
    if (!isRunning) return;
    
    clearInterval(timer);
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    
    selectedResult.textContent = lastSelected;
    
    selectedResult.style.transform = "scale(1.1)";
    selectedResult.style.color = "#e74c3c";
    setTimeout(() => {
        selectedResult.style.transform = "scale(1)";
    }, 300);
}

startBtn.addEventListener('click', startSelection);
stopBtn.addEventListener('click', stopSelection);

randomDisplay.textContent = "点击开始按钮";
selectedResult.textContent = "等待选择...";