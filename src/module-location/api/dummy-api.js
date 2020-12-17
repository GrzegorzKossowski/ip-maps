import config from '../../config/config'

export const getIpLookup = (ip = 'check') => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ip === 'check') resolve({ data: plDummyData })
            else resolve({ data: usDummyData })
        }, 1000);
    })
}

const plDummyData = {
    ip: "87.206.166.163",
    type: "ipv4",
    continent_code: "EU",
    continent_name: "Europe",
    country_code: "PL",
    country_name: "Poland",
    region_code: "MZ",
    region_name: "Mazovia",
    city: "\u015ar\u00f3dmie\u015bcie",
    zip: "00-025",
    latitude: 52.2317008972168,
    longitude: 21.018339157104492,
    location: {
        geoname_id: 758470,
        capital: "Warsaw",
        languages: [
            {
                code: "pl",
                name: "Polish",
                native: "Polski"
            }
        ],
        country_flag: "http://assets.ipstack.com/flags/pl.svg",
        country_flag_emoji: "\ud83c\uddf5\ud83c\uddf1",
        country_flag_emoji_unicode: "U+1F1F5 U+1F1F1",
        calling_code: "48",
        is_eu: true
    }
}

const usDummyData = {
    ip: "134.201.250.999",
    type: "ipv4",
    continent_code: "NA",
    continent_name: "North America",
    country_code: "US",
    country_name: "United States",
    region_code: "CA",
    region_name: "California",
    city: "Los Angeles",
    zip: "90012",
    latitude: 34.0655517578125,
    longitude: -118.24053955078125,
    location: {
        geoname_id: 5368361,
        capital: "Washington D.C.",
        languages: [
            {
                code: "en",
                name: "English",
                native: "English"
            }
        ],
        country_flag: "http://assets.ipstack.com/flags/us.svg",
        country_flag_emoji: "\ud83c\uddfa\ud83c\uddf8",
        country_flag_emoji_unicode: "U+1F1FA U+1F1F8",
        calling_code: "1",
        is_eu: false
    }
}
