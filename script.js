/***********************
 *  DISABILITA TASTO DESTRO E SCORCIATOIE
 ***********************/
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
  if (
    event.key === 'F12' ||
    (event.ctrlKey && event.shiftKey && event.key === 'I') ||
    (event.ctrlKey && event.key === 'U') ||
    (event.ctrlKey && event.key === 'S') ||
    (event.ctrlKey && event.key === 'C')
  ) {
    event.preventDefault();
    return false;
  }
});

/***********************
 *  CONFIGURAZIONE FIREBASE (Nuova API Key e parametri aggiornati)
 ***********************/
const firebaseConfig = {
  apiKey: "AIzaSyBivERuJvrO947t2Idv8DM3gZyfuqEQahw",
  authDomain: "campi-414b4.firebaseapp.com",
  databaseURL: "https://campi-414b4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "campi-414b4",
  storageBucket: "campi-414b4.firebasestorage.app",
  messagingSenderId: "985324700492",
  appId: "1:985324700492:web:b8cb569e83bb2e24ed85e9",
  measurementId: "G-3W0ZKB4S5Q"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/***********************
 *  VARIABILI GLOBALI
 ***********************/
let currentUser = null;
const adminUsername = "admin";
const adminPassword = "passwordAdmin";

// Utenti statici – mantenuti o aggiornati come desiderato
let staticUsers = {
  "admin": adminPassword,
  "user001": "jcne",
  "user002": "hoyw",
  // … altri utenti
};

// La data per la prenotazione selezionata (default = oggi)
let currentReservationDate = getTodayDate();

// Time slots a 45 minuti: dal primo slot alle 08:00 fino all'ultimo alle 20:00
const timeSlots = [
  "08:00", "08:45", "09:30", "10:15",
  "11:00", "11:45", "12:30", "13:15",
  "14:00", "14:45", "15:30", "16:15",
  "17:00", "17:45", "18:30", "19:15",
  "20:00"
];

// Inizializza i campi con i nuovi nomi
let reservations = {
  "BeachVolley": {},
  "Calcio": {},
  "Polivalente": {}
};

/***********************
 *  FUNZIONI UTILITY
 ***********************/
function getTodayDate() {
  const today = new Date();
  let yyyy = today.getFullYear();
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function showNotification(message) {
  const container = document.getElementById('notification-container');
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;
  container.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

/***********************
 *  GESTIONE DELLA DATA DI PRENOTAZIONE
 ***********************/
function updateReservationDate() {
  const dateInput = document.getElementById('reservation-date');
  if (dateInput && dateInput.value) {
    currentReservationDate = dateInput.value;
    loadReservationsFromFirestore();
  }
}

/***********************
 *  LOGIN & LOGOUT
 ***********************/
function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  if (!username || !password) {
    showNotification('Inserisci username e password.');
    return;
  }
  if (username === adminUsername && password === adminPassword) {
    authenticateUser(username);
  } else {
    authenticateStaticUser(username, password);
  }
}

function authenticateUser(username) {
  currentUser = username;
  toggleSections(true);
  toggleAdminSection();
  loadReservationsFromFirestore();
  checkAndResetAfterSevenFifty();
  showNotification(`Benvenuto, ${username}!`);
  loadAdminNotesRealtime();
  loadAdminImagesRealtime();
}

function authenticateStaticUser(username, password) {
  db.collection("users").doc(username).get().then(doc => {
    let storedPassword = staticUsers[username];
    if (doc.exists && doc.data().password) {
      storedPassword = doc.data().password;
    }
    const disabled = doc.exists ? doc.data().disabled : false;
    if (disabled) {
      showNotification("Questo utente è disabilitato.");
      return;
    }
    if (storedPassword === password) {
      currentUser = username;
      // Se il documento non esiste, crearlo con i dati iniziali (inclusi i crediti = 0)
      if (!doc.exists) {
        db.collection("users").doc(username).set({ password: staticUsers[username], disabled: false, role: "user", credits: 0 });
      }
      toggleSections(true);
      toggleAdminSection();
      loadReservationsFromFirestore();
      checkAndResetAfterSevenFifty();
      showNotification(`Benvenuto, ${username}!`);
      loadAdminNotesRealtime();
      loadAdminImagesRealtime();
    } else {
      showNotification("Credenziali errate!");
    }
  }).catch(err => {
    console.error(err);
    showNotification("Errore durante il login.");
  });
}

function logout() {
  currentUser = null;
  toggleSections(false);
  showNotification("Sei uscito con successo.");
}

/***********************
 *  FIRESTORE - PRENOTAZIONI
 ***********************/
// Ora carichiamo le prenotazioni per la data selezionata (currentReservationDate)
function loadReservationsFromFirestore() {
  const date = currentReservationDate;
  // Inizializza solo le chiavi previste
  reservations = { "BeachVolley": {}, "Calcio": {}, "Polivalente": {} };
  db.collection("reservations")
    .where("date", "==", date)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const { field, time, user } = doc.data();
        // Verifica che "field" sia uno dei campi previsti
        if (reservations.hasOwnProperty(field)) {
          if (!reservations[field][date]) {
            reservations[field][date] = {};
          }
          reservations[field][date][time] = user;
        } else {
          console.warn("Campo non riconosciuto:", field);
        }
      });
      populateAllFields();
      listenRealtimeForDate();
    })
    .catch(err => {
      console.error("Errore caricamento prenotazioni:", err);
      showNotification("Errore caricamento prenotazioni.");
    });
}

