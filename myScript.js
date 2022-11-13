const dropDown = () => {
  let myProjectList = document.getElementById('myProjects'); 
  let expandProjectList = document.getElementById('expandContents');
  if (myProjectList.style.display === 'none') {
    myProjectList.style.display = 'block';
    expandProjectList.innerText = 'v'
  } else {
    myProjectList.style.display = 'none'
    expandProjectList.innerText = '>'
  }
}