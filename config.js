/**
 * Soikot Sarkar Official - config.js
 * এই ফাইলটি অ্যাপের মূল কনফিগারেশন হ্যান্ডেল করবে।
 * লাইন: ১ থেকে ১২০
 */

const CONFIG = {
    // টেলিগ্রাম বট ও অ্যাডমিন আইডি
    BOT_TOKEN: "8884869811:AAEM_0MHZwHtI6YKjsNFuIZq2lMj6lUjKjg",
    ADMIN_CHAT_ID: "7448519219",

    // অ্যাডস্টাররা অ্যাড আইডি
    ADSTERRA: {
        BANNER_1: "29662741",
        BANNER_2: "29662739",
        POP_UNDER: "29662737"
    },

    // মনেট্যাগ সেটিংস
    MONETAG: {
        ZONE_ID: "11156465",
        FREQUENCY: 2,
        INTERVAL: 30
    },

    // আর্নিং ও লিমিট কন্ট্রোল
    SETTINGS: {
        DAILY_LIMIT: 200,
        COOLDOWN_HOURS: 2,
        MAINTENANCE_STATUS: false
    },

    // পেমেন্ট মেথড
    PAYMENT_GATEWAYS: {
        BKASH: true,
        NAGAD: true
    }
};

// সার্ভার স্ট্যাটাস ও ব্লক চেক
export function isMaintenanceOn() {
    return CONFIG.SETTINGS.MAINTENANCE_STATUS;
}

export function checkBlockStatus(userId) {
    // ব্লক লিস্ট লজিক এখানে যুক্ত হবে
    return false;
}

// ইউজার ব্যালেন্স হ্যান্ডলার
export function updateBalance(userId, amount) {
    console.log("Updating balance for: " + userId);
}

// রেফারেল সিস্টেম কনফিগ
export const REFERRAL_BONUS = 10;

console.log("Config loaded successfully.");
// ৫৯. ইউজার লেভেল সিস্টেম কনফিগ
export const USER_LEVELS = {
    BRONZE: { min_earning: 0, bonus_multiplier: 1.0 },
    SILVER: { min_earning: 1000, bonus_multiplier: 1.1 },
    GOLD: { min_earning: 5000, bonus_multiplier: 1.2 }
};

// ৬০. ডেইলি স্ট্রিক বোনাস সেটিংস
export const DAILY_STREAK_BONUS = 50; // টানা ৭ দিন কাজ করলে এই বোনাস পাবে

// ৬১. সাপোর্ট ও হেল্পলাইন লজিক
export const SUPPORT_SETTINGS = {
    ENABLED: true,
    RESPONSE_TIME_MIN: 5,
    AUTO_REPLY_ENABLED: true
};

// ৬২. অ্যাপ নোটিফিকেশন ইঞ্জিন
export const NOTIFICATION_SETTINGS = {
    REMINDER_INTERVAL_HOURS: 2,
    SOUND_ENABLED: true
};

// ৬৩. র‍্যান্ডম টাইম ক্লোজার লজিক (অ্যান্টি-ব্যান)
export const AD_CLOSER_SETTINGS = {
    MIN_SECONDS: 5,
    MAX_SECONDS: 15,
    RANDOM_ENABLED: true
};

// ৬৪. সোশ্যাল ইন্টিগ্রেশন লিঙ্ক
export const SOCIAL_LINKS = {
    TELEGRAM_GROUP: "https://t.me/your_group_link",
    YOUTUBE_CHANNEL: "https://youtube.com/@SoikotSarkarOfficial"
};

// ৬৫. সিকিউরিটি কনফিগারেশন
export const SECURITY_FLAGS = {
    SCREENSHOT_BLOCK: true,
    VPN_DETECTION: true,
    GPS_DETECTION: true
};

console.log("Config extended features loaded.");
// ৬৬. পেমেন্ট স্ট্যাটাস ড্যাশবোর্ড সেটিংস
export const PAYMENT_STATUS_CONFIG = {
    SHOW_PENDING: true,
    SHOW_PROCESSING: true,
    SHOW_PAID: true
};

// ৬৭. এআই বট পারসোনা সেটিংস
export const AI_BOT_CONFIG = {
    NAME: "Soikot Sarkar AI",
    TONE: "Professional",
    HONORIFIC: "জনাব" // এখানে তুমি তোমার পছন্দমতো সম্বোধন সেট করতে পারো
};

// ৬৮. লিডারবোর্ড ও ডাইনামিক স্প্ল্যাশ স্ক্রিন সেটিংস
export const LEADERBOARD_CONFIG = {
    ENABLED: true,
    UPDATE_FREQUENCY_DAYS: 7,
    DISPLAY_TOP_EARNER: true
};

// ৬৯. ডেইলি মিশন ও টাস্ক লজিক
export const DAILY_MISSION_CONFIG = {
    ENABLED: true,
    TARGET_TASK_COUNT: 5,
    REWARD_MULTIPLIER: 1.5
};

// ৭০. গ্লোবাল অ্যাপ ভেরিয়েবলস
export const APP_VERSION = "1.0.0";
export const AUTHOR = "Soikot Sarkar";

console.log("Config: All advanced modules initialized successfully.");