/***********************
 * DISABILITA TASTO DESTRO E SCORCIATOIE
 ***********************/
document.addEventListener('contextmenu', evt => evt.preventDefault());
document.addEventListener('keydown', evt => {
  if (
    evt.key === "F12" ||
    (evt.ctrlKey && evt.shiftKey && evt.key === "I") ||
    (evt.ctrlKey && evt.key === "U") ||
    (evt.ctrlKey && evt.key === "S") ||
    (evt.ctrlKey && evt.key === "C")
  ) {
    evt.preventDefault();
    return false;
  }
});

/***********************
 * CONFIGURAZIONE FIREBASE
 ***********************/
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

/***********************
 * VARIABILI GLOBALI
 ***********************/
let currentUser = null;
let adminPassword = "passwordAdmin"; // Cambia se vuoi
const adminUsername = "admin";

// Dizionario 200 user + admin
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

/***********************
 * ON LOAD
 ***********************/
document.addEventListener('DOMContentLoaded', () => {
  toggleSections(false); // mostriamo solo login
  loadAdminImagesRealtime(); // carichiamo le immagini anche da non loggati
});

/***********************
 * FUNZIONI UTILITY
 ***********************/
function getTodayDate() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth()+1).padStart(2,'0');
  const dd = String(d.getDate()).padStart(2,'0');
  return `${yyyy}-${mm}-${dd}`;
}

function showNotification(msg) {
  const container = document.getElementById("notification-container");
  const div = document.createElement("div");
  div.className = "notification";
  div.textContent = msg;
  container.appendChild(div);
  setTimeout(() => div.remove(), 3000);
}

function toggleSections(isLogged) {
  document.getElementById("login-area").style.display = isLogged ? "none" : "flex";
  document.getElementById("app-area").style.display = isLogged ? "flex" : "none";
}

function toggleAdminSection() {
  const adminSec = document.getElementById("admin-area");
  if (!adminSec) return;
  adminSec.style.display = (currentUser === adminUsername) ? "block" : "none";
}

/***********************
 * LOGIN & LOGOUT
 ***********************/
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    showNotification("Inserisci username e password.");
    return;
  }

  if (!staticUsers[username]) {
    showNotification("Username inesistente nel dictionary!");
    return;
  }
  // se corrisponde
  if (staticUsers[username] === password) {
    // Se user = admin => admin
    if (username === adminUsername) {
      currentUser = adminUsername;
      showNotification("Accesso come admin!");
    } else {
      currentUser = username;
      showNotification("Benvenuto " + username + "!");
    }
    toggleSections(true);
    toggleAdminSection();
    loadReservationsFromFirestore();
    checkAndResetAfterTen();
  } else {
    showNotification("Password errata per " + username);
  }
}

function logout() {
  currentUser = null;
  toggleSections(false);
  showNotification("Logout effettuato con successo.");
}

/***********************
 * FIRESTORE PRENOTAZIONI
 ***********************/
function loadReservationsFromFirestore() {
  const today = getTodayDate();
  reservations = { "Volley1": {}, "Volley2": {}, "BasketCalcio": {}, "Ping-pong": {} };

  db.collection("reservations").where("date","==",today).get()
    .then(qs => {
      qs.forEach(doc => {
        const { field, time, user } = doc.data();
        if (!reservations[field][today]) reservations[field][today] = {};
        reservations[field][today][time] = user;
      });
      populateAllFields();
      listenRealtimeForToday();
    })
    .catch(err => {
      console.error(err);
      showNotification("Errore caricamento prenotazioni.");
    });
}

function listenRealtimeForToday() {
  const today = getTodayDate();
  db.collection("reservations").where("date","==",today)
    .onSnapshot(snap => {
      reservations = { "Volley1": {}, "Volley2": {}, "BasketCalcio": {}, "Ping-pong": {} };
      snap.forEach(doc => {
        const { field, time, user } = doc.data();
        if (!reservations[field][today]) reservations[field][today] = {};
        reservations[field][today][time] = user;
      });
      populateAllFields();
      populateAdminTable();
      if (currentUser === adminUsername) populateCredentialsTable();
    });
}

function saveReservationToFirestore(fieldName, date, time, user) {
  const docId = `${fieldName}_${date}_${time}_${user}`;
  return db.collection("reservations").doc(docId).set({
    field: fieldName, date, time, user
  });
}

