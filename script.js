function loopFor(){
    let list = document.getElementById("list");
    list.innerHTML = "";
    for(let i = 1; i <= 40; i++){
      let listItem = document.createElement("li");
      listItem.textContent = i;
      list.appendChild(listItem);
    }
  }
  
  function loopWhile(){
    let list = document.getElementById("list");
    list.innerHTML = "";
    let i = 1;
    while(i <= 40){
      let listItem = document.createElement("li");
      listItem.textContent = i;
      list.appendChild(listItem);
      i++;
    }
  }
  
  function loopDoWhile(){
    let list = document.getElementById("list");
    list.innerHTML = "";
    let i = 1;
    do{
      let listItem = document.createElement("li");
      listItem.textContent = i;
      list.appendChild(listItem);
      i++;
    }while(i <= 40);
  }