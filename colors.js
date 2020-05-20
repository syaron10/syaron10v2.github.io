var Body = {
  setColor: function(color){
    //document.querySelector('body').style.color =color;
    $('body').css('color', color);
  },
  setBackgroundColor: function(color){
    //document.querySelector('body').style.backgroundColor =color;
    $('body').css('backgroundColor', color);
  }
}
var A = {
  setColor: function(color){
    /*
    var alist = document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
        alist[i].style.color = color;
        i++;
      }
    */
    $('a').css('color', color);
    }
  }
var ULLI = {
  setColor: function(color){
    /*
    var ulli = document.querySelectorAll('ul li');
    var x=0;
    while(x<ulli.length){
        ulli[x].style.color=color;
        x++;
    }
    */
    $('ul li').css('color', color);
  }
}
function nightdayhandler(self){
  if(self.value ==='night' ){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    A.setColor('powderblue');
    ULLI.setColor('pink');
    self.value ='day';

  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    A.setColor('purple');
    ULLI.setColor('red');
    self.value ='night';
    }
  }
