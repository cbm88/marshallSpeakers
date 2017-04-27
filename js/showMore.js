/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function showMore() {
    var div = document.getElementById('showDiv');
    var statusBtn = document.getElementById('readMoreBtn');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        statusBtn.value="LEARN LESS";
    } else {
        div.style.display = 'none';
        statusBtn.value="LEARN MORE";
    }
}
