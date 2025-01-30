/***********************
 *  CONFIGURAZIONE FIREBASE
 ************************/
const firebaseConfig = {
  apiKey: "AIzaSyBivERuJvrO947t2Idv8DM3gZyfuqEQahw",
  authDomain: "campi-414b4.firebaseapp.com",
  projectId: "campi-414b4",
  storageBucket: "campi-414b4.firebasestorage.app",
  messagingSenderId: "985324700492",
  appId: "1:985324700492:web:b8cb569e83bb2e24ed85e9",
  measurementId: "G-3W0ZKB4S5Q"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/*****************************************/

/* Variabili Globali */
let currentUser = null;
const adminUsername = "admin";
const adminPassword = "passwordAdmin";

/* Hardcoded static users con password fisse per 200 utenti */
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

/*******************************************************
 *  FUNZIONI UTILITY E DI LOGIN
 ******************************************************/

/**
 * Ottiene la data odierna nel formato YYYY-MM-DD
 */
function getTodayDate() {
  const today = new Date();
  let yyyy = today.getFullYear();
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Mostra una notifica personalizzata
 * @param {string} message - Il messaggio da mostrare nella notifica
 */
function showNotification(message) {
  const container = document.getElementById('notification-container');
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;
  container.appendChild(notification);

  // Rimuove la notifica dopo 3 secondi
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

/**
 * Funzione di login
 */
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

/**
 * Autentica un utente amministratore
 * @param {string} username - L'username dell'utente
 */
function authenticateUser(username) {
  currentUser = username;
  toggleSections(true);
  toggleAdminSection();
  loadReservationsFromFirestore();
  // loadCombinedNote(); // Rimosso per mantenere i campi vuoti
  populateCredentialsTable();
  checkAndResetAfterTen();
  showNotification(`Benvenuto, ${username}!`);
}

/**
 * Autentica un utente statico
 * @param {string} username - L'username dell'utente
 * @param {string} password - La password dell'utente
 */
function authenticateStaticUser(username, password) {
  if (staticUsers[username] && staticUsers[username] === password) {
    db.collection("users").doc(username).get().then(doc => {
      let disabled = false;
      if (doc.exists) {
        disabled = doc.data().disabled;
      }
      if (disabled) {
        showNotification("Questo utente è disabilitato.");
        return;
      }
      currentUser = username;
      toggleSections(true);
      toggleAdminSection();
      loadReservationsFromFirestore();
      // loadCombinedNote(); // Rimosso per mantenere i campi vuoti
      checkAndResetAfterTen();
      showNotification(`Benvenuto, ${username}!`);
    }).catch(err => {
      console.error(err);
      showNotification("Errore durante il login.");
    });
  } else {
    showNotification("Credenziali errate!");
  }
}

/**
 * Funzione di logout
 */
function logout() {
  currentUser = null;
  toggleSections(false);
  showNotification("Sei uscito con successo.");
}

/*******************************************************
 *  FUNZIONI FIRESTORE
 ******************************************************/

/**
 * Carica le prenotazioni dal Firestore
 */
function loadReservationsFromFirestore() {
  const today = getTodayDate();
  reservations = {
    "Volley1": {},
    "Volley2": {},
    "BasketCalcio": {},
    "Ping-pong": {}
  };

  db.collection("reservations")
    .where("date", "==", today)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const fieldName = data.field;
        const time = data.time;
        const user = data.user;

        if (!reservations[fieldName]) {
          reservations[fieldName] = {};
        }
        if (!reservations[fieldName][today]) {
          reservations[fieldName][today] = {};
        }
        reservations[fieldName][today][time] = user;
      });
      populateAllFields();
      listenRealtimeForToday();
    })
    .catch((err) => {
      console.error("Errore caricamento prenotazioni:", err);
      showNotification("Errore caricamento prenotazioni.");
    });
}

/**
 * Ascolta in tempo reale le modifiche alle prenotazioni di oggi
 */
function listenRealtimeForToday() {
  const today = getTodayDate();
  db.collection("reservations")
    .where("date", "==", today)
    .onSnapshot((snapshot) => {
      reservations = {
        "Volley1": {},
        "Volley2": {},
        "BasketCalcio": {},
        "Ping-pong": {}
      };
      snapshot.forEach((doc) => {
        const data = doc.data();
        const fieldName = data.field;
        const time = data.time;
        const user = data.user;

        if (!reservations[fieldName]) {
          reservations[fieldName] = {};
        }
        if (!reservations[fieldName][today]) {
          reservations[fieldName][today] = {};
        }
        reservations[fieldName][today][time] = user;
      });
      populateAllFields();
      populateAdminTable();
      if (currentUser === adminUsername) {
        populateCredentialsTable();
      }
    });
}

