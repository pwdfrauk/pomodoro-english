document.addEventListener("DOMContentLoaded", function () {

      // to do open and close 
      let todoOpenBtn = document.querySelector('.help');
      let helpPanel = document.querySelector('.help-panel');
      let helpPanelBody = document.querySelector('#help-panel');
      let openToDoListBtn  = document.querySelector('#openToDoList');
      let helpPanelWidth ;
      todoOpenBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        if(openToDoListBtn.getAttribute('panel') !== 'open') {
          helpPanel.style.width = "809px";
          helpPanel.style.opacity = '1';
          helpPanelBody.style.opacity = '1';
          helpPanelWidth = helpPanel.style.width;
          setTimeout(()=> {
            helpPanel.style.height = '450px';
              openToDoListBtn.setAttribute("panel", 'open');
          }, 1300);
        } else {
          helpPanel.style.height = '120px';
          setTimeout(()=> {
          helpPanel.style.width = "0px";
          helpPanel.style.opacity = '0';
          helpPanelBody.style.opacity = '0';
          helpPanelWidth = helpPanel.style.width;
          openToDoListBtn.setAttribute("panel", 'close');
          }, 1000)
        }
      })

});


// $(document).ready(function() {

// $('.help').on('click', function(){
//     $('.help-panel').animate({
//       width : '809px',
//       opacity : '1.0',
//     }, 700, function(){
//       $('.help-panel').animate({
//         height : '450px'
//       }, 900);
//     });
//     setTimeout(function(){
//       $('#help-panel').animate({
//         opacity : '1.0'
//       }, 250)
//     }, 340);
//   });
  
//   $('.Collapse-Help').on('click', function(){
//     $('.help-panel').animate({
//       height : '180px'
//     }, 500, function(){
//       $('.help-panel').animate({
//         width : '0px'
//       }, 500);
      
//       $('#help-panel').show();
//       $('#ThankYou').hide();
//     });
    
//     setTimeout(function(){
//       $('#help-panel').animate({
//         opacity : '0'
//       }, 250)
//     }, 100);
    
//   });
  
//   $('.action-button').on('click', function(){ 
    
//     var isValid = false;
    
//     if( $('#textarea').val() == "" 
//        || $('#textarea').val() == null 
//        || $('#textarea').val() == "undefined" ) 
//     {
//       $('#textarea').addClass('error').focus();
//       isValid = false;
//       return isValid;
//     } else {
//       isValid = true;
//       $('#textarea').removeClass('error');
//       $('#ThankYou').fadeIn(500);
//       $('#help-panel').fadeOut(100);
//       setTimeout( function() { $('#textarea').val(''); }, 150);
//       return isValid;
//     }
//   })
// })