function loadMainMenu() {
  renderButtons([
    { label: "Hardware", onClick: loadHardwareMenu },
    { label: "Software", onClick: () => alert("Software – not implemented yet!") }
  ]);
}

function loadHardwareMenu() {
  renderButtons([
    { label: "List Components", onClick: () => alert("List — TODO") },
    { label: "Component Details", onClick: () => alert("Details — TODO") },
    { label: "Add Component", onClick: () => alert("Add — TODO") },
    { label: "Remove Component", onClick: () => alert("Remove — TODO") },
    { label: "Back", onClick: loadMainMenu }
  ]);
}