/**
 * Salva una prenotazione nel Firestore
 * @param {string} fieldName - Il nome del campo
 * @param {string} date - La data della prenotazione
 * @param {string} time - L'orario della prenotazione
 * @param {string} user - L'utente che effettua la prenotazione
 * @param {string} role - Il ruolo dell'utente
 * @returns {Promise}
 */
function saveReservationToFirestore(fieldName, date, time, user, role) {
  const docId = `${fieldName}_${date}_${time}_${user}`;
  return db.collection("reservations").doc(docId).set({
    field: fieldName,
    date: date,
    time: time,
    user: user,
    role: role
  });
}

/**
 * Elimina una prenotazione dal Firestore
 * @param {string} fieldName - Il nome del campo
 * @param {string} date - La data della prenotazione
 * @param {string} time - L'orario della prenotazione
 * @param {string} user - L'utente associato alla prenotazione
 * @returns {Promise}
 */
function deleteReservationFromFirestore(fieldName, date, time, user) {
  const docId = `${fieldName}_${date}_${time}_${user}`;
  return db.collection("reservations").doc(docId).delete();
}

/*******************************************************
 *  FUNZIONI DI GESTIONE PRENOTAZIONI E UI
 ******************************************************/

/**
 * Verifica se l'utente ha già una prenotazione oggi
 * @returns {boolean}
 */
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

/**
 * Popola tutti i campi con i loro slot
 */
function populateAllFields() {
  ["Volley1", "Volley2", "BasketCalcio", "Ping-pong"].forEach(field => {
    populateFieldSlots(field);
  });
}

/**
 * Popola gli slot di un campo specifico
 * @param {string} fieldName - Il nome del campo
 */
function populateFieldSlots(fieldName) {
  const today = getTodayDate();
  const container = document.getElementById(`slots-${fieldName}`);

  if (!reservations[fieldName][today]) {
    reservations[fieldName][today] = {};
  }

  container.innerHTML = '';

  timeSlots.forEach(slot => {
    const slotDiv = document.createElement('div');
    slotDiv.classList.add('slot');

    const bookedBy = reservations[fieldName][today][slot];

    if (bookedBy) {
      if (bookedBy === currentUser) {
        slotDiv.classList.add('my-booking');
        slotDiv.textContent = `${slot} - Prenotato da Te`;
        slotDiv.onclick = () => cancellaPrenotazioneUtente(fieldName, slot);
      } else {
        slotDiv.classList.add('unavailable');
        slotDiv.textContent = `${slot} - Prenotato`;
      }
    } else {
      slotDiv.classList.add('available');
      slotDiv.textContent = `${slot} - Disponibile`;
      slotDiv.onclick = () => prenotaSlot(fieldName, slot);
    }

    container.appendChild(slotDiv);
  });
}

/**
 * Prenota uno slot
 * @param {string} fieldName - Il nome del campo
 * @param {string} slot - L'orario dello slot
 */
function prenotaSlot(fieldName, slot) {
  const today = getTodayDate();

  if (currentUser !== adminUsername && userHasBookingToday()) {
    showNotification('Hai già effettuato una prenotazione per oggi.');
    return;
  }

  if (reservations[fieldName][today][slot]) {
    showNotification('Questo slot è già prenotato.');
    return;
  }

  // Recupera il ruolo dell'utente
  db.collection("users").doc(currentUser).get().then(doc => {
    const role = doc.exists ? doc.data().role : "user";

    saveReservationToFirestore(fieldName, today, slot, currentUser, role)
      .then(() => {
        showNotification(`Prenotazione effettuata: ${fieldName} alle ${slot}`);
      })
      .catch((err) => {
        console.error("Errore durante la prenotazione:", err);
        showNotification("Errore durante la prenotazione.");
      });
  }).catch(err => {
    console.error("Errore recupero ruolo utente:", err);
    showNotification("Errore durante la prenotazione.");
  });
}

