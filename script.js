// Data Sample Wonderkid SM26
const players = [
    { name: "Endrick", pos: "ST", age: 19, rating: 76, pot: 90 },
    { name: "Lamine Yamal", pos: "AMR", age: 18, rating: 81, pot: 93 },
    { name: "Warren Zaïre-Emery", pos: "MC", age: 19, rating: 78, pot: 89 },
    { name: "Pau Cubarsí", pos: "DC", age: 18, rating: 75, pot: 88 },
    { name: "Jorrel Hato", pos: "DL/DC", age: 19, rating: 74, pot: 87 }
];

// Menampilkan Data Pemain ke Tabel
function loadPlayers() {
    const tbody = document.getElementById("playerBody");
    tbody.innerHTML = "";
    players.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td><b>${p.name}</b></td>
                <td>${p.pos}</td>
                <td>${p.age}</td>
                <td>${p.rating}</td>
                <td style="color: #00ff88;"><b>${p.pot}</b></td>
            </tr>
        `;
    });
}

// Navigasi Tab
function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
}

// Filter Pencarian
function filterPlayers() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#playerBody tr");
    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(query) ? "" : "none";
    });
}

// Kalkulator Taktik Sederhana
function calculateTactic() {
    const style = document.getElementById("tacticStyle").value;
    const pace = parseInt(document.getElementById("avgPace").value) || 0;
    const resultDiv = document.getElementById("calcResult");

    if (style === "wing" && pace >= 80) {
        resultDiv.innerHTML = "<b>Skor Efektivitas: 92%</b><br>Taktik ini sangat disarankan! Winger kamu punya kecepatan yang cukup untuk membongkar pertahanan lawan.";
    } else if (style === "wing" && pace < 80) {
        resultDiv.innerHTML = "<b>Skor Efektivitas: 60%</b><br>Peringatan: Pace winger kurang memadai untuk memaksimalkan serangan sayap.";
    } else {
        resultDiv.innerHTML = "<b>Skor Efektivitas: 78%</b><br>Taktik seimbang, pastikan ketahanan fisik (Stamina) pemain tengah terjaga.";
    }
}

// Inisialisasi Radar Chart Atribut
window.onload = function() {
    loadPlayers();

    const ctx = document.getElementById('attributeRadar').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Pace', 'Shooting', 'Passing', 'Dribbling', 'Defending', 'Physical'],
            datasets: [{
                label: 'Profil Penyerang Ideal (ST)',
                data: [88, 85, 70, 82, 35, 78],
                backgroundColor: 'rgba(0, 255, 136, 0.2)',
                borderColor: '#00ff88',
                pointBackgroundColor: '#00ff88'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: '#334155' },
                    grid: { color: '#334155' },
                    pointLabels: { color: '#ffffff' },
                    ticks: { display: false }
                }
            }
        }
    });
};
