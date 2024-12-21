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

const req = {
    commonInDTO : {
        test: "hihi"
    }
};

document.getElementById('dbCon').addEventListener('click', () => {
    commonAjax("test", "POST", "/api/dbtest", req, "onload error", fnCallback2("test"))
});

function fnCallback2(svcId, data) {
    return function(svcId, data) {
        if (svcId === "onload") {
            console.log("svcId = " + svcId);
            console.log("onload 성공");
        }
        if (svcId === "test") {
            console.log("svcId = " + svcId);
            console.log("data = " + JSON.stringify(data));
        }
    }
    console.log(data);
};