/**
 * Cancella la propria prenotazione
 * @param {string} fieldName - Il nome del campo
 * @param {string} slot - L'orario dello slot
 */
function cancellaPrenotazioneUtente(fieldName, slot) {
  const today = getTodayDate();
  const bookedBy = reservations[fieldName][today][slot];
  if (bookedBy === currentUser) {
    deleteReservationFromFirestore(fieldName, today, slot, bookedBy)
      .then(() => {
        showNotification(`La tua prenotazione per ${fieldName} alle ${slot} è stata annullata.`);
      })
      .catch((err) => {
        console.error("Errore durante la cancellazione:", err);
        showNotification("Errore durante la cancellazione.");
      });
  } else {
    showNotification('Non puoi cancellare la prenotazione di un altro utente.');
  }
}

/*******************************************************
 *  FUNZIONI ADMINISTRATIVE
 ******************************************************/

/**
 * Popola la tabella delle prenotazioni nell'area admin
 */
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
          <td><button class="cancel-btn" onclick="deleteAdminReservation('${field}','${today}','${time}','${user}')"><i class="fas fa-trash-alt"></i> Elimina</button></td>
        `;
        tbody.appendChild(tr);
      }
    }
  }
}

/**
 * Elimina una prenotazione dall'admin
 * @param {string} fieldName - Il nome del campo
 * @param {string} date - La data della prenotazione
 * @param {string} time - L'orario della prenotazione
 * @param {string} user - L'utente associato alla prenotazione
 */
function deleteAdminReservation(fieldName, date, time, user) {
  deleteReservationFromFirestore(fieldName, date, time, user)
    .then(() => {
      showNotification(`La prenotazione per ${fieldName} alle ${time} dell'utente ${user} è stata cancellata.`);
    })
    .catch((err) => {
      console.error('Errore durante la cancellazione:', err);
      showNotification("Errore durante la cancellazione della prenotazione.");
    });
}

/*******************************************************
 *  FUNZIONI PER LA GESTIONE DELLE CREDENZIALI E STATUS UTENTI
 ******************************************************/

/**
 * Popola la tabella delle credenziali nell'area admin
 */
function populateCredentialsTable() {
  const tbody = document.getElementById('credentials-table');
  tbody.innerHTML = '';

  db.collection("users").get().then(snapshot => {
    snapshot.forEach(doc => {
      let data = doc.data();
      let username = doc.id;
      const password = staticUsers[username] || "N/A";
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${username}</td>
        <td>${password}</td>
        <td>${data.disabled ? 'Disabilitato' : 'Attivo'}</td>
        <td><button onclick="toggleUserStatus('${username}', ${data.disabled})"><i class="fas ${data.disabled ? 'fa-toggle-off' : 'fa-toggle-on'}"></i> ${data.disabled ? 'Attiva' : 'Disattiva'}</button></td>
      `;
      tbody.appendChild(tr);
    });
  }).catch(err => console.error(err));
}

/**
 * Toggle dello stato di un utente
 * @param {string} username - L'username dell'utente
 * @param {boolean} currentDisabled - Lo stato attuale dell'utente
 */
function toggleUserStatus(username, currentDisabled) {
  let newStatus = !currentDisabled;
  db.collection("users").doc(username).update({
    disabled: newStatus
  }).then(() => {
    populateCredentialsTable();
    showNotification(`Utente ${username} ${newStatus ? 'disabilitato' : 'attivato'} con successo.`);
  }).catch(err => {
    console.error(err);
    showNotification("Errore durante l'aggiornamento dello stato dell'utente.");
  });
}

/*******************************************************
 *  FUNZIONI PER GESTIRE LE NOTE COMBINATE
 ******************************************************/

/**
 * Salva la nota combinata su Firestore
 */
function saveCombinedNote() {
  const emailContent = document.getElementById('email-note-content').value.trim();
  const passwordContent = document.getElementById('password-note-content').value.trim();

  if (!emailContent || !passwordContent) {
    showNotification("Entrambi i campi Email e Password devono essere compilati.");
    return;
  }

  const combinedContent = `${emailContent} / ${passwordContent}`;

  const notesCollection = db.collection("notes");
  const docId = 'combinedNote';

  notesCollection.doc(docId).set({
    content: combinedContent
  }).then(() => {
    showNotification("Note salvate con successo.");
    // Svuota i campi dopo il salvataggio
    document.getElementById('email-note-content').value = "";
    document.getElementById('password-note-content').value = "";
  }).catch(err => {
    console.error(`Errore nell'aggiornamento della nota combinata:`, err);
    showNotification("Errore nell'aggiornamento delle note.");
  });
}

/*******************************************************
 *  FUNZIONI FIRESTORE IN TEMPO REALE
 ******************************************************/

/**
 * [REMOVED] Poiché non vogliamo caricare le note al refresh, questa funzione non è più necessaria.
 */
// function listenRealtimeCombinedNote() {
//   const notesCollection = db.collection("notes");

//   // Nota Combinata
//   notesCollection.doc("combinedNote").onSnapshot(doc => {
//     if (doc.exists) {
//       const combinedContent = doc.data().content;
//       // Supponiamo che il contenuto sia nel formato "email / password"
//       const parts = combinedContent.split('/');
//       if (parts.length === 2) {
//         document.getElementById('email-note-content').value = parts[0].trim();
//         document.getElementById('password-note-content').value = parts[1].trim();
//       }
//     }
//   });
// }

/*******************************************************
 *  FUNZIONI DI INIZIALIZZAZIONE
 ******************************************************/

/**
 * Funzione per inizializzare le note se non esistono
 */
function initializeNotes() {
  const notesCollection = db.collection("notes");
  
  notesCollection.doc("combinedNote").get().then(doc => {
    if (!doc.exists) {
      notesCollection.doc("combinedNote").set({ content: " / " });
    }
  });
}

/**
 * Mostra o nasconde le sezioni principali
 * @param {boolean} isLoggedIn - Se l'utente è loggato o meno
 */
function toggleSections(isLoggedIn) {
  document.getElementById('login-area').style.display = isLoggedIn ? 'none' : 'flex';
  document.getElementById('app-area').style.display = isLoggedIn ? 'flex' : 'none';
}

/**
 * Mostra o nasconde la sezione admin
 */
function toggleAdminSection() {
  const adminSection = document.getElementById('admin-area');
  if (currentUser === adminUsername) {
    adminSection.style.display = 'block';
  } else {
    adminSection.style.display = 'none';
  }
}

/**
 * Controlla e resetta le prenotazioni se necessario
 */
function checkAndResetAfterTen() {
  const lastResetDate = localStorage.getItem('lastResetDate');
  const today = getTodayDate();
  const now = new Date();

  // Resetta se non è già stato fatto oggi e sono passate le 10:00
  if (lastResetDate !== today && now.getHours() >= 10) {
    resetAllReservations();
    localStorage.setItem('lastResetDate', today);
  }
}

/**
 * Resetta tutte le prenotazioni eccetto quelle degli admin
 */
function resetAllReservations() {
  const today = getTodayDate();
  db.collection("reservations")
    .where("date", "==", today)
    .get()
    .then(snapshot => {
      const batch = db.batch();
      const adminUsers = [];

      // Recupera tutti gli utenti con ruolo admin
      return db.collection("users").where("role", "==", "admin").get().then(adminSnapshot => {
        adminSnapshot.forEach(doc => {
          adminUsers.push(doc.id);
        });

        // Elimina le prenotazioni non amministrative
        snapshot.forEach(doc => {
          const data = doc.data();
          if (!adminUsers.includes(data.user)) {
            batch.delete(doc.ref);
          }
        });

        return batch.commit();
      });
    })
    .then(() => {
      console.log("Prenotazioni resettate per il nuovo giorno, escluse quelle degli admin.");
      showNotification("Prenotazioni resettate per il nuovo giorno.");
      loadReservationsFromFirestore();
    })
    .catch(err => {
      console.error("Errore durante il reset delle prenotazioni:", err);
      showNotification("Errore durante il reset delle prenotazioni.");
    });
}

/**
 * Chiama le funzioni di inizializzazione all'avvio
 */
initializeNotes();

// Carica le note combinate
// loadCombinedNote(); // Rimosso per mantenere i campi vuoti

// Ascolta le modifiche in tempo reale
// listenRealtimeCombinedNote(); // Rimosso per mantenere i campi vuoti

// Popola le prenotazioni e le note in tempo reale
document.addEventListener('DOMContentLoaded', () => {
  populateAllFields();
  listenRealtimeForToday();
  // listenRealtimeCombinedNote(); // Rimosso per mantenere i campi vuoti
});
