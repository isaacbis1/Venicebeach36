/***********************
 *  DISABILITA TASTO DESTRO E SCORCIATOIE
 ***********************/
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

document.addEventListener('keydown', (event) => {
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
 *  CONFIGURAZIONE FIREBASE
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

// Inizializzazione Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/***********************
 *  VARIABILI GLOBALI
 ***********************/
let currentUser = null;
const adminUsername = "admin";
const adminPassword = "passwordAdmin";

// Sostituisci con i tuoi user e relative password
const staticUsers = {
"admin": adminPassword,

  "user001": "jcne",

  "user002": "hoyw",

  "user003": "xqal",

  "user004": "ekvn",

  "user005": "msyo",

  "user006": "zfil",

  "user007": "rbte",

  "user008": "pwxa",

  "user009": "nkcv",

  "user010": "gdmu",

  "user011": "lxqp",

  "user012": "tefz",

  "user013": "vukn",

  "user014": "ywqc",

  "user015": "joax",

  "user016": "heml",

  "user017": "dpuz",

  "user018": "scnv",

  "user019": "ytak",

  "user020": "fgxr",

  "user021": "qvlm",

  "user022": "unyt",

  "user023": "bzio",

  "user024": "wpkd",

  "user025": "oyfj",

  "user026": "mevl",

  "user027": "akpf",

  "user028": "cznx",

  "user029": "bluo",

  "user030": "xhvt",

  "user031": "jcrw",

  "user032": "pkaz",

  "user033": "twne",

  "user034": "dqmh",

  "user035": "vsjo",

  "user036": "nzfk",

  "user037": "grya",

  "user038": "ojbw",

  "user039": "lmqd",

  "user040": "ykvr",

  "user041": "cnhx",

  "user042": "fqzm",

  "user043": "vlpu",

  "user044": "eznf",

  "user045": "tjya",

  "user046": "owrb",

  "user047": "mnqd",

  "user048": "kzwp",

  "user049": "prfv",

  "user050": "hxla",

  "user051": "dyuk",

  "user052": "bzcn",

  "user053": "lxem",

  "user054": "vqwd",

  "user055": "ajok",

  "user056": "pcmn",

  "user057": "nzhl",

  "user058": "tfkr",

  "user059": "kmyv",

  "user060": "owfz",

  "user061": "rljq",

  "user062": "vewu",

  "user063": "ytai",

  "user064": "qlkr",

  "user065": "xpdn",

  "user066": "mvzu",

  "user067": "ojwr",

  "user068": "teln",

  "user069": "fqzy",

  "user070": "blmc",

  "user071": "hrtk",

  "user072": "dngv",

  "user073": "paum",

  "user074": "wvkc",

  "user075": "xroa",

  "user076": "jlwn",

  "user077": "eykv",

  "user078": "czpj",

  "user079": "oltd",

  "user080": "urfb",

  "user081": "nvce",

  "user082": "jxow",

  "user083": "bqyn",

  "user084": "zmpa",

  "user085": "wfuz",

  "user086": "oejd",

  "user087": "hvri",

  "user088": "plnc",

  "user089": "dtwr",

  "user090": "qvjm",

  "user091": "zcyu",

  "user092": "frbl",

  "user093": "ektm",

  "user094": "wvpx",

  "user095": "ytlm",

  "user096": "oqfi",

  "user097": "vjwb",

  "user098": "akxe",

  "user099": "lmvt",

  "user100": "czqo",

  "user101": "ewnh",

  "user102": "obml",

  "user103": "pxkt",

  "user104": "vujr",

  "user105": "ydlf",

  "user106": "hnvz",

  "user107": "ekow",

  "user108": "wrfp",

  "user109": "xqtn",

  "user110": "ovmu",

  "user111": "jaly",

  "user112": "pcnz",

  "user113": "fwzr",

  "user114": "gtox",

  "user115": "dhqb",

  "user116": "rmvl",

  "user117": "kyuo",

  "user118": "epcd",

  "user119": "ojkf",

  "user120": "alnr",

  "user121": "tzvq",

  "user122": "fjwk",

  "user123": "xqoa",

  "user124": "dzrm",

  "user125": "wlfp",

  "user126": "vknc",

  "user127": "bzqh",

  "user128": "amol",

  "user129": "fvrj",

  "user130": "kdzx",

  "user131": "njcv",

  "user132": "xyal",

  "user133": "tpdz",

  "user134": "rfwb",

  "user135": "vlio",

  "user136": "ekqu",

  "user137": "jyzf",

  "user138": "woan",

  "user139": "lvpk",

  "user140": "ufcz",

  "user141": "mdhx",

  "user142": "ybrn",

  "user143": "qtoi",

  "user144": "kpva",

  "user145": "ofzx",

  "user146": "ajqw",

  "user147": "tnyr",

  "user148": "wlpc",

  "user149": "zfxb",

  "user150": "hcrj",

  "user151": "dbto",

  "user152": "nzrl",

  "user153": "wtvy",

  "user154": "clmo",

  "user155": "pvew",

  "user156": "ofqn",

  "user157": "xdlj",

  "user158": "bzvr",

  "user159": "jufq",

  "user160": "womn",

  "user161": "hqzl",

  "user162": "eytn",

  "user163": "rwkx",

  "user164": "vlpu",

  "user165": "dtno",

  "user166": "azmf",

  "user167": "cwrx",

  "user168": "ynol",

  "user169": "pjku",

  "user170": "hfxr",

  "user171": "ymzd",

  "user172": "qvtk",

  "user173": "owrf",

  "user174": "elpn",

  "user175": "tdmz",

  "user176": "jbvo",

  "user177": "kfwr",

  "user178": "plqm",

  "user179": "xzno",

  "user180": "uvlw",

  "user181": "djyx",

  "user182": "cfpz",

  "user183": "mqvi",

  "user184": "rwtn",

  "user185": "kpzl",

  "user186": "fqad",

  "user187": "lyvo",

  "user188": "hpxc",

  "user189": "wnzt",

  "user190": "ojfq",

  "user191": "zmva",

  "user192": "drky",

  "user193": "wlcp",

  "user194": "bntz",

  "user195": "ovjr",

  "user196": "fqzx",

  "user197": "nxom",

  "user198": "pklc",

  "user199": "xvqw",

  "user200": "drmf"

};


/***********************
 *  TIME SLOTS & RESERVATIONS
 ***********************/
const timeSlots = [
  "11:00", "11:45",
  "12:30", "13:15",
  "14:00", "14:45",
  "15:30", "16:15",
  "17:00", "17:45",
  "18:30", "19:15",
  "20:00", "20:45"
];

let reservations = {
  "Volley1": {},
  "Volley2": {},
  "BasketCalcio": {},
  "Ping-pong": {}
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
 *  LOGIN & LOGOUT
 ***********************/
function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    showNotification('Inserisci username e password.');
    return;
  }

  // Se admin
  if (username === adminUsername && password === adminPassword) {
    authenticateUser(username);
  } else {
    // Altrimenti cerca in staticUsers
    authenticateStaticUser(username, password);
  }
}

function authenticateUser(username) {
  currentUser = username;
  toggleSections(true);
  toggleAdminSection();
  loadReservationsFromFirestore();
  checkAndResetAfterTen();
  showNotification(`Benvenuto, ${username}!`);

  // Carica note e immagini in real-time
  loadAdminNotesRealtime();
  loadAdminImagesRealtime();
}

function authenticateStaticUser(username, password) {
  if (staticUsers[username] && staticUsers[username] === password) {
    // Controlla se l'utente è disabilitato in Firestore
    db.collection("users").doc(username).get().then(doc => {
      const disabled = doc.exists ? doc.data().disabled : false;
      if (disabled) {
        showNotification("Questo utente è disabilitato.");
        return;
      }
      currentUser = username;
      toggleSections(true);
      toggleAdminSection();
      loadReservationsFromFirestore();
      checkAndResetAfterTen();
      showNotification(`Benvenuto, ${username}!`);

      // Carica note e immagini in real-time
      loadAdminNotesRealtime();
      loadAdminImagesRealtime();
    }).catch(err => {
      console.error(err);
      showNotification("Errore durante il login.");
    });
  } else {
    showNotification("Credenziali errate!");
  }
}

function logout() {
  currentUser = null;
  toggleSections(false);
  showNotification("Sei uscito con successo.");
}

/***********************
 *  FIRESTORE - PRENOTAZIONI
 ***********************/
function loadReservationsFromFirestore() {
  const today = getTodayDate();
  reservations = { "Volley1": {}, "Volley2": {}, "BasketCalcio": {}, "Ping-pong": {} };

  db.collection("reservations")
    .where("date", "==", today)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const { field, time, user } = doc.data();
        if (!reservations[field][today]) reservations[field][today] = {};
        reservations[field][today][time] = user;
      });
      populateAllFields();
      listenRealtimeForToday(); // Ascolto in tempo reale
    })
    .catch(err => {
      console.error("Errore caricamento prenotazioni:", err);
      showNotification("Errore caricamento prenotazioni.");
    });
}

