export const variables = {
    apiURL: import.meta.env.VITE_API_URL,
    isProd: !import.meta.env.VITE_API_URL.includes("localhost"),

    mainAccentColor: 'yellow-500',
    websiteName: 'FPV Finder',
    utmSource: "fpv_finder",
    utmMedium: "referral",
    utmCampaign: "fpv_finder"
};