import { refreshButtonVisibility} from "./configureButtons";

export function loadMainMenu(): void {
  refreshButtonVisibility([
    { label: "Hardware", onClick: loadHardwareMenu },
    { label: "Software", onClick: () => alert("Software Menu is not implemented yet") }
  ]);
}

function loadHardwareMenu(): void {
  refreshButtonVisibility([
    { label: "List Components", onClick: () => alert("List — TODO") },
    { label: "Component Details", onClick: () => alert("Details — TODO") },
    { label: "Add Component", onClick: () => alert("Add — TODO") },
    { label: "Remove Component", onClick: () => alert("Remove — TODO") },
    { label: "Back", onClick: loadMainMenu }
  ]);
}
