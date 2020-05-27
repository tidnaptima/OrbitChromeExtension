function clearFieldFun(){
    this.value ='';
}
function openCRsFun(){
    let crListvar = document.getElementById('crList').value;
    var txtArray = crListvar.split('\n');
    console.log(txtArray.length);
    for(var i=0; i<txtArray.length; i++){
        if(txtArray[i].length == 0)
            continue;
        var newURLvar = "https://orbit/CR/"+(txtArray[i].trim());
        chrome.tabs.create({url: newURLvar})
    }
}

document.getElementById('crList').onfocus = function(){clearFieldFun()};
document.getElementById('submit').addEventListener('click', openCRsFun);