function deleteReservationFromFirestore(fieldName, date, time, user) {
  const docId = `${fieldName}_${date}_${time}_${user}`;
  return db.collection("reservations").doc(docId).delete();
}

/***********************
 * PRENOTAZIONI / UI
 ***********************/
function userHasBookingToday() {
  const today = getTodayDate();
  for (let field in reservations) {
    if (reservations[field][today]) {
      for (let slot in reservations[field][today]) {
        if (reservations[field][today][slot] === currentUser) return true;
      }
    }
  }
  return false;
}

function populateAllFields() {
  ["Volley1","Volley2","BasketCalcio","Ping-pong"].forEach(fieldName => {
    const container = document.getElementById(`slots-${fieldName}`);
    if (!container) return;
    container.innerHTML = '';
    const today = getTodayDate();
    if (!reservations[fieldName][today]) reservations[fieldName][today] = {};

    timeSlots.forEach(slot => {
      const slotDiv = document.createElement("div");
      slotDiv.classList.add("slot");
      const bookedBy = reservations[fieldName][today][slot];

      if (bookedBy) {
        if (bookedBy === currentUser) {
          slotDiv.classList.add("my-booking");
          slotDiv.textContent = `${slot} - Prenotato da te`;
          slotDiv.onclick = () => cancelUserReservation(fieldName, slot);
        } else {
          slotDiv.classList.add("unavailable");
          slotDiv.textContent = `${slot} - Prenotato`;
        }
      } else {
        slotDiv.classList.add("available");
        slotDiv.textContent = `${slot} - Disponibile`;
        slotDiv.onclick = () => bookSlot(fieldName, slot);
      }
      container.appendChild(slotDiv);
    });
  });
}

function bookSlot(fieldName, slot) {
  const today = getTodayDate();
  if (currentUser !== adminUsername && userHasBookingToday()) {
    showNotification("Hai già una prenotazione oggi.");
    return;
  }
  if (reservations[fieldName][today][slot]) {
    showNotification("Questo slot è già prenotato.");
    return;
  }
  saveReservationToFirestore(fieldName, today, slot, currentUser)
    .then(() => showNotification(`Prenotazione su ${fieldName} alle ${slot} eseguita!`))
    .catch(err => {
      console.error("Errore prenotazione:", err);
      showNotification("Errore prenotazione.");
    });
}

function cancelUserReservation(fieldName, slot) {
  const today = getTodayDate();
  if (reservations[fieldName][today][slot] === currentUser) {
    deleteReservationFromFirestore(fieldName, today, slot, currentUser)
      .then(() => showNotification("Prenotazione annullata."))
      .catch(err => {
        console.error(err);
        showNotification("Errore annullamento prenotazione.");
      });
  } else {
    showNotification("Non puoi annullare la prenotazione di un altro utente!");
  }
}

/***********************
 * ADMIN - PRENOTAZIONI
 ***********************/
function populateAdminTable() {
  if (currentUser !== adminUsername) return;
  const today = getTodayDate();
  const tbody = document.getElementById("admin-table");
  if (!tbody) return;
  tbody.innerHTML = "";

  for (let field in reservations) {
    if (reservations[field][today]) {
      for (let slot in reservations[field][today]) {
        const user = reservations[field][today][slot];
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${field}</td>
          <td>${today}</td>
          <td>${slot}</td>
          <td>${user}</td>
          <td>
            <button class="cancel-btn" onclick="deleteAdminReservation('${field}','${today}','${slot}','${user}')">
              <i class="fas fa-trash-alt"></i> Elimina
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      }
    }
  }
}

function deleteAdminReservation(field, date, slot, user) {
  deleteReservationFromFirestore(field, date, slot, user)
    .then(() => showNotification(`Prenotazione per ${field} alle ${slot} di ${user} eliminata.`))
    .catch(err => {
      console.error(err);
      showNotification("Errore eliminazione prenotazione.");
    });
}

/***********************
 * ADMIN - UTENTI
 ***********************/
