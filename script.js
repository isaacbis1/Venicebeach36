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

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/***********************
 *  VARIABILI GLOBALI
 ***********************/
let currentUser = null;
const adminUsername = "admin";
const adminPassword = "passwordAdmin";

// Elenco degli utenti statici (aggiungi quelli necessari)
let staticUsers = {
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
  "08:00", "08:45", "09:30", "10:15",
  "11:00", "11:45", "12:30", "13:15",
  "14:00", "14:45", "15:30", "16:15",
  "17:00", "17:45", "18:30", "19:15",
  "20:00"
];

let reservations = {
  "BeachVolley": {},
  "Calcio": {},
  "Multi": {}
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

function getSelectedDate() {
  const datePicker = document.getElementById('booking-date');
  return datePicker && datePicker.value ? datePicker.value : getTodayDate();
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
 *  GESTIONE CREDITI - LISTENER REALTIME
 ***********************/
let userCreditsListenerUnsubscribe = null;
function startUserCreditsListener() {
  if (!currentUser) return;
  if (userCreditsListenerUnsubscribe) userCreditsListenerUnsubscribe();
  userCreditsListenerUnsubscribe = db.collection("users").doc(currentUser)
    .onSnapshot(doc => {
      if (doc.exists) {
        const credits = doc.data().credits !== undefined ? doc.data().credits : 0;
        document.getElementById("user-credits").textContent = `Crediti: ${credits}`;
      }
    });
}

function updateUserCreditsUI() {
  if (!currentUser) return;
  db.collection("users").doc(currentUser).get().then(doc => {
    if (doc.exists) {
      const credits = doc.data().credits !== undefined ? doc.data().credits : 0;
      document.getElementById("user-credits").textContent = `Crediti: ${credits}`;
    }
  });
}

let adminCreditsListenerUnsubscribe = null;
function startAdminCreditsListener() {
  const tbody = document.getElementById('credits-table');
  if (!tbody) return;
  if (adminCreditsListenerUnsubscribe) adminCreditsListenerUnsubscribe();
  adminCreditsListenerUnsubscribe = db.collection("users").onSnapshot(snapshot => {
    tbody.innerHTML = '';
    snapshot.forEach(doc => {
      const data = doc.data();
      const username = doc.id;
      const credits = data.credits !== undefined ? data.credits : 0;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${username}</td>
        <td id="credits-${username}">${credits}</td>
        <td>
          <button onclick="modifyUserCredits('${username}', 1)">Aggiungi Credito</button>
          <button onclick="modifyUserCredits('${username}', -1)">Sottrai Credito</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function modifyUserCredits(username, delta) {
  const userRef = db.collection("users").doc(username);
  userRef.get().then(doc => {
    let credits = doc.data().credits !== undefined ? doc.data().credits : 0;
    let newCredits = credits + delta;
    if (newCredits < 0) newCredits = 0;
    userRef.update({ credits: newCredits })
      .then(() => {
        showNotification(`Crediti aggiornati per ${username}: ${newCredits}`);
      });
  });
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
  
  // Carica le immagini nell'area app per TUTTI gli utenti
  loadAppImages();
  
  startUserCreditsListener();
  updateUserCreditsUI();
  if (currentUser === adminUsername) {
    startAdminCreditsListener();
  }
}

function authenticateStaticUser(username, password) {
  db.collection("users").doc(username).get().then(doc => {
    let storedPassword = staticUsers[username];
    let credits = 0;
    if (doc.exists && doc.data().password) {
      storedPassword = doc.data().password;
      if (doc.data().credits !== undefined) {
        credits = doc.data().credits;
      } else {
        db.collection("users").doc(username).update({ credits: credits });
      }
    }
    const disabled = doc.exists ? doc.data().disabled : false;
    if (disabled) {
      showNotification("Questo utente è disabilitato.");
      return;
    }
    if (storedPassword === password) {
      currentUser = username;
      if (!doc.exists) {
        db.collection("users").doc(username).set({ password: staticUsers[username], disabled: false, role: "user", credits: credits });
      }
      toggleSections(true);
      toggleAdminSection();
      loadReservationsFromFirestore();
      checkAndResetAfterSevenFifty();
      showNotification(`Benvenuto, ${username}!`);
      document.getElementById("pay-booking-container").style.display = "block";
      loadAdminNotesRealtime();
      loadAdminImagesRealtime();
      startUserCreditsListener();
      updateUserCreditsUI();
      
      // Carica le immagini nell'area app anche per utenti statici
      loadAppImages();
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
  if (userCreditsListenerUnsubscribe) userCreditsListenerUnsubscribe();
  if (adminCreditsListenerUnsubscribe) adminCreditsListenerUnsubscribe();
  toggleSections(false);
  showNotification("Sei uscito con successo.");
}

/***********************
 *  FIRESTORE - PRENOTAZIONI
 ***********************/
function loadReservationsFromFirestore() {
  const selectedDate = getSelectedDate();
  reservations = { "BeachVolley": {}, "Calcio": {}, "Multi": {} };

  db.collection("reservations")
    .where("date", "==", selectedDate)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const { field, time, user } = doc.data();
        if (!reservations[field][selectedDate]) reservations[field][selectedDate] = {};
        reservations[field][selectedDate][time] = user;
      });
      populateAllFields();
      listenRealtimeForDate(selectedDate);
    })
    .catch(err => {
      console.error("Errore caricamento prenotazioni:", err);
      showNotification("Errore caricamento prenotazioni.");
    });
}

function listenRealtimeForDate(selectedDate) {
  db.collection("reservations")
    .where("date", "==", selectedDate)
    .onSnapshot(snapshot => {
      reservations = { "BeachVolley": {}, "Calcio": {}, "Multi": {} };
      snapshot.forEach(doc => {
        const { field, time, user } = doc.data();
        if (!reservations[field][selectedDate]) reservations[field][selectedDate] = {};
        reservations[field][selectedDate][time] = user;
      });
      populateAllFields();
      populateAdminTable();
      if (currentUser === adminUsername) {
         populateCredentialsTable();
         startAdminCreditsListener();
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
 *  FUNZIONI UTILITY AGGIUNTIVE
 ***********************/
async function getUserTotalReservations() {
  if (!currentUser) return 0;
  try {
    const snapshot = await db.collection("reservations")
      .where("user", "==", currentUser)
      .get();
    console.log("Prenotazioni totali per", currentUser, ":", snapshot.size);
    return snapshot.size;
  } catch (error) {
    console.error("Errore nel conteggio delle prenotazioni:", error);
    showNotification("Errore nel conteggio delle prenotazioni.");
    return 0;
  }
}

/***********************
 *  GESTIONE PRENOTAZIONI & UI
 ***********************/
function populateAllFields() {
  ["BeachVolley", "Calcio", "Multi"].forEach(field => populateFieldSlots(field));
}

function populateFieldSlots(fieldName) {
  const selectedDate = getSelectedDate();
  const container = document.getElementById(`slots-${fieldName}`);
  if (!reservations[fieldName][selectedDate]) reservations[fieldName][selectedDate] = {};
  container.innerHTML = '';
  timeSlots.forEach(slot => {
    const slotDiv = document.createElement('div');
    slotDiv.classList.add('slot');
    const bookedBy = reservations[fieldName][selectedDate][slot];
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

function saveReservation(fieldName, date, slot) {
  saveReservationToFirestore(fieldName, date, slot, currentUser, (currentUser === adminUsername ? "admin" : "user"))
    .then(() => {
      if (currentUser !== adminUsername) {
        db.collection("users").doc(currentUser).get().then(doc => {
          let currentCredits = doc.data().credits || 0;
          if (currentCredits > 0) {
            db.collection("users").doc(currentUser).update({
              credits: firebase.firestore.FieldValue.increment(-1)
            }).then(() => updateUserCreditsUI());
          } else {
            showNotification("Non hai crediti sufficienti. Il credito non è stato decrementato.");
            return;
          }
        });
      }
      showNotification(`Prenotazione salvata per ${fieldName} alle ${slot}`);
    })
    .catch(err => {
      console.error("Errore salvataggio prenotazione:", err);
      showNotification("Errore nel salvataggio della prenotazione.");
    });
}

function bookSlot(fieldName, slot) {
  if (!currentUser) return;
  const selectedDate = getSelectedDate();
  if (currentUser === adminUsername) {
    saveReservation(fieldName, selectedDate, slot);
    return;
  }
  db.collection("users").doc(currentUser).get().then(doc => {
    let credits = doc.data().credits || 0;
    if (credits <= 0) {
      showNotification("Non hai crediti sufficienti.");
      return;
    }
    getUserTotalReservations().then(total => {
      if (total >= 2) {
        showNotification("Hai già raggiunto il numero massimo di prenotazioni (2).");
        return;
      }
      saveReservation(fieldName, selectedDate, slot);
    }).catch(error => {
      console.error("Errore nel conteggio delle prenotazioni:", error);
      showNotification("Errore nel conteggio delle prenotazioni.");
    });
  }).catch(error => {
    console.error("Errore nel controllo dei crediti:", error);
    showNotification("Errore nel controllo dei crediti.");
  });
}

function cancelUserReservation(fieldName, slot) {
  const selectedDate = getSelectedDate();
  const today = getTodayDate();
  db.collection("reservations")
    .where("user", "==", currentUser)
    .where("field", "==", fieldName)
    .where("time", "==", slot)
    .where("date", "==", selectedDate)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        db.collection("reservations").doc(doc.id).delete().then(() => {
          showNotification(`Prenotazione annullata per ${fieldName} alle ${slot} del ${selectedDate}`);
          if (selectedDate > today) {
            db.collection("users").doc(currentUser).update({
              credits: firebase.firestore.FieldValue.increment(1)
            }).then(() => updateUserCreditsUI());
          }
        });
      });
    });
}

/***********************
 *  FUNZIONI ADMINISTRATIVE
 ***********************/
function populateAdminTable() {
  const selectedDate = getSelectedDate();
  const tbody = document.getElementById('admin-table');
  tbody.innerHTML = '';
  for (let field in reservations) {
    if (reservations[field][selectedDate]) {
      for (let time in reservations[field][selectedDate]) {
        const user = reservations[field][selectedDate][time];
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${field}</td>
          <td>${selectedDate}</td>
          <td>${time}</td>
          <td>${user}</td>
          <td>
            <button class="cancel-btn" onclick="deleteAdminReservation('${field}','${selectedDate}','${time}','${user}')">
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
  if (!tbody) return;
  db.collection("users").onSnapshot(snapshot => {
    tbody.innerHTML = '';
    snapshot.forEach(doc => {
      const data = doc.data();
      const username = doc.id;
      const password = data.password ? data.password : (staticUsers[username] || "N/A");
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
          <button onclick="modifyUserPassword('${username}')">
            <i class="fas fa-key"></i> Modifica Password
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  });
}

/***********************
 *  SEZIONE NOTE ADMIN
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

/***********************
 *  SEZIONE IMMAGINI ADMIN (PERMANENTE)
 ***********************/
function loadAdminImagesRealtime() {
  db.collection("admin").doc("images").onSnapshot(doc => {
    const container = document.getElementById("login-images-container");
    container.innerHTML = "";
    if (doc.exists) {
      const data = doc.data();
      // Carica immagini 1-8
      for (let i = 1; i <= 8; i++) {
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
          container.appendChild(a);
          a.appendChild(img);
        }
      }
      
      // Inserisce l'elemento header per il break con la scritta "Benvenuto"
      const headerDiv = document.createElement("div");
      headerDiv.className = "login-header";
      headerDiv.innerText = "Benvenuto";
      container.appendChild(headerDiv);
      
      // Carica immagini 9-12 in fila
      for (let i = 9; i <= 12; i++) {
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
          container.appendChild(a);
          a.appendChild(img);
        }
      }
      
      if (currentUser === adminUsername) {
        for (let i = 1; i <= 12; i++) {
          const urlElem = document.getElementById(`image${i}URL`);
          const linkElem = document.getElementById(`image${i}Link`);
          if (urlElem && linkElem) {
            urlElem.value = data[`image${i}URL`] || "";
            linkElem.value = data[`image${i}Link`] || "";
          }
        }
      }
    } else {
      const initialData = {};
      for (let i = 1; i <= 12; i++) {
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
  for (let i = 1; i <= 12; i++) {
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
 *  CARICAMENTO IMMAGINI NELL'AREA APP (per admin e utenti)
 ***********************/
function loadAppImages() {
  db.collection("admin").doc("images").onSnapshot(doc => {
    const container = document.getElementById("app-images-container");
    if (!container) {
      console.error("Container 'app-images-container' non trovato!");
      return;
    }
    container.innerHTML = "";
    
    // Inserisci la scritta "Clicca e utilizza questo codice sconto:CAMPI3%" sopra le immagini
    const header = document.createElement("div");
    header.className = "app-images-header";
    header.innerText = "Clicca e utilizza questo codice sconto:CAMPI3%";
    container.appendChild(header);
    
    if (doc.exists) {
      const data = doc.data();
      // Carica le immagini dalla 1 alla 8
      for (let i = 1; i <= 8; i++) {
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
    } else {
      // Se il documento non esiste, crealo con dati iniziali (campi vuoti per image1-8)
      const initialData = {};
      for (let i = 1; i <= 8; i++) {
        initialData[`image${i}URL`] = "";
        initialData[`image${i}Link`] = "";
      }
      db.collection("admin").doc("images").set(initialData)
        .then(() => console.log("Documento 'images' creato con dati iniziali"))
        .catch(err => console.error("Errore nella creazione del documento 'images':", err));
    }
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
    .where("date", "==", today)
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
  toggleSections(false);
  loadAdminImagesRealtime();
  const today = getTodayDate();
  const datePicker = document.getElementById('booking-date');
  if (datePicker) {
    datePicker.value = today;
    datePicker.min = today;
    datePicker.addEventListener('change', () => {
      loadReservationsFromFirestore();
    });
  }
});
