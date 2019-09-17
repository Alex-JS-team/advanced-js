(function(){
    this.assert = function(ob, st) {
        var li = document.createElement("li");
        li.className = ob == true ? 'pass' : "fail";
        var text = document.createTextNode(st);
        li.appendChild(text);
        document.getElementById("results").appendChild(li);
    }
}());

function print(mess){
    document.write('<p>' + mess + '</p>');
}
function printList(arr) {
    var st = '<ol class="list-group">';
    for(var i = 0, len = arr.length; i < len; i++) {
        st += '<li class="list-group-item">' + arr[i] + '</li>';
    }
    st += '</ol>';
    print(st);
}
