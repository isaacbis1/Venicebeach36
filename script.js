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

let currentUser = null;
const adminUsername = "admin";
const adminPassword = "passwordAdmin";

// Hardcoded static users con password fisse per 200 utenti
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

function getTodayDate() {
  const today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (mm < 10) mm = '0' + mm;
  if (dd < 10) dd = '0' + dd;
  return `${yyyy}-${mm}-${dd}`;
}

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert('Inserisci username e password.');
    return;
  }

  if (username === adminUsername && password === adminPassword) {
    currentUser = username;
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('app-area').style.display = 'flex';
    toggleAdminSection();
    loadReservationsFromFirestore();
    populateCredentialsTable();
    checkAndResetAfterTen();
  } else {
    if(staticUsers[username] && staticUsers[username] === password) {
      db.collection("users").doc(username).get().then(doc => {
        let disabled = false;
        if(doc.exists) {
          disabled = doc.data().disabled;
        }
        if(disabled) {
          alert("Questo utente è disabilitato.");
          return;
        }
        currentUser = username;
        document.getElementById('login-area').style.display = 'none';
        document.getElementById('app-area').style.display = 'flex';
        toggleAdminSection();
        loadReservationsFromFirestore();
        checkAndResetAfterTen();
      }).catch(err => {
        console.error(err);
        alert("Errore durante il login.");
      });
    } else {
      alert("Credenziali errate!");
    }
  }
}

function logout() {
  currentUser = null;
  document.getElementById('login-area').style.display = 'flex';
  document.getElementById('app-area').style.display = 'none';
}

function toggleAdminSection() {
  if (currentUser === adminUsername) {
    document.getElementById('admin-area').style.display = 'block';
  } else {
    document.getElementById('admin-area').style.display = 'none';
  }
}

/*******************************************************
 *  FUNZIONI PER IL RESET GIORNALIERO AL PRIMO ACCESSO DOPO LE 9:59
 ******************************************************/

function checkAndResetAfterTen() {
  const lastResetDate = localStorage.getItem('lastResetDate');
  const today = getTodayDate();
  const now = new Date();
  
  // Controlla se oggi non è stato resettato e se sono passate le 9:59
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
        batch.delete(doc.ref);
      });
      return batch.commit();
    })
    .then(() => {
      console.log("Prenotazioni resettate per il nuovo giorno.");
      loadReservationsFromFirestore();
    })
    .catch(err => {
      console.error("Errore durante il reset delle prenotazioni:", err);
    });
}

/*******************************************************
 *  FUNZIONI FIRESTORE
 ******************************************************/

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
    });
}

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

function saveReservationToFirestore(fieldName, date, time, user) {
  const docId = `${fieldName}_${date}_${time}_${user}`;
  return db.collection("reservations").doc(docId).set({
    field: fieldName,
    date: date,
    time: time,
    user: user
  });
}

function deleteReservationFromFirestore(fieldName, date, time, user) {
  const docId = `${fieldName}_${date}_${time}_${user}`;
  return db.collection("reservations").doc(docId).delete();
}

/*******************************************************
 *  FUNZIONI DI GESTIONE PRENOTAZIONI E UI
 ******************************************************/

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
  populateFieldSlots("Volley1");
  populateFieldSlots("Volley2");
  populateFieldSlots("BasketCalcio");
  populateFieldSlots("Ping-pong");
}

function populateFieldSlots(fieldName) {
  const today = getTodayDate();
  const containerId = `slots-${fieldName}`;
  const container = document.getElementById(containerId);

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
        slotDiv.textContent = `${slot} - Prenotato da Me`;
        slotDiv.onclick = () => cancellaPrenotazioneUtente(fieldName, slot);
      } else {
        slotDiv.classList.add('unavailable');
        slotDiv.textContent = `${slot} - Prenotato da ${bookedBy}`;
      }
    } else {
      slotDiv.classList.add('available');
      slotDiv.textContent = `${slot} - Disponibile`;
      slotDiv.onclick = () => prenotaSlot(fieldName, slot);
    }

    container.appendChild(slotDiv);
  });
}

function prenotaSlot(fieldName, slot) {
  const today = getTodayDate();

  if (currentUser !== adminUsername && userHasBookingToday()) {
    alert('Hai già effettuato una prenotazione per oggi (max 45 minuti).');
    return;
  }

  if (reservations[fieldName][today][slot]) {
    alert('Questo slot è già prenotato.');
    return;
  }

  saveReservationToFirestore(fieldName, today, slot, currentUser)
    .then(() => {
      alert(`Prenotazione effettuata: ${fieldName} alle ${slot}`);
    })
    .catch((err) => {
      console.error("Errore durante la prenotazione:", err);
    });
}

function cancellaPrenotazioneUtente(fieldName, slot) {
  const today = getTodayDate();
  const bookedBy = reservations[fieldName][today][slot];
  if (bookedBy === currentUser) {
    deleteReservationFromFirestore(fieldName, today, slot, bookedBy)
      .then(() => {
        alert(`La tua prenotazione per ${fieldName} alle ${slot} è stata annullata.`);
      })
      .catch((err) => {
        console.error("Errore durante la cancellazione:", err);
      });
  } else {
    alert('Non puoi cancellare la prenotazione di un altro utente.');
  }
}

/*******************************************************
 *  FUNZIONI ADMINISTRATIVE
 ******************************************************/

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
          <td><button class="cancel-btn" onclick="deleteAdminReservation('${field}','${today}','${time}','${user}')">Elimina</button></td>
        `;
        tbody.appendChild(tr);
      }
    }
  }
}

function deleteAdminReservation(fieldName, date, time, user) {
  deleteReservationFromFirestore(fieldName, date, time, user)
    .then(() => {
      alert(`La prenotazione per ${fieldName} alle ${time} dell'utente ${user} è stata cancellata.`);
    })
    .catch((err) => {
      console.error('Errore durante la cancellazione:', err);
    });
}

/*******************************************************
 *  FUNZIONI PER LA GESTIONE DELLE CREDENZIALI E STATUS UTENTI
 ******************************************************/

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
        <td><button onclick="toggleUserStatus('${username}', ${data.disabled})">
              ${data.disabled ? 'Attiva' : 'Disattiva'}
            </button></td>
      `;
      tbody.appendChild(tr);
    });
  }).catch(err => console.error(err));
}

function toggleUserStatus(username, currentDisabled) {
  let newStatus = !currentDisabled;
  db.collection("users").doc(username).update({
    disabled: newStatus
  }).then(() => {
    populateCredentialsTable();
  }).catch(err => console.error(err));
}
