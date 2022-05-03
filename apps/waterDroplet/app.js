E.showMessage("No water");
setWatch(() => {
  E.showMessage("Water Detected");
  setTimeout(()=>g.clear(), 1000);
}, BTN1);