function listenRealtimeForDate() {
  const date = currentReservationDate;
  db.collection("reservations")
    .where("date", "==", date)
    .onSnapshot(snapshot => {
      reservations = { "BeachVolley": {}, "Calcio": {}, "Polivalente": {} };
      snapshot.forEach(doc => {
        const { field, time, user } = doc.data();
        if (reservations.hasOwnProperty(field)) {
          if (!reservations[field][date]) {
            reservations[field][date] = {};
          }
          reservations[field][date][time] = user;
        } else {
          console.warn("Campo non riconosciuto:", field);
        }
      });
      populateAllFields();
      populateAdminTable();
      if (currentUser === adminUsername) {
        populateCredentialsTable();
      }
    });
}


function saveReservationToFirestore(fieldName, date, time, user, role) {
  const docId = `${fieldName}_${date}_${time}_${user}`;
  return db.collection("reservations").doc(docId).set({ field: fieldName, date, time, user, role });
}

function deleteReservationFromFirestore(fieldName, date, time, user) {
  const docId = `${fieldName}_${date}_${time}_${user}`;
  return db.collection("reservations").doc(docId).delete();
}

/***********************
 *  GESTIONE PRENOTAZIONI & SISTEMA DI CREDITI
 ***********************/
function userHasReservationLimit() {
  // Conta tutte le prenotazioni dell'utente per date ≥ oggi
  return db.collection("reservations")
    .where("user", "==", currentUser)
    .where("date", ">=", getTodayDate())
    .get()
    .then(snapshot => snapshot.size >= 2);
}

function getUserCredits() {
  return db.collection("users").doc(currentUser).get().then(doc => {
    return doc.exists && doc.data().credits ? doc.data().credits : 0;
  });
}

function updateUserCredits(newCredits) {
  return db.collection("users").doc(currentUser).set({ credits: newCredits }, { merge: true });
}

function bookSlot(fieldName, slot) {
  const date = currentReservationDate;
  if (currentUser !== adminUsername) {
    // Controlla limite prenotazioni
    userHasReservationLimit().then(limitReached => {
      if (limitReached) {
        showNotification("Hai già 2 prenotazioni attive.");
        return;
      }
      // Controlla se l'utente ha almeno 1 credito
      getUserCredits().then(credits => {
        if (credits <= 0) {
          showNotification("Acquista crediti per effettuare la prenotazione.");
          return;
        }
        proceedBooking(fieldName, date, slot);
      });
    });
  } else {
    // L'admin non ha restrizioni
    proceedBooking(fieldName, date, slot);
  }
}

function proceedBooking(fieldName, date, slot) {
  if (reservations[fieldName][date][slot]) {
    showNotification("Questo slot è già prenotato.");
    return;
  }
  db.collection("users").doc(currentUser).get().then(doc => {
    const role = doc.exists ? doc.data().role : "user";
    saveReservationToFirestore(fieldName, date, slot, currentUser, role)
      .then(() => {
        showNotification(`Prenotazione effettuata: ${fieldName} alle ${slot}`);
        // Se non è admin, decrementa di 1 il credito dell'utente
        if (currentUser !== adminUsername) {
          let currentCredits = doc.data().credits || 0;
          updateUserCredits(currentCredits - 1);
        }
      })
      .catch(err => {
        console.error("Errore durante la prenotazione:", err);
        showNotification("Errore durante la prenotazione.");
      });
  }).catch(err => {
    console.error("Errore recupero ruolo utente:", err);
    showNotification("Errore durante la prenotazione.");
  });
}

function cancelUserReservation(fieldName, slot) {
  const date = currentReservationDate;
  if (reservations[fieldName][date][slot] === currentUser) {
    deleteReservationFromFirestore(fieldName, date, slot, currentUser)
      .then(() => showNotification(`Prenotazione per ${fieldName} alle ${slot} annullata.`))
      .catch(err => {
        console.error("Errore durante la cancellazione:", err);
        showNotification("Errore durante la cancellazione.");
      });
  } else {
    showNotification('Non puoi cancellare la prenotazione di un altro utente.');
  }
}

