var token;
document.querySelector("div").addEventListener('click',function(){
    chrome.storage.local.get(["token"],function(r){


        console.log(r);
        token=r;


      $.ajax({
        url : 'https://oc07otgs25.execute-api.ap-northeast-2.amazonaws.com/beta',
        type: 'GET',
        crossDomain: true,
        
        
        dataType: 'json',
        contentType: "application/json",
        beforeSend : function(xhr){
            xhr.setRequestHeader("Authorization", r.token);
        },
        error: function(xhr, status, error){
            alert(error);
        },
        success: function (data) {
            console.info(data);
        }
    });
  document.querySelector("div").textContent=r.token;
  })
});	

