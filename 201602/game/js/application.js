// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
    gm= new GameManager(5, KeyboardInputManager, HTMLActuator, LocalScoreManager,LocalSaveManager);
});
function restart() {
    gm.saveManager.setScore(0);
    gm.saveManager.setMap("");
    gm.restart();
}
function addEvent(obj,type,handle){
    try{  // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type,handle,false);
    }catch(e){
        try{  // IE8.0及其以下版本
            obj.attachEvent('on' + type,handle);
        }catch(e){  // 早期浏览器
            obj['on' + type] = handle;
        }
    }
}