/***********************
 *  FUNZIONI ADMINISTRATIVE (includi opzioni per modificare i crediti degli utenti)
 ***********************/
function populateAdminTable() {
  const date = currentReservationDate;
  const tbody = document.getElementById('admin-table');
  tbody.innerHTML = '';
  for (let field in reservations) {
    if (reservations[field][date]) {
      for (let time in reservations[field][date]) {
        const user = reservations[field][date][time];
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${field}</td>
          <td>${date}</td>
          <td>${time}</td>
          <td>${user}</td>
          <td>
            <button class="cancel-btn" onclick="deleteAdminReservation('${field}','${date}','${time}','${user}')">
              <i class="fas fa-trash-alt"></i> Elimina
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      }
    }
  }
}

function deleteAdminReservation(fieldName, date, time, user) {
  deleteReservationFromFirestore(fieldName, date, time, user)
    .then(() => showNotification(`Prenotazione per ${fieldName} alle ${time} dell'utente ${user} eliminata.`))
    .catch(err => {
      console.error('Errore durante la cancellazione:', err);
      showNotification("Errore durante la cancellazione.");
    });
}

function populateCredentialsTable() {
  const tbody = document.getElementById('credentials-table');
  tbody.innerHTML = '';
  db.collection("users").get().then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      const username = doc.id;
      const password = data.password ? data.password : (staticUsers[username] || "N/A");
      const credits = data.credits !== undefined ? data.credits : 0;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${username}</td>
        <td>${password}</td>
        <td>${data.disabled ? 'Disabilitato' : 'Attivo'} - Crediti: ${credits}</td>
        <td>
          <button onclick="toggleUserStatus('${username}', ${data.disabled})">
            <i class="fas ${data.disabled ? 'fa-toggle-off' : 'fa-toggle-on'}"></i>
            ${data.disabled ? 'Attiva' : 'Disattiva'}
          </button>
          <button onclick="modifyUserPassword('${username}')">
            <i class="fas fa-key"></i> Modifica Password
          </button>
          <button onclick="promptUpdateCredits('${username}')">
            <i class="fas fa-coins"></i> Aggiorna Crediti
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }).catch(err => console.error(err));
}

function toggleUserStatus(username, currentDisabled) {
  const newStatus = !currentDisabled;
  db.collection("users").doc(username).set({ disabled: newStatus }, { merge: true })
    .then(() => {
      populateCredentialsTable();
      showNotification(`Utente ${username} ${newStatus ? 'disabilitato' : 'attivato'}.`);
    })
    .catch(err => {
      console.error(err);
      showNotification("Errore durante l'aggiornamento dello stato.");
    });
}

function modifyUserPassword(username) {
  if (currentUser !== adminUsername) {
    showNotification("Non hai i permessi per modificare la password.");
    return;
  }
  const newPassword = prompt("Inserisci la nuova password per " + username + ":");
  if (!newPassword) return;
  db.collection("users").doc(username).set({ password: newPassword }, { merge: true })
    .then(() => {
      staticUsers[username] = newPassword;
      populateCredentialsTable();
      showNotification("Password aggiornata per " + username);
    })
    .catch(err => {
      console.error(err);
      showNotification("Errore durante l'aggiornamento della password.");
    });
}

// Funzione per aggiornare manualmente i crediti di un utente (inserita dall'admin)
function promptUpdateCredits(username) {
  if (currentUser !== adminUsername) {
    showNotification("Non hai i permessi per aggiornare i crediti.");
    return;
  }
  const input = prompt("Inserisci il nuovo valore di crediti per " + username + ":");
  if (input === null) return;
  const newCredits = parseInt(input);
  if (isNaN(newCredits)) {
    showNotification("Valore non valido.");
    return;
  }
  db.collection("users").doc(username).set({ credits: newCredits }, { merge: true })
    .then(() => {
      populateCredentialsTable();
      showNotification(`Crediti aggiornati per ${username}: ${newCredits}`);
    })
    .catch(err => {
      console.error("Errore aggiornamento crediti:", err);
      showNotification("Errore durante l'aggiornamento dei crediti.");
    });
}

/***********************
 *  SEZIONE NOTE & IMMAGINI ADMIN
 ***********************/
function loadAdminNotesRealtime() {
  db.collection("admin").doc("notes").onSnapshot(doc => {
    if (doc.exists) {
      const noteText = doc.data().text || "";
      document.getElementById("notes-content").textContent = noteText;
      if (currentUser === adminUsername) {
        document.getElementById("admin-notes").value = noteText;
      }
    } else {
      db.collection("admin").doc("notes").set({ text: "" });
      document.getElementById("notes-content").textContent = "";
    }
  });
}

