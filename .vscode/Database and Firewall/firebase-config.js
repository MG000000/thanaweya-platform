// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_8kzOOWQINZv_URN2ey7OylGLULgnvko",
    authDomain: "thawra-education.firebaseapp.com",
    databaseURL: "https://thawra-education-default-rtdb.firebaseio.com",
    projectId: "thawra-education",
    storageBucket: "thawra-education.firebasestorage.app",
    messagingSenderId: "994177128359",
    appId: "1:994177128359:web:47447da7e608497418c882",
    measurementId: "G-8CMWS8KPP1"
};

// Initialize Firebase (using compat version for simplicity)
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Helper: Get current user role
async function getUserRole(uid) {
    const doc = await db.collection('users').doc(uid).get();
    return doc.exists ? doc.data().role : null;
}

// Helper: Check if user is admin
async function isAdmin(uid) {
    const role = await getUserRole(uid);
    return role === 'admin';
}

// Helper: Check if user is teacher
async function isTeacher(uid) {
    const role = await getUserRole(uid);
    return role === 'teacher';
}

// Helper: Check if user is student
async function isStudent(uid) {
    const role = await getUserRole(uid);
    return role === 'student';
}

// Export for use in other files
window.firebaseConfig = firebaseConfig;
window.auth = auth;
window.db = db;
window.getUserRole = getUserRole;
window.isAdmin = isAdmin;
window.isTeacher = isTeacher;
window.isStudent = isStudent;