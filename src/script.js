
const data = [
    {
        "name": "apple",
        "cost": 19,
        "description": "apples are good",
        "image": "https://zjy.blob.core.windows.net/quiz1/apple.jpg?sp=r&st=2024-06-06T21:08:43Z&se=2024-06-07T05:08:43Z&spr=https&sv=2022-11-02&sr=b&sig=fs6Lsup9s%2Bh9A7AyUMOHZrjlRdKvsnDezNK7VKo4eYg%3D"
    },
    {
        "name": "berry",
        "cost": 20,
        "description": "berries are great",
        "image": ""
    },
    {
        "name": "carl",
        "cost": "",
        "description": "cral is good",
        "picture": "https://zjy.blob.core.windows.net/quiz1/carl.jpg?sp=r&st=2024-06-06T21:47:48Z&se=2024-06-07T05:47:48Z&spr=https&sv=2022-11-02&sr=b&sig=6KOOiaqa%2FZDBRlpIZUP8QkjpiHQ0cnriNOLPHuSkRpI%3D"
    }
];

function showNameInfo() {
    const nameInput = document.getElementById('name-input').value.toLowerCase();
    const entry = data.find(item => item.name.toLowerCase() === nameInput);

    if (entry) {
        document.getElementById('info-name').textContent = entry.name;
        document.getElementById('info-cost').textContent = `Cost: ${entry.cost}`;
        document.getElementById('info-description').textContent = `Description: ${entry.description}`;
        document.getElementById('info-image').src = entry.picture;
        document.getElementById('info-container').classList.remove('hidden');
    } else {
        alert("Name not found. Please enter a valid name.");
    }
}
function updateDescription() {
    const nameInput = document.getElementById('update-name').value.toLowerCase();
    const newDescription = document.getElementById('new-description').value.trim();
    const entry = data.find(item => item.name.toLowerCase() === nameInput);

    if (entry && newDescription) {
        entry.description = newDescription;
        alert("Description updated successfully!");
        showNameInfo(); // Update the displayed info to reflect changes
    } else {
        alert("Name not found or invalid description.");
    }
}