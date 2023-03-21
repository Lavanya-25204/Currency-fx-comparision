let country_code = {
    "AED" : "ae",
    "AFN" : "af",
    "XCD" : "ag",
    "ALL" : "al",
    "AMD" : "am",
    "ANG" : "ai",
    "AOA" : "ao",
    "AQD" : "aq",
    "ARS" : "ar",
    "AUD" : "au",
    "AZN" : "az",
    "BAM" : "ba",
    "BBD" : "bb",
    "BDT" : "bd",
    "XOF" : "be",
    "BGN" : "bg",
    "BHD" : "bh",
    "BIF" : "bi",
    "BMD" : "bm",
    "BND" : "bn",
    "BOB" : "bo",
    "BRL" : "br",
    "BSD" : "bs",
    "NOK" : "bv",
    "BWP" : "bw",
    "BYR" : "by",
    "BZD" : "bz",
    "CAD" : "ca",
    "CDF" : "cd",
    "XAF" : "cf",
    "CHF" : "ch",
    "CLP" : "cl",
    "CNY" : "cn",
    "COP" : "co",
    "CRC" : "cr",
    "CUP" : "cu",
    "CVE" : "cv",
    "CYP" : "cy",
    "CZK" : "cz",
    "DJF" : "dj",
    "DKK" : "dk",
    "DOP" : "do",
    "DZD" : "dz",
    "ECS" : "ec",
    "EEK" : "ee",
    "EGP" : "eg",
    "ETB" : "et",
    "EUR" : "fr",
    "FJD" : "fj",
    "FKP" : "fk",
    "GBP" : "gb",
    "GEL" : "ge",
    "GGP" : "gg",
    "GHS" : "gh",
    "GIP" : "gi",
    "GMD" : "gm",
    "GNF" : "gn",
    "GTQ" : "gt",
    "GYD" : "gy",
    "HKD" : "hk",
    "HNL" : "hn",
    "HRK" : "hr",
    "HTG" : "ht",
    "HUF" : "hu",
    "IDR" : "id",
    "ILS" : "il",
    "INR" : "in",
    "IQD" : "iq",
    "IRR" : "ir",
    "ISK" : "is",
    "JMD" : "jm",
    "JOD" : "jo",
    "JPY" : "jp",
    "KES" : "ke",
    "KGS" : "kg",
    "KHR" : "kh",
    "KMF" : "km",
    "KPW" : "kp",
    "KRW" : "kr",
    "KWD" : "kw",
    "KYD" : "ky",
    "KZT" : "kz",
    "LAK" : "la",
    "LBP" : "lb",
    "LKR" : "lk",
    "LRD" : "lr",
    "LSL" : "ls",
    "LTL" : "lt",
    "LVL" : "lv",
    "LYD" : "ly",
    "MAD" : "ma",
    "MDL" : "md",
    "MGA" : "mg",
    "MKD" : "mk",
    "MMK" : "mm",
    "MNT" : "mn",
    "MOP" : "mo",
    "MRO" : "mr",
    "MTL" : "mt",
    "MUR" : "mu",
    "MVR" : "mv",
    "MWK" : "mw",
    "MXN" : "mx",
    "MYR" : "my",
    "MZN" : "mz",
    "NAD" : "na",
    "XPF" : "nc",
    "NGN" : "ng",
    "NIO" : "ni",
    "NPR" : "np",
    "NZD" : "nz",
    "OMR" : "om",
    "PAB" : "pa",
    "PEN" : "pe",
    "PGK" : "pg",
    "PHP" : "ph",
    "PKR" : "pk",
    "PLN" : "pl",
    "PYG" : "py",
    "QAR" : "qa",
    "RON" : "ro",
    "RSD" : "rs",
    "RUB" : "ru",
    "RWF" : "rw",
    "SAR" : "sa",
    "SBD" : "sb",
    "SCR" : "sc",
    "SDG" : "sd",
    "SEK" : "se",
    "SGD" : "sg",
    "SKK" : "sk",
    "SLL" : "sl",
    "SOS" : "so",
    "SRD" : "sr",
    "STD" : "st",
    "SVC" : "sv",
    "SYP" : "sy",
    "SZL" : "sz",
    "THB" : "th",
    "TJS" : "tj",
    "TMT" : "tm",
    "TND" : "tn",
    "TOP" : "to",
    "TRY" : "tr",
    "TTD" : "tt",
    "TWD" : "tw",
    "TZS" : "tz",
    "UAH" : "ua",
    "UGX" : "ug",
    "USD" : "us",
    "UYU" : "uy",
    "UZS" : "uz",
    "VEF" : "ve",
    "VND" : "vn",
    "VUV" : "vu",
    "YER" : "ye",
    "ZAR" : "za",
    "ZMK" : "zm",
    "ZWD" : "zw"
};

const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton  = document.querySelector("form button");

for(let i = 0 ; i < dropList.length; i++){
    for(currency_code in country_code){
        let selected;
        //Selecting USD as default as FROM currency and NPR as TO currency
        if (i == 0) {
            selected = currency_code == "USD" ? "selected" : "";
        }else if (i == 1) {
            selected = currency_code == "NPR" ? "selected" : "";
        }
        //creating option tag with passing currency
        let optionTag = `<option value = "${currency_code}" ${selected}>${currency_code}</option>`;
        //inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
     dropList[i].addEventListener("change",e =>{
        loadFlag(e.target);  //Calling loadFlag with passing Target element as argument 
     });
}

function loadFlag(element) {
    for(code in country_code){
        if(code == element.value){  //if currency code of country list is equal to option value
            let imgTag = element.parentElement.querySelector("img");  //Selecting Img tag of particular drop List
            // passing country code of a selected currency code in a img url
            // imgTag.src = `https://www.countryflags.io/${country_code[code]}/flat/64.png`;
            imgTag.src=`https://flagcdn.com/h20/${country_code[code]}.png`;

        }
    }
}


window.addEventListener("load" , () =>{
    getExchangeRate();
});


getButton.addEventListener("click" , e =>{
    e.preventDefault(); //preventing form from submitting
    getExchangeRate();
});


const exchangeIcon = document.querySelector(".drop-list .icon");
exchangeIcon.addEventListener('click' , ()=>{
    let tempCode = fromCurrency.value; //temprary code of FROM drop list
    fromCurrency.value = toCurrency.value;  //passing TO currency code to FROM currency code 
    toCurrency.value = tempCode;  //passing temprary currency code to TO currency code
    loadFlag(fromCurrency);  //calling load flag with passing select element (fromCurrency) of FROM
    loadFlag(toCurrency);  //calling load flag with passing select element (toCurrency) of TO
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector(".amount input"),
    exchangeRateText = document.querySelector(".exchange-rate");
    let amountVal = amount.value;
    // If user dont enter any value or enter 0 then we'll put 1 by default in the input field
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateText.innerText = "Getting Exchange Rate";
    let url = `https://v6.exchangerate-api.com/v6/4a1e285bfd5009f2adb516a1/latest/${fromCurrency.value}`;
    //fetching api respose and returning it with parsing into js obj and in another then method recieving that obj
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateText.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`; 
    }).catch(()=>{  //if user is offline or any other error occured while fetching data then catch function will run
        exchangeRateText.innerText = "Something went Wrong";
    });     
}
