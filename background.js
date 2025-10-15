
const youtube = 'https://youtube.com';

chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'click-live-button') {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

    if (tab.url.includes('youtube.com')) {
      try {
        await chrome.scripting.executeScript({
          target: {tabId: tab.id},
          files: ['content.js']
        });
      } catch (error) {
        console.error('Failed to execute script:', error);
      }
    }
  }
});