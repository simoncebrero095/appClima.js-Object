export class Store {
    constructor(){
        this.city;
        this.countryCode;
        this.defaulCity = "Kiev";
        this.defaulCountry = "ua";
    }
    getLocationData(){
    if (localStorage.getItem('city') === null){
        this.city = this.defaulCity;
    }else{
        this.city = localStorage.getItem('city');
    }
    if(localStorage.getItem('countryCode') === null){
        this.countryCode = this.defaulCountry;
    }else{
        this.countryCode = localStorage.getItem('countryCode');
    }

    return {
        city: this.city,
        countryCode: this.countryCode
    }
    
};

    setLocationData(city,countryCode){
        localStorage.setItem('city',city);
        localStorage.setItem('countryCode',countryCode)
    };
}