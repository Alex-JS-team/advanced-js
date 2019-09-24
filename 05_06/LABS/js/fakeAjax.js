function fakeAjax(url, cb){
    const responses = {
        'file1': "This is file 1",
        'file2': "This is file 2",
        'file3': "This is file 3"
    };
    const delay =  (Math.round(Math.random() * 1e4) % 8000 )  + 1000;

    console.log("Request " + url);

    setTimeout(function(){
        cb(responses[url]);
    }, delay);
}

function out(msg) {
    console.log(msg);
}
