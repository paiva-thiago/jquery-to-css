String.prototype.subs = function(strOld,strNew){
    return this.split(strOld).join(strNew)
}
String.prototype.tira = function(str){
    return this.subs(str,'')
}
function convert (){
    let txtJqr = document.getElementById('jquery-css').value;
    let txtCss = txtJqr.tira('$(\'');
    txtCss = txtCss.tira('\').css(','');
    txtCss = txtCss.tira(');');
    txtCss = txtCss.tira('\'');
    txtCss = txtCss.subs(/,$/gm,';');
    document.getElementById('vanilla-css').value=txtCss;
}
document.getElementById('convert').onclick=convert();