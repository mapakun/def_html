document.getElementById('indexTest').addEventListener('click', () => {
    console.log('이벤트 발생테스트');
});

document.getElementById('apiTest').addEventListener('click', () => {
    commonAjax("svcId", "POST", "/api/test", {}, "onload error", fnCallback("test"))
});

function fnCallback(svcId) {
    return function(data) {
        if (svcId === "onload") {
            console.log("svcId = " + svcId);
            console.log("onload 성공");
        }
        if (svcId === "test") {
            console.log("svcId = " + svcId);
            console.log("data = " + JSON.stringify(data));
        }
    }
};