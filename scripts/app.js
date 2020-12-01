const bellBtn = document.querySelector('.bell-btn-dropdown');

  bellBtn.onclick = event => {
    event.stopPropagation();
    document.querySelector('.bell-nav-settings').classList.toggle('show');
  }

  const arrowBtn = document.querySelector('.arrow-btn-dropdown');

  arrowBtn.onclick = event => {
    event.stopPropagation();
    document.querySelector('.arrow-nav-settings').classList.toggle('show');
  }

  
  const inboxBtn = document.querySelector('.inbox-btn-dropdown');
  
  inboxBtn.onclick = event => {
    event.stopPropagation();
    document.querySelector('.inbox-nav-settings').classList.toggle('show')
  }



  window.onclick = event => {
    document.querySelector('.bell-nav-settings').classList.remove('show');
    document.querySelector('.arrow-nav-settings').classList.remove('show');
    document.querySelector('.inbox-nav-settings').classList.remove('show');
  }
