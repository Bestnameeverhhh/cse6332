const roomData = [
    {
        "name": "ann",
        "room": "19",
        "picture": "https://zjy.blob.core.windows.net/quiz0/cat.jpg?sp=r&st=2024-06-06T03:02:14Z&se=2024-06-06T11:02:14Z&spr=https&sv=2022-11-02&sr=b&sig=3%2FK7UJ%2FsdKFYG7Oeg7Po5xtmVP%2FzUSt0zcq2HyboHu8%3D",
        "telephoneNumber": "817001",
        "description": "ann is a manager"
    },
    {
        "name": "Jane Smith",
        "room": "meeting",
        "picture": "https://example.com/jane-smith.jpg",
        "telephoneNumber": "817002",
        "description": "A cozy room perfect for small team meetings."
    },
    {
        "name": "Emily Johnson",
        "room": "break",
        "picture": "https://example.com/emily-johnson.jpg",
        "telephoneNumber": "555-555-5555",
        "description": "A comfortable room for employees to relax and take breaks."
    }
];

function showRoomInfo() {
    const roomInput = document.getElementById('room-input').value.toLowerCase();
    const roomInfo = roomData.find(room => room.room === roomInput);

    if (roomInfo) {
        document.getElementById('room-name').textContent = roomInfo.name;
        document.getElementById('room-description').textContent = roomInfo.description;
        document.getElementById('room-image').src = roomInfo.picture;
        document.getElementById('room-info').classList.remove('hidden');
    } else {
        alert("Room not found. Please enter a valid room name.");
    }
}
    function showTelRangeInfo() {
        const start = parseInt(document.getElementById('tel-start').value);
        const end = parseInt(document.getElementById('tel-end').value);
        const infoContainer = document.getElementById('info-container');
        infoContainer.innerHTML = '';
    
        if (isNaN(start) || isNaN(end) || start > end) {
            alert("Please enter a valid telephone number range.");
            return;
        }
    
        const matchingEntries = roomData.filter(entry => entry.telephoneNumber >= start && entry.telephoneNumber <= end);
    
        if (matchingEntries.length > 0) {
            matchingEntries.forEach(entry => {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'result';
    
                const nameP = document.createElement('p');
                nameP.textContent = `Name: ${entry.name}`;
                resultDiv.appendChild(nameP);
    
                const telP = document.createElement('p');
                telP.textContent = `Telephone Number: ${entry.telephoneNumber}`;
                resultDiv.appendChild(telP);
    
                const descP = document.createElement('p');
                descP.textContent = `Description: ${entry.description}`;
                resultDiv.appendChild(descP);
    
                const img = document.createElement('img');
                img.src = entry.picture || 'https://example.com/no-image.jpg';
                img.alt = `${entry.name}'s Picture`;
                resultDiv.appendChild(img);
    
                infoContainer.appendChild(resultDiv);
            });
        } else {
            const noInfoDiv = document.createElement('div');
            noInfoDiv.className = 'result';
            noInfoDiv.textContent = "No information or picture available.";
            infoContainer.appendChild(noInfoDiv);
        }
   
}
function showTelRangeInfo() {
    const start = parseInt(document.getElementById('tel-start').value);
    const end = parseInt(document.getElementById('tel-end').value);
    const infoContainer = document.getElementById('info-container');
    infoContainer.innerHTML = '';

    if (isNaN(start) || isNaN(end) || start > end) {
        alert("Please enter a valid telephone number range.");
        return;
    }

    const matchingEntries = roomData.filter(entry => entry.telephoneNumber >= start && entry.telephoneNumber <= end);

    if (matchingEntries.length > 0) {
        matchingEntries.forEach(entry => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result';

            const nameP = document.createElement('p');
            nameP.textContent = `Name: ${entry.name}`;
            resultDiv.appendChild(nameP);

            const telP = document.createElement('p');
            telP.textContent = `Telephone Number: ${entry.telephoneNumber}`;
            resultDiv.appendChild(telP);

            const descP = document.createElement('p');
            descP.textContent = `Description: ${entry.description}`;
            resultDiv.appendChild(descP);

            const img = document.createElement('img');
            img.src = entry.picture || 'https://example.com/no-image.jpg';
            img.alt = `${entry.name}'s Picture`;
            resultDiv.appendChild(img);

            infoContainer.appendChild(resultDiv);
        });
    } else {
        const noInfoDiv = document.createElement('div');
        noInfoDiv.className = 'result';
        noInfoDiv.textContent = "No information or picture available.";
        infoContainer.appendChild(noInfoDiv);
    }
}

function updateDescription() {
    const tel = parseInt(document.getElementById('update-tel').value);
    const newDescription = document.getElementById('new-description').value.trim();

    if (isNaN(tel) || newDescription === '') {
        alert("Please enter a valid telephone number and new description.");
        return;
    }

    const entry = roomData.find(entry => entry.telephoneNumber == tel);

    if (entry) {
        entry.description = newDescription;
        alert("Description updated successfully!");
        showTelRangeInfo(); // Update the displayed info to reflect changes
    } else {
        alert("Telephone number not found.");
    }
}