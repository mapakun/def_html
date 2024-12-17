	/*
 * 01. JS명   : commonAjax.js
 * 02. 내용 
 *   ● svcId     : 트랜잭션 ID
 *   ● type      : Http Method(GET, POST, PUT, DELETE)
 *   ● url       : api 호출 url
 *   ● inData    : 송신 {json형식}
 *   ● errorMsg  : 에러메시지
 *   ● callback  : 콜백함수(고정)
 * 03. 작성자   :  JaeYong's coding
 * 04. 사용예시
 *   ● var svcId = "test";
 *	   var type = "GET";
 *	   var url = "/";
 *	   var inData = {};
 *	   var errorMsg = "error";
 *		
 *	   commonAjax(svcId, type, url, inData, errorMsg, fnCallback);
 *
 *   ● function fnCallback(svcId, data) {
 *	       if (svcId === "test") {
 *             // 콜백 코드 작성
 *	       }
 *	   };
*/
function commonAjax(svcId, type, url, inData, errorMsg, callback) {
	
	var ajaxOptions = {
		type: type,
		url: url,
		data: inData,
		/*dataType: "json",*/
		success: function(data) {
            if (data) {
                callback(svcId, data);
            } else {
                data = '';
                callback(svcId, data);
            }
        },
        error: function(error) {
            console.log(errorMsg);
        }
    };
 
    if (type === "POST") {
        ajaxOptions.headers = {
            "Content-Type": "application/json",
            "X-HTTP-Method-Override": "POST"
        };
    }
 
    $.ajax(ajaxOptions);
}
