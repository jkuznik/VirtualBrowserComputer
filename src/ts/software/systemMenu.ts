import {Computer} from "../Computer";
import {loadMainMenu, refreshButtonVisibility} from "../menu";
import {FileType} from "./FileType";
import {HardwareAbstractComponent} from "../hardware/components/HardwareAbstractComponent"; // Upewnij się, że jest zaimportowane

import {AbstractFile} from "./file/AbstractFile";
import {AbstractDrive} from "../hardware/components/hardDisk/AbstractDrive"; // Upewnij się, że jest zaimportowane

export function loadSystemMenu(computer: Computer): void {

    let executableFiles: AbstractFile[] = [];

    // 1. Iteracja po wszystkich komponentach komputera
    computer.getComponents().forEach(component => {

        // 2. Sprawdzenie, czy komponent jest instancją AbstractDrive
        // Używamy 'instanceof' do sprawdzenia, czy komponent jest dyskiem
        if (component instanceof AbstractDrive) {
            const drive = component as AbstractDrive;

            // 3. Iteracja po plikach na danym dysku i filtrowanie .EXE
            drive.getFiles().forEach(file => {
                if (file.getType() === FileType.EXE) {
                    executableFiles.push(file);
                }
            });
        }
    });

    // 4. Budowanie elementów menu z pobranych plików .EXE
    const menuItems = executableFiles
        .map(file => ({
            label: `${file.getName()} (${file.getSize()}KB)`, // Wyświetlamy nazwę i rozmiar
            onClick: () => {
                // Po kliknięciu, uruchamiamy plik/aplikację.
                // Pamiętaj: metoda run() w AbstractFile powinna być zaktualizowana
                // tak, aby akceptować 'computer' lub mieć go zapisanego,
                // tak jak to robiliśmy dla MemoryGame.
                file.run();

                // Schowanie menu na czas działania aplikacji
                refreshButtonVisibility([]);
            }
        }));

    // 5. Dodanie przycisku powrotu na koniec listy
    menuItems.push({
        label: "<< Back",
        onClick: () => {
            loadMainMenu(computer);
        }
    });

    // 6. Odświeżenie przycisków
    refreshButtonVisibility(menuItems);

    console.log(`System Menu loaded. Found ${executableFiles.length} executable files.`);
}