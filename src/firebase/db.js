import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);



export const getProducts = async (categoria) => {
    const db = getFirestore();
    const productosRef = collection(db, "products");

    let q;
    if (categoria) {
        q = query(productosRef, where("categoria", "==", categoria));
    } else {
        q = productosRef;
    }

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};




export const getProduct = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    return docSnap.data()
    } else {
    }

}