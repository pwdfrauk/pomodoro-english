document.addEventListener("DOMContentLoaded", function () {

//  ================================  Timer  script start ===================
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');

    var wm = document.getElementById('w_minutes');
    var ws = document.getElementById('w_seconds');

    var bm = document.getElementById('b_minutes');
    var bs = document.getElementById('b_seconds');

    var setWm = document.getElementById('set-work-min');
    let setBm = document.getElementById('set-break-min');
    let timerAnimation = document.querySelector('.timer-wraper');

    let setWmIncrementBtn = document.getElementById('work-increment-btn');
    let setWmDecrementBtn = document.getElementById('work-decrement-btn');
    let setBmIncrementBtn = document.getElementById('break-increment-btn');
    let setBmDecrementBtn = document.getElementById('break-decrement-btn');

    let palyTimerInfo =  document.getElementById('timer-info');
    let workTimerArea = document.getElementById('work-time');
    let breakTimerArea = document.getElementById('break-time');
    let taskSelected = document.getElementById('seletedId');
    
    var sessionSec;
    var totalSessionSec=0;
  // Session hold 
  // var startedSessionM; 
  // var startedSessionS; 
  // var endedSessionM; 
  // var endedSessionS; 

  //  Work time increment and decrement 
    var  setWmValue = 25;
    setWm.innerText = setWmValue;
    wm.innerText = setWmValue;

    setWmIncrementBtn.addEventListener('click', (e)=> {
      setWmValue = setWmValue + 1;
      setWm.innerText = setWmValue;
      wm.innerText = setWmValue;
    });
    setWmDecrementBtn.addEventListener('click', (e)=> {
      if(setWmValue > 1 ) {
        setWmValue = setWmValue - 1;
        setWm.innerText = setWmValue;
        wm.innerText = setWmValue;
      }
     
    });
    //  break time increment and decrement 
    var  setBmValue = 5;
    setBm.innerText = setBmValue;
    bm.innerText = setBmValue;

    setBmIncrementBtn.addEventListener('click', (e)=> {
      setBmValue = setBmValue + 1;
      setBm.innerText = setBmValue;
      bm.innerText = setBmValue;
      BreakMinute = bm.innerText;
      BreakSec = BreakMinute * 60 ;
      BreakLop = BreakSec;
      console.log(BreakMinute, BreakSec, BreakLop )

    });
    setBmDecrementBtn.addEventListener('click', (e)=> {
      if(setBmValue > 1 ) {
        setBmValue = setBmValue - 1;
        setBm.innerText = setBmValue;
        bm.innerText = setBmValue;
        BreakMinute = bm.innerText;
        BreakSec = BreakMinute * 60 ;
        BreakLop = BreakSec;
        console.log(BreakMinute, BreakSec, BreakLop )
00      }
    });

    //store a reference to a timer variable
    var startTimer;

    start.addEventListener('click', function(){
      if(taskSelected.value) {
          if(startTimer === undefined ){
            startSessionSec();
            startTimer = setInterval(timer, 1000)
            animationStart(setWmValue);
        }  else {
          stopInterval();
          stopSessionSec()
          clearInterval(animationInterval);
          startTimer = undefined;
        }
      }
    })
    
    // Animation Start Function 
    let step = 1;
    let loops = Math.round(100 / step);
    let increment = 360 / loops;
    let half = Math.round( loops / 2);
    let barColor = '#f46e60';
    let backColor = '#ffa89f';
    var pie = 1;
    let animationContiner = document.querySelector('.timer-wraper');
    function animationStart(t) {
      // var num = 0;
      var min = t?t:1;
      var sec = min*60;
      var lop = sec;
      console.log('[work time Start Value ]', pie, min, sec, lop);
      animationInterval = setInterval(function(){
         sec = sec-1;
        if(min>1){
          pie = pie+(100/(lop));
        }else{
          pie = pie+(100/(lop));
        }
        if(pie>=101){ pie = 1; }
        // num = (sec/60).toFixed(2).slice(0,-3);

        var i = (pie.toFixed(2).slice(0,-3))-1;
        if( i <  half){
          let nextdeg = (90 + ( increment *  i ))+'deg';
          animationContiner.style.background = `linear-gradient(90deg, ${backColor} 50%, transparent 50%, transparent), linear-gradient(${nextdeg}, ${barColor} 50%, ${backColor} 50%, ${backColor})`;
        }else{
          let nextdeg = (-90 + ( increment * ( i - half ) ))+'deg';

          animationContiner.style.background = `linear-gradient(${nextdeg}, ${barColor} 50%, transparent 50%, transparent), linear-gradient(270deg, ${barColor} 50%, ${backColor} 50%, ${backColor})`;
        }
        if(sec==0){
          clearInterval(animationInterval);
          animationContiner.removeAttribute('style');
          pie = 1 ;
          console.log('[work time end Value ]', pie, min, sec, lop);
        }
      },1000);

    }
    var BreakMinute = bm.innerText;
    var BreakSec = BreakMinute * 60 ;
    var BreakLop = BreakSec;
    let BreakPie = 1
    console.log(BreakSec);
    function timerBreakAnimation() {
      BreakSec --;
      console.log('[break time start Value]', BreakPie, BreakMinute, BreakSec, BreakLop);
       if(BreakMinute >1){
         BreakPie = BreakPie+(100/(BreakLop));
       }else{
         BreakPie = BreakPie+(100/(BreakLop));
       }
       if(BreakPie>=101){ BreakPie = 1; }
       // num = (sec/60).toFixed(2).slice(0,-3);

       var i = (BreakPie.toFixed(2).slice(0,-3))-1;
       if( i <  half){
         let nextdeg = (90 + ( increment *  i ))+'deg';
         animationContiner.style.background = `linear-gradient(90deg, ${backColor} 50%, transparent 50%, transparent), linear-gradient(${nextdeg}, ${barColor} 50%, ${backColor} 50%, ${backColor})`;
       }else{
         let nextdeg = (-90 + ( increment * ( i - half ) ))+'deg';

         animationContiner.style.background = `linear-gradient(${nextdeg}, ${barColor} 50%, transparent 50%, transparent), linear-gradient(270deg, ${barColor} 50%, ${backColor} 50%, ${backColor})`;
       }
       if(BreakSec == 0){
        BreakSec == bm.innerText;
        BreakSec = BreakMinute * 60 ;
        BreakLop = BreakSec;
        // BreakMinute = setBmValue;
        // BreakSec = BreakMinute * 60 ;
        // BreakLop = BreakSec;
        BreakPie = 1 ;
        animationContiner.removeAttribute('style');
        console.log('[break time end Value]', pie, BreakMinute, BreakSec, BreakLop);
         animationStart(setWmValue);
       }
    }

    function animationStop() {
      clearInterval(animationInterval);
      animationContiner.removeAttribute('style');
      pie = 1 ;

    }
    // reset.addEventListener('click', function(){
    //     wm.innerText = 25;
    //     ws.innerText = "00";

    //     bm.innerText = 5;
    //     bs.innerText = "00";

    //     document.getElementById('counter').innerText = 0;
    //     stopInterval()
    //     startTimer = undefined;
    // })

    // stop.addEventListener('click', function(){
    //     stopInterval()
    //     startTimer = undefined;
    // })


    //Start Timer Function
    function timer(){
        //Work Timer Countdown
        if(ws.innerText != 0){
          ws.innerText--;
          timerAnimation.style
          palyTimerInfo.innerText = 'Taches';
          workTimerArea.style.display='flex';
          breakTimerArea.style.display = 'none';

        } else if(wm.innerText != 0 && ws.innerText == 0){
          palyTimerInfo.innerText = 'Taches';
          workTimerArea.style.display='flex';
          breakTimerArea.style.display = 'none';
            ws.innerText = 59;
            wm.innerText--;
        }
        //Break Timer Countdown
        if(wm.innerText == 0 && ws.innerText == 0){
          palyTimerInfo.innerText = 'Break';
          workTimerArea.style.display='none';
          breakTimerArea.style.display = 'flex';
          timerBreakAnimation()
          // animationStart(setBmValue);
          stopSessionSec();
            if(bs.innerText != 0){
                bs.innerText--;
            } else if(bm.innerText != 0 && bs.innerText == 0){
                bs.innerText = 59;
                bm.innerText--;
            }
        }
        //Increment Counter by one if one full cycle is completed
        if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
            wm.innerText = setWmValue;
            ws.innerText = "00";

            bm.innerText = setBmValue;
            bs.innerText = "00";

            // document.getElementById('counter').innerText++;
        }
    }

    //Stop Timer Function
    function stopInterval(){
        clearInterval(startTimer);
    }
    function startSessionSec() {
      sessionSec = setInterval(()=>{
        totalSessionSec = totalSessionSec + 1;
    }, 1000)
    }
    function stopSessionSec() {
        const id = taskSelected.value;
        updateTaskToLs(id, totalSessionSec);
        clearInterval(sessionSec)
        totalSessionSec=0;
    }
    // convert Sec to HH:MM:SS
    function convertHMS(value) {
      const sec = parseInt(value, 10); // convert value to number if it's string
      let hours   = Math.floor(sec / 3600); // get hours
      let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
      let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
      // add 0 if value < 10; Example: 2 => 02
      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}
      return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
  }
   
//  ================================  Timer  script end  ====================================================




  // =================== Task Bar Open And Close ================  
  // to do open and close 
  let todoOpenBtn = document.querySelector('.help');
  let helpPanel = document.querySelector('.help-panel');
  let helpPanelBody = document.querySelector('#help-panel');
  let openToDoListBtn  = document.querySelector('#openToDoList');
  let helpPanelWidth ;

  // open task bar 
  function openTaskBar() {
    helpPanel.style.width = "100%";
    helpPanel.style.zIndex = "300";
    helpPanel.style.opacity = '1';
    helpPanelBody.style.opacity = '1';
    helpPanelWidth = helpPanel.style.width;
    setTimeout(()=> {
      helpPanel.style.height = '450px';
        openToDoListBtn.setAttribute("panel", 'open');
    }, 1300);
  }
  // close task bar
  function closeTaskBar() {
    helpPanel.style.height = '120px';
    setTimeout(()=> {
      helpPanel.style.zIndex = "100";
    helpPanel.style.width = "0%";
    helpPanel.style.opacity = '0';
    helpPanelBody.style.opacity = '0';
    helpPanelWidth = helpPanel.style.width;
    openToDoListBtn.setAttribute("panel", 'close');
    }, 1000)
  }
  todoOpenBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    if(openToDoListBtn.getAttribute('panel') !== 'open') {
      openTaskBar()
    } else {
      closeTaskBar();
    }
  })

  // ===================================== End task bar open and close script =================================



         // select add task button 
    let addTaskButton = document.querySelector('.add-task');
    let addTaskFormArea = document.querySelector("#add-task-area");
    let addTaskFormCloseBtn = document.querySelector("#add-task-close-btn");
    let tasklistContainer  = document.querySelector('.block-container');
    let addTaskForm = document.querySelector("#add-task-form");
    let setTimeForCompleteTask = document.querySelector('#set-time-for-task');
    let taskRowWaper = document.querySelector('.block-content');
    let tasks = [];
    let taskContainer = document.querySelector('.block-content');
  

   
    taskContainer.addEventListener('click', (e)=> {
      if(e.target.className === 'delete-task-btn') {
        const task =  e.target.parentElement.parentElement; 
        const id = task.dataset.createdat;
        deleteTask(id)
        task.remove();
      } else if(e.target.className === 'select-task-btn') {
        
        const task =  e.target.parentElement.parentElement; 
        const seletedIdplaceholder  = document.querySelector('#seletedId');
        const seletedTextPlaceholder = document.querySelector('.selected-task-placeholder');
        const id = task.dataset.createdat;

        const data =  findTask(id);

        closeTaskBar();
        seletedIdplaceholder.value = data.id;
        seletedTextPlaceholder.innerHTML = data.title;
      }
    })

  
        // get data from local storage
        function getDataToLS() {
            tasks = localStorage.getItem('tasks');
            //items = (items)? JSON.parse(items) : []
            if(tasks) {
                tasks = JSON.parse(tasks);
            } else  {
                tasks = [];
            }
            return tasks;
        }
        getDataToLS();

       
       
        // show task to ui 
        function showTaskUi() {
            let allTask = getDataToLS();
            allTask.forEach((task) => {
                 let totalTime = convertHMS(task.timeUsed) ;
                 let targetTime = convertHMS(Number(task.setTimeForComplete));
                 let lastSession = convertHMS(task.sessionTime);
                 let reaming =  Number(task.setTimeForComplete) - Number(task.timeUsed);
                 let statusTrack = task.timeUsed / task.setTimeForComplete;
                 let statusTrackToFixed = statusTrack.toFixed(1);
                 let finalStatusTrack = statusTrackToFixed * 100;
                 let reamingTime = convertHMS(reaming);

                task = `<div class="task-row" data-createdat="${task.id}" >
                <div class="priority ${task.priority}">
                  <a tooltip="Task priority" class="tooltip">${task.priority}</a>
                </div>
                <div class="task-title">
                  <h4>${task.title}</h4>
                  <h5>${task.description}</h5>
                </div>
                <div class="task-status">
                  <div class="status-bar">
                    <div class="status-track">
                      <span class="status-text">${finalStatusTrack}%</span>
                      <div class="status-fill" style="width:${finalStatusTrack}%"></div>
                    </div>
                  </div>
                </div>
                <div class="task-time"><span>Reaming: ${reamingTime}</span><span> Last-Session: ${lastSession}</span><span> Target: ${targetTime}</span><span>Total: ${totalTime}</span></div>
                 <div class="select-timer-area"><span class="select-task-btn" style="margin-right: 15px;">Select</span><span class="delete-task-btn"> Delete</span></div>
              </div>`
              taskRowWaper.insertAdjacentHTML('afterbegin', task);
            });

        }
        showTaskUi()


        // add item data to local storage 
        function addItemToLS( id, title, description,  setTimeForComplete, priority, timeUsed, sessionTime ) {
            let tasks = getDataToLS()
              tasks.push({id, title, description, setTimeForComplete, priority, timeUsed, sessionTime  });
             localStorage.setItem('tasks', JSON.stringify(tasks));
         }

    // Adding task to Local storage from task form
    addTaskForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        const title = document.querySelector("#add-task-title").value;
        const description = document.querySelector("#add-task-desc").value;
        const priority = document.querySelector("#tasks-priority").value;
        const id = new Date().toLocaleString();
        const setTimeForComplete = setTimeForCompleteTask.value? setTimeForCompleteTask.value * 60 : 60;
        const timeUsed = 0;
        const sessionTime = 0;

        if(title){
            addItemToLS(id, title, description,  setTimeForComplete, priority, timeUsed, sessionTime);
            // reset Form
            taskAddDirectUi(id, title, description,  setTimeForComplete, priority, timeUsed, sessionTime);
             resetForm();
             getDataToLS();
             closeAddtaskFomr();
        } else {
            alert('Please Add Title')
        }
     })
    // Open Add Task form
    addTaskButton.addEventListener('click', (e)=> {
          e.preventDefault();
             addTaskFormArea.style.display = 'block';
             tasklistContainer.style.opacity = '0';
    })
    // Close Add task Form 
    addTaskFormCloseBtn.addEventListener('click', (e)=> {
         closeAddtaskFomr();
    })
    // close add task Form Function 
    function closeAddtaskFomr() {
        addTaskFormArea.style.display = 'none';
        tasklistContainer.style.opacity = '1';
    }
    // Task Add Form to Ui 
    function taskAddDirectUi(id, title, description,  setTimeForComplete, priority, timeUsed, sessionTime) {
      let targetTimeToHMS = convertHMS(setTimeForComplete) ;
      let sessionTimeToHMS = convertHMS(sessionTime);
      let setTimeForCompleteToHMS = convertHMS(setTimeForComplete);
      let timeUsedToHMS = convertHMS(timeUsed);

      let newTask = `<div class="task-row" data-createdat="${id}" >
        <div class="priority ${priority}">
          <a tooltip="Task priority" class="tooltip">${priority}</a>
        </div>
        <div class="task-title">
          <h4>${title}</h4>
          <h5>${description}</h5>
        </div>
        <div class="task-status">
          <div class="status-bar">
            <div class="status-track">
              <span class="status-text">${setTimeForComplete? timeUsed / setTimeForComplete : 0 }</span>
              <div class="status-fill" style="width:${setTimeForComplete? timeUsed / setTimeForComplete : 0  }"></div>
            </div>
          </div>
        </div>
        <div class="task-time"><span>Reaming: ${targetTimeToHMS}</span><span> Last-Session: ${sessionTimeToHMS}</span><span>Target: ${setTimeForCompleteToHMS}</span><span>Total: ${timeUsedToHMS}</span></div>
        <div class="select-timer-area"><span class="select-task-btn" style="margin-right: 15px;">Select</span><span class="delete-task-btn"> Delete</span></div>
      </div>`
      taskRowWaper.insertAdjacentHTML('afterbegin', newTask);
      

    }

    // Reset Form 
    function resetForm(title){
        let makeTitleEmpty = document.querySelector("#add-task-title");
        let makeDescriptionEmpty = document.querySelector("#add-task-desc");
        const makeSetTimeForCompleteEmpty = setTimeForCompleteTask
        makeTitleEmpty.value = '';
        makeDescriptionEmpty.value = '';
        makeSetTimeForCompleteEmpty.value = '';
    }

    
    function setFormattedTime() {
        const now = new Date().toLocaleTimeString('en-US', {
            month : 'short',
            day : '2-digit',
            hour : '2-digit',
            minute : 'numeric'
        })
        const time = now.split(',')[1];
        const month = now.split(',')[0].split(' ')[0];
        const day = now.split(',')[0].split(' ')[1];
        
        let formattedtime = `${day} ${month}, ${time}`
        return formattedtime;
    }
    // delete Task Function 
    function deleteTask(id) {
        let tasks = getDataToLS();
        let index = tasks.findIndex((task) => task.id === id);
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
      // find index button 
      function findTask(id) {
        let tasks = getDataToLS();
        return tasks.find((task) => task.id === id);
      }
      // update Task 
      function updateTaskToLs(id, totalSessionSec) {
        let tasks = getDataToLS();
        let index = tasks.findIndex((task) => task.id === id);
        let totalTimeUsed = tasks[index].timeUsed + totalSessionSec;
        tasks[index].timeUsed = totalTimeUsed;
        tasks[index].sessionTime = totalSessionSec;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        let allTaskRow = document.querySelectorAll('.task-row');
        allTaskRow.forEach(row => {
          row.remove()
        })
        showTaskUi();
      }
    


    
      


    });
