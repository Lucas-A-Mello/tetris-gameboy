$(document).ready(function(){

  $(document).keydown(function(e) {
     //alert(e.keyCode);
  
     if(e.keyCode==37)
     {
      //alphabet arrowleft 
            $("#seta-esquerda").css("background","rgb(230, 152, 7)");
     }

      if(e.keyCode==38)
      {
       //alphabet arrowup
             $("#seta-cima",).css("background","rgb(230, 152, 7)");
      }

      if(e.keyCode==39)
      {
       //alphabet arrowright
             $("#seta-direita").css("background","rgb(230, 152, 7)");
      }

      if(e.keyCode==40)
      {
       //alphabet arrowdown 
             $("#seta-baixo").css("background","rgb(230, 152, 7)");
      }

      if(e.keyCode==65)
     {
      //alphabet A
            $("#seta-esquerda").css("background","rgb(230, 152, 7)");
     }

      if(e.keyCode==87)
      {
       //alphabet W 
             $("#seta-cima",).css("background","rgb(230, 152, 7)");
      }

      if(e.keyCode==68)
      {
       //alphabet D 
             $("#seta-direita").css("background","rgb(230, 152, 7)");
      }

      if(e.keyCode==83)
      {
       //alphabet S 
             $("#seta-baixo").css("background","rgb(230, 152, 7)");
      }
  
  });
  
  
  })

  $(document).ready(function(){

    $(document).keyup(function(e) {
       //alert(e.keyCode);
    
       if(e.keyCode==37)
     {
      //alphabet arrowleft 
            $("#seta-esquerda").css("background","black");
     }

      if(e.keyCode==38)
      {
       //alphabet arrowup
             $("#seta-cima",).css("background","black");
      }

      if(e.keyCode==39)
      {
       //alphabet arrowright
             $("#seta-direita").css("background","black");
      }

      if(e.keyCode==40)
      {
       //alphabet arrowdown 
             $("#seta-baixo").css("background","black");
      }

      if(e.keyCode==65)
     {
      //alphabet A
            $("#seta-esquerda").css("background","black");
     }

      if(e.keyCode==87)
      {
       //alphabet W 
             $("#seta-cima",).css("background","black");
      }

      if(e.keyCode==68)
      {
       //alphabet D 
             $("#seta-direita").css("background","black");
      }

      if(e.keyCode==83)
      {
       //alphabet S 
             $("#seta-baixo").css("background","black");
      }
    
    });
    
    
    })

    //musica tetris

    var mySong = document.getElementById('mySong');
    var icon = document.getElementById('icon-som');
    
    icon.onclick = function() {
         if(mySong.paused) {
               mySong.play();
               icon.src = "imagens/volume-mute.svg";
         }
         else{
               mySong.pause();
               icon.src = "imagens/volume-up.svg";
         }
    }