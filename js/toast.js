
const Toast = (options = {
    position: 'alert-top-center',
    color: 'alert-dark',
    message: ''
  }) => {
    var div1 = document.createElement('div');
    div1.className = `alert ${options.position} ${options.color}`;
    var div2 = document.createElement('div');
    div2.className = 'alert-icons';
    var bell = document.createElement('i');
    bell.className = 'fa fa-';
    var times = document.createElement('i');
    times.className = 'fa fa-times alert-dismiss';
    times.onclick = () => div1.remove();
    var p = document.createElement('p');
    p.className = 'alert-message';
    div2.append(bell);
    div2.append(times);
    var text = document.createTextNode(options.message);
    div1.append(div2);
    p.append(text);
    div1.append(p);
    // append to the body page
    document.body.append(div1);
    
    setTimeout(() => {
      div1.style.animationName = 'fadeOut';
      setTimeout(() => {
        div1.remove();
      }, 1500);
    }, 5000);
}
  
