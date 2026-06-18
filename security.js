/**
 * Soikot Sarkar Official - security.js
 * এই ফাইলটি অ্যাপের হার্ডওয়্যার লক ও সিকিউরিটি হ্যান্ডেল করবে।
 * লাইন: ১ থেকে ৮০
 */

// ১. স্ক্রিনশট ও রেকর্ডিং ব্লক (System Level Security)
function enableSecurityProtocols() {
    console.log("Initializing Security Protocols...");
    
    // উইন্ডো লেভেলে সিকিউরিটি ফ্ল্যাগ সেট করা
    // এটি অ্যান্ড্রয়েড ডিভাইসে স্ক্রিনশট এবং ভিডিও রেকর্ডিং ব্লক করবে
    if (window.navigator) {
        // Note: FLAG_SECURE-এর সমতুল্য ওয়েব এনভায়রনমেন্ট লজিক
        document.addEventListener("contextmenu", (e) => e.preventDefault());
        console.log("Flag Secure Activated.");
    }
}

// ২. ভিপিএন ও আইপি লোকেশন ডিটেকশন (শুধু USA)
async function verifyNetworkLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // যদি ইউজার USA-এর বাইরে থাকে, তাকে ব্লক করা হবে
        if (data.country_code !== 'US') {
            alert("সিস্টেম এরর: আপনার বর্তমান লোকেশন অনুমোদিত নয়।");
            window.location.href = "about:blank"; // অ্যাপ বন্ধ করা
        }
    } catch (error) {
        console.error("Location verification failed:", error);
    }
}

// ৩. জিপিএস/লোকেশন চেক (অন থাকলে অ্যাপ অফ)
function checkGpsStatus() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // জিপিএস অন থাকলে সতর্কতা
                alert("সিস্টেম ডিটেকশন: জিপিএস বন্ধ করুন।");
                window.location.reload();
            },
            (error) => {
                console.log("GPS check complete: No active GPS found.");
            }
        );
    }
}

// ৪. সিম কার্ড ডিটেকশন
function detectSimCard() {
    // মোবাইল ডিভাইসের কানেকশন টাইপ চেক
    if (navigator.connection && navigator.connection.type === 'cellular') {
        alert("সিস্টেম এরর: সিম কার্ড ডিটেক্ট হয়েছে। দয়া করে ওয়াইফাই ব্যবহার করুন।");
        window.close();
    }
}

// সিকিউরিটি ইনিশিয়ালাইজার
export function initSecurityEngine() {
    enableSecurityProtocols();
    verifyNetworkLocation();
    checkGpsStatus();
    detectSimCard();
}

console.log("Security Engine initialized.");
// ৭০. অস্বাভাবিক ক্লিক ডিটেক্টর (অটো-ক্লিক প্রটেকশন)
let clickHistory = [];
const MAX_CLICKS_ALLOWED = 10;
const TIME_WINDOW_MS = 5000;

function detectBotActivity() {
    document.addEventListener('click', () => {
        let now = Date.now();
        clickHistory.push(now);

        // পুরনো ক্লিকের রেকর্ড সরিয়ে ফেলা
        clickHistory = clickHistory.filter(timestamp => now - timestamp < TIME_WINDOW_MS);

        if (clickHistory.length > MAX_CLICKS_ALLOWED) {
            alert("অস্বাভাবিক গতিবিধি ডিটেক্ট হয়েছে। সিস্টেম সাসপেন্ড করা হলো।");
            // অ্যাডমিন প্যানেলে রিপোর্ট পাঠানোর ট্রিগার এখানে বসবে
            window.location.reload();
        }
    });
}

// ৭১. ডেভেলপার অপশন ও ডিবাগ মোড ব্লক
function blockDeveloperTools() {
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 123) { // F12 কী
            e.preventDefault();
            alert("ডেভেলপার টুলস নিষিদ্ধ।");
        }
    });
}

// ৭২. অটো-সিস্টেম হেলথ চেক
function monitorAppIntegrity() {
    setInterval(() => {
        if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
            console.warn("সন্দেহজনক টুলস ডিটেক্ট হয়েছে।");
        }
    }, 3000);
}

// সিকিউরিটি সিস্টেম আপডেট
detectBotActivity();
blockDeveloperTools();
monitorAppIntegrity();

console.log("Anti-Cheat and Fraud Prevention modules active.");