function populateCredentialsTable() {
  if (currentUser !== adminUsername) return;
  const tbody = document.getElementById("credentials-table");
  if (!tbody) return;
  tbody.innerHTML = "";

  // Carichiamo user da Firestore x disabilitato
  db.collection("users").get().then(snap => {
    snap.forEach(doc => {
      const data = doc.data();
      const username = doc.id;
      const pass = staticUsers[username] || "N/A";
      const disabled = data.disabled || false;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${username}</td>
        <td>${pass}</td>
        <td>${disabled ? "Disabilitato" : "Attivo"}</td>
        <td>
          <button onclick="toggleUserStatus('${username}', ${disabled})">
            <i class="fas ${disabled ? 'fa-toggle-off' : 'fa-toggle-on'}"></i>
            ${disabled ? 'Attiva' : 'Disabilita'}
          </button>
          <button onclick="updateUserPassword('${username}')">
            <i class="fas fa-edit"></i> Modifica Password
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }).catch(err => console.error(err));
}

window.toggleUserStatus = function(username, isDisabled) {
  const newStatus = !isDisabled;
  db.collection("users").doc(username).set({ disabled: newStatus }, { merge: true })
    .then(() => {
      showNotification(`Utente ${username} ${newStatus ? 'disabilitato' : 'attivato'}.`);
      populateCredentialsTable();
    })
    .catch(err => {
      console.error(err);
      showNotification("Errore aggiornamento stato user.");
    });
};

window.updateUserPassword = function(username) {
  const newPass = prompt("Nuova password per " + username + ":");
  if (!newPass) return;

  staticUsers[username] = newPass;

  if (username === adminUsername) {
    adminPassword = newPass;
  }

  // Salviamo su Firestore (opzionale)
  db.collection("users").doc(username).set({ password: newPass }, { merge: true })
    .then(() => {
      showNotification(`Password aggiornata per ${username}.`);
      populateCredentialsTable();
    })
    .catch(err => {
      console.error("Errore update password:", err);
      showNotification("Errore durante l'aggiornamento password.");
    });
};

/***********************
 * ADMIN - IMMAGINI
 ***********************/
function loadAdminImagesRealtime() {
  db.collection("admin").doc("images").onSnapshot(docSnap => {
    const container = document.getElementById("login-images-container");
    if (!container) return;
    container.innerHTML = "";

    if (docSnap.exists) {
      const data = docSnap.data();
      for (let i = 1; i <= 10; i++) {
        const url = data[`image${i}URL`] || "";
        const link = data[`image${i}Link`] || "";
        if (url) {
          const a = document.createElement("a");
          a.href = link || "#";
          a.target = "_blank";
          const img = document.createElement("img");
          img.src = url;
          img.alt = `Immagine ${i}`;
          img.style.width = "80px";
          img.style.border = "2px solid var(--color-primary)";
          img.style.borderRadius = "8px";
          img.style.margin = "5px";
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
      const payload = {};
      for (let i = 1; i <= 10; i++) {
        payload[`image${i}URL`] = "";
        payload[`image${i}Link`] = "";
      }
      db.collection("admin").doc("images").set(payload);
    }
  });
}

window.saveAdminImages = function() {
  if (currentUser !== adminUsername) {
    showNotification("Non hai i permessi per modificare le immagini!");
    return;
  }
  const payload = {};
  for (let i = 1; i <= 10; i++) {
    payload[`image${i}URL`] = document.getElementById(`image${i}URL`).value.trim();
    payload[`image${i}Link`] = document.getElementById(`image${i}Link`).value.trim();
  }
  db.collection("admin").doc("images").set(payload)
    .then(() => showNotification("Immagini salvate con successo!"))
    .catch(err => {
      console.error("Errore salvataggio immagini:", err);
      showNotification("Errore salvataggio immagini.");
    });
};

/***********************
 * RESET QUOTIDIANO
 ***********************/
function checkAndResetAfterTen() {
  const lastResetDate = localStorage.getItem("lastResetDate");
  const today = getTodayDate();
  const now = new Date();
  if (lastResetDate !== today && now.getHours() >= 10) {
    resetAllReservations();
    localStorage.setItem("lastResetDate", today);
  }
}

function resetAllReservations() {
  const today = getTodayDate();
  db.collection("reservations")
    .where("date","==",today)
    .get()
    .then(snap => {
      const batch = db.batch();
      snap.forEach(doc => {
        const data = doc.data();
        if (data.user !== adminUsername) {
          batch.delete(doc.ref);
        }
      });
      return batch.commit();
    })
    .then(() => {
      showNotification("Prenotazioni resettate per il nuovo giorno (admin escluso).");
      loadReservationsFromFirestore();
    })
    .catch(err => {
      console.error("Errore resetAllReservations:", err);
      showNotification("Errore reset prenotazioni.");
    });
}
