async function exportIndexedDBToJson(dbName, version) {
  const db = window.indexedDB.open(dbName, version);
  db.onsuccess = (event) => {
  const objectStores = db.result.objectStoreNames;
  const storeData = {};
  for (const storeName of objectStores) {
    exportIndexedDBToJsonStore(db, storeName).then((output) => {
      console.log(output);
      storeData[storeName] = output;  
    });
  }
  console.log("result: " + JSON.stringify(storeData));
  }
}

async function exportIndexedDBToJsonStore(db, storeName) {
  const transaction = db.result.transaction([storeName], 'readonly');
  const store = transaction.objectStore(storeName);

  const data = [];
  const cursor = store.openCursor();

  return new Promise((resolve) => {
    cursor.onsuccess = (event) => {
      const value = event.target.result;
      if (value) {
        data.push(value);
      } else {
        resolve(data);
      }
    };
  });
}

// Importing JSON data into IndexedDB
async function importJsonToIndexedDB(dbName, jsonData) {
  const db = await window.indexedDB.open(dbName, 1);

  for (const [storeName, storeData] of Object.entries(jsonData)) {
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);

    storeData.forEach((item) => {
      store.put(item);
    });
  }

  await transaction.complete;
  await db.close();
}


// Export data
exportIndexedDBToJson("UnityCache", 21);

/*
// Import data
const importedData = {
  // Replace with your actual JSON data structure containing object store names and their data
  'myStore': [{ key1: 'value1' }, { key2: 'value2' }],
  'anotherStore': [{ key3: 'value3' }],
};
importJsonToIndexedDB(dbName, importedData)
  .then(() => {
    console.log('Data imported successfully');
  })
  .catch((error) => {
    console.error('Error importing data:', error);
  });
*/