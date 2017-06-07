// Show/hide selector
export function switchSelector(command) {
  let type;
  if(command === 'SHOW') type = 'SHOW_SELECTOR';
  else type = 'HIDE_SELECTOR';
  return {
    type: type
  }
}