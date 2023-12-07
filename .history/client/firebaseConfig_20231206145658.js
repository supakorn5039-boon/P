import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  getDoc,
  limit,
} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyByut0ghCCxZqhrmJnFqtTpfj9Jzt7Tgk8",
  authDomain: "smart-parking-e0f33.firebaseapp.com",
  databaseURL:
    "https://smart-parking-e0f33-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-parking-e0f33",
  storageBucket: "smart-parking-e0f33.appspot.com",
  messagingSenderId: "188404168167",
  appId: "1:188404168167:web:80528b6015288c58ae7942",
  measurementId: "G-7QLZD94X09",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getAvailableLot() {
  // const ref = doc(firestore,'available-lot','30');
  // const doc = await getDoc(ref);
  // return doc.data();

  const ref = collection(firestore, "available-lot");
  const q = query(ref, orderBy("available", "desc"), limit(10));
  const data = await getDocs(q);

  let datas = {};

  data.docs.forEach((doc) => {
    datas.
    return { id: doc.id, ...doc.data() };
  });

  return c
}