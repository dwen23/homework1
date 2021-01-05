//document.getElementById("button").addEventListener("click", playAudio("tom-1.mp3"));
/*function playSound(){
    var audio = new Audio('tom-1.mp3');
    audio.play();
}
*/
function playAudio(sound){
    var path = "C:\Users\derek\Downloads\Homework1\Homework1\sounds";
    var audio = new Audio(path + sound);
    audio.play();
}