function listenRealtimeForToday() {
  const today = getTodayDate();
  db.collection("reservations")
    .where("date", "==", today)
    .onSnapshot(snapshot => {
      reservations = { "Volley1": {}, "Volley2": {}, "BasketCalcio": {}, "Ping-pong": {} };
      snapshot.forEach(doc => {
        const { field, time, user } = doc.data();
        if (!reservations[field][today]) reservations[field][today] = {};
        reservations[field][today][time] = user;
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
 *  GESTIONE PRENOTAZIONI & UI
 ***********************/
function userHasBookingToday() {
  const today = getTodayDate();
  for (let field in reservations) {
    if (reservations[field][today]) {
      for (let slot in reservations[field][today]) {
        if (reservations[field][today][slot] === currentUser) {
          return true;
        }
      }
    }
  }
  return false;
}

function populateAllFields() {
  ["Volley1", "Volley2", "BasketCalcio", "Ping-pong"].forEach(field => populateFieldSlots(field));
}

function populateFieldSlots(fieldName) {
  const today = getTodayDate();
  const container = document.getElementById(`slots-${fieldName}`);
  if (!reservations[fieldName][today]) reservations[fieldName][today] = {};
  container.innerHTML = '';

  timeSlots.forEach(slot => {
    const slotDiv = document.createElement('div');
    slotDiv.classList.add('slot');
    const bookedBy = reservations[fieldName][today][slot];

    if (bookedBy) {
      if (bookedBy === currentUser) {
        slotDiv.classList.add('my-booking');
        slotDiv.textContent = `${slot} - Prenotato da Te`;
        slotDiv.onclick = () => cancelUserReservation(fieldName, slot);
      } else {
        slotDiv.classList.add('unavailable');
        slotDiv.textContent = `${slot} - Prenotato`;
      }
    } else {
      slotDiv.classList.add('available');
      slotDiv.textContent = `${slot} - Disponibile`;
      slotDiv.onclick = () => bookSlot(fieldName, slot);
    }
    container.appendChild(slotDiv);
  });
}

function bookSlot(fieldName, slot) {
  const today = getTodayDate();
  // Evita doppia prenotazione se non admin
  if (currentUser !== adminUsername && userHasBookingToday()) {
    showNotification('Hai già effettuato una prenotazione per oggi.');
    return;
  }
  // Se già prenotato
  if (reservations[fieldName][today][slot]) {
    showNotification('Questo slot è già prenotato.');
    return;
  }
  // Salviamo su Firestore
  db.collection("users").doc(currentUser).get().then(doc => {
    const role = doc.exists ? doc.data().role : "user";
    saveReservationToFirestore(fieldName, today, slot, currentUser, role)
      .then(() => showNotification(`Prenotazione effettuata: ${fieldName} alle ${slot}`))
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
  const today = getTodayDate();
  if (reservations[fieldName][today][slot] === currentUser) {
    deleteReservationFromFirestore(fieldName, today, slot, currentUser)
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
 *  FUNZIONI ADMINISTRATIVE
 ***********************/
function populateAdminTable() {
  const today = getTodayDate();
  const tbody = document.getElementById('admin-table');
  tbody.innerHTML = '';
  for (let field in reservations) {
    if (reservations[field][today]) {
      for (let time in reservations[field][today]) {
        const user = reservations[field][today][time];
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${field}</td>
          <td>${today}</td>
          <td>${time}</td>
          <td>${user}</td>
          <td>
            <button class="cancel-btn" onclick="deleteAdminReservation('${field}','${today}','${time}','${user}')">
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
      const password = staticUsers[username] || "N/A";
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${username}</td>
        <td>${password}</td>
        <td>${data.disabled ? 'Disabilitato' : 'Attivo'}</td>
        <td>
          <button onclick="toggleUserStatus('${username}', ${data.disabled})">
            <i class="fas ${data.disabled ? 'fa-toggle-off' : 'fa-toggle-on'}"></i>
            ${data.disabled ? 'Attiva' : 'Disattiva'}
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

/***********************
 *  SEZIONE NOTE ADMIN
 ***********************/
// Caricamento in tempo reale
function loadAdminNotesRealtime() {
  db.collection("admin").doc("notes").onSnapshot(doc => {
    if (doc.exists) {
      const noteText = doc.data().text || "";
      // Aggiorniamo il <p> (visibile a tutti)
      document.getElementById("notes-content").textContent = noteText;

      // Se l'utente è admin, aggiorniamo la textarea
      if (currentUser === adminUsername) {
        const adminNotes = document.getElementById("admin-notes");
        adminNotes.value = noteText;
      }
    } else {
      // Creiamo il doc se non esiste
      db.collection("admin").doc("notes").set({ text: "" });
      document.getElementById("notes-content").textContent = "";
    }
  });
}

// Salvataggio automatico mentre l'admin digita
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

/***********************
 *  SEZIONE IMMAGINI ADMIN (max 10)
 ***********************/
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

      // Se admin, riempiamo i campi input
      if (currentUser === adminUsername) {
        for (let i = 1; i <= 10; i++) {
          document.getElementById(`image${i}URL`).value = data[`image${i}URL`] || "";
          document.getElementById(`image${i}Link`).value = data[`image${i}Link`] || "";
        }
      }
    } else {
      // Creiamo il documento images se non esiste
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

  // Mostra/occulta la textarea delle note per admin
  const adminNotes = document.getElementById('admin-notes');
  if (currentUser === adminUsername) {
    adminNotes.style.display = 'block';
    // Ascolta l'input e salva in automatico
    adminNotes.addEventListener('input', saveAdminNotes);
  } else {
    adminNotes.style.display = 'none';
    adminNotes.removeEventListener('input', saveAdminNotes);
  }
}

/**
 * Il reset quotidiano dopo le 10 NON elimina le note,
 * ma solo le prenotazioni degli utenti (tranne admin).
 */
function checkAndResetAfterTen() {
  const lastResetDate = localStorage.getItem('lastResetDate');
  const today = getTodayDate();
  const now = new Date();

  // Esegui reset se non è stato fatto oggi e se l'ora >= 10
  if (lastResetDate !== today && now.getHours() >= 10) {
    resetAllReservations();
    localStorage.setItem('lastResetDate', today);
  }
}

function resetAllReservations() {
  const today = getTodayDate();
  db.collection("reservations")
    .where("date", "==", today)
    .get()
    .then(snapshot => {
      const batch = db.batch();
      snapshot.forEach(doc => {
        const data = doc.data();
        // Non eliminiamo prenotazioni dell'admin
        if (data.user !== adminUsername) {
          batch.delete(doc.ref);
        }
      });
      return batch.commit();
    })
    .then(() => {
      showNotification("Prenotazioni resettate per il nuovo giorno.");
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
  // Mostra la pagina di login, nascondi l'app
  toggleSections(false);

  // Carichiamo subito le immagini (anche per la homepage di login)
  loadAdminImagesRealtime();
});