function saveAdminNotes() {
  if (currentUser !== adminUsername) {
    showNotification("Non hai i permessi per modificare le note.");
    return;
  }
  const text = document.getElementById("admin-notes").value;
  db.collection("admin").doc("notes").set({ text })
    .catch(err => {
      console.error("Errore salvataggio note:", err);
      showNotification("Errore durante il salvataggio delle note.");
    });
}

function loadAdminImagesRealtime() {
  db.collection("admin").doc("images").onSnapshot(doc => {
    const container = document.getElementById("login-images-container");
    container.innerHTML = "";
    if (doc.exists) {
      const data = doc.data();
      for (let i = 1; i <= 10; i++) {
        const urlField = `image${i}URL`;
        const linkField = `image${i}Link`;
        const url = data[urlField] || "";
        const link = data[linkField] || "";
        if (url) {
          const a = document.createElement("a");
          a.href = link || "#";
          a.target = "_blank";
          const img = document.createElement("img");
          img.src = url;
          img.alt = `Immagine ${i}`;
          a.appendChild(img);
          container.appendChild(a);
        }
      }
      if (currentUser === adminUsername) {
        for (let i = 1; i <= 10; i++) {
          document.getElementById(`image${i}URL`).value = data[`image${i}URL`] || "";
          document.getElementById(`image${i}Link`).value = data[`image${i}Link`] || "";
        }
      }
    } else {
      const initialData = {};
      for (let i = 1; i <= 10; i++) {
        initialData[`image${i}URL`] = "";
        initialData[`image${i}Link`] = "";
      }
      db.collection("admin").doc("images").set(initialData);
    }
  });
}

function saveAdminImages() {
  if (currentUser !== adminUsername) {
    showNotification("Non hai i permessi per modificare le immagini.");
    return;
  }
  const payload = {};
  for (let i = 1; i <= 10; i++) {
    payload[`image${i}URL`] = document.getElementById(`image${i}URL`).value.trim();
    payload[`image${i}Link`] = document.getElementById(`image${i}Link`).value.trim();
  }
  db.collection("admin").doc("images").set(payload)
    .then(() => {
      showNotification("Immagini salvate con successo.");
    })
    .catch(err => {
      console.error("Errore salvataggio immagini:", err);
      showNotification("Errore durante il salvataggio delle immagini.");
    });
}

/***********************
 *  FUNZIONI VARIE
 ***********************/
function toggleSections(isLoggedIn) {
  document.getElementById('login-area').style.display = isLoggedIn ? 'none' : 'flex';
  document.getElementById('app-area').style.display = isLoggedIn ? 'flex' : 'none';
}

function toggleAdminSection() {
  const adminSection = document.getElementById('admin-area');
  adminSection.style.display = (currentUser === adminUsername) ? 'block' : 'none';
  const adminNotes = document.getElementById('admin-notes');
  if (currentUser === adminUsername) {
    adminNotes.style.display = 'block';
    adminNotes.addEventListener('input', saveAdminNotes);
  } else {
    adminNotes.style.display = 'none';
    adminNotes.removeEventListener('input', saveAdminNotes);
  }
}

function checkAndResetAfterSevenFifty() {
  const lastResetDate = localStorage.getItem('lastResetDate');
  const today = getTodayDate();
  const now = new Date();
  if (lastResetDate !== today && now.getHours() >= 10) {
    resetAllReservations();
    localStorage.setItem('lastResetDate', today);
  }
}

function resetAllReservations() {
  const today = getTodayDate();
  db.collection("reservations")
    .where("date", "<", today)  // Cancella prenotazioni passate
    .get()
    .then(snapshot => {
      const batch = db.batch();
      snapshot.forEach(doc => {
        const data = doc.data();
        if (data.user !== adminUsername) {
          batch.delete(doc.ref);
        }
      });
      return batch.commit();
    })
    .then(() => {
      showNotification("Prenotazioni passate cancellate.");
      loadReservationsFromFirestore();
    })
    .catch(err => {
      console.error("Errore durante il reset:", err);
      showNotification("Errore durante il reset delle prenotazioni.");
    });
}

/***********************
 *  INIZIALIZZAZIONE
 ***********************/
document.addEventListener('DOMContentLoaded', () => {
  toggleSections(false);
  loadAdminImagesRealtime();
});

/***********************
 *  PULIZIA PRENOTAZIONI PASSATE
 ***********************/
async function pulisciPrenotazioni() {
  const today = getTodayDate();
  try {
    const snapshot = await db.collection("reservations").get();
    snapshot.forEach(async doc => {
      const reservationDate = doc.data().date;
      if (reservationDate < today) {
        await db.collection("reservations").doc(doc.id).delete();
        console.log(`Prenotazione ${doc.id} eliminata.`);
      }
    });
  } catch (error) {
    console.error("Errore nella pulizia delle prenotazioni:", error);
  }
}
pulisciPrenotazioni();
