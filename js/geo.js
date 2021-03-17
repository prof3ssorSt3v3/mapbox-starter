const GEO = {
  options: {
    enableHighAccuracy: true, //try to use GPS
    maximumAge: 1000 * 60 * 5, // save results for 5 minutes
    timeout: 20000,
  },
  getPosition(ftw, wtf) {
    console.log('running GEO.getPosition');
    if (navigator && 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(ftw, wtf, this.options);
    } else {
      wtf(new Error('Geolocation not supported'));
    }
  },
  updateOptions(opts) {
    this.options = opts;
    return true;
  },
};

export default GEO;
