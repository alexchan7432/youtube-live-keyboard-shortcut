function findLiveButtons() {
  const buttons = document.querySelectorAll('button');
  const liveButtons = [];

  buttons.forEach(button => {      
    if (button.ariaLabel && button.ariaLabel.toLowerCase().includes('skip ahead to live broadcast')) {
      liveButtons.push(button); 
    }
  });

  return liveButtons;
}

function clickLiveButton() {
  const liveButtons = findLiveButtons();

  if (liveButtons.length === 0) {
    console.log('No Live buttons found on this page');
    return;
  }

  liveButtons[0].click()
  
  console.log(`Found and highlighted ${liveButtons.length} Live button(s)`);
}

clickLiveButton();