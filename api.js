function getAjaxRequest(url,type,data){
    var request =  {
        url : url,
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        contentType: "application/json",
        beforeSend : function(xhr){
            xhr.setRequestHeader("Authorization", token.token);
        },
        error: function(xhr, status, error){
            alert(error);
        },
        success: function (data) {
            console.info(data);
        }
    }
    if(type == 'POST'){
        request["data"] = data;
    }
    return request;
}

function getUserProfile(){
    var url = 'https://oc07otgs25.execute-api.ap-northeast-2.amazonaws.com/beta/users/123/projects/123/nodes/123';
    var type = 'GET';
    
    var request = getAjaxRequest(url,type);
    $.ajax(request);
} 

