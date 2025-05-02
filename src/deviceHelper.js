const MEDIAMAP = new Map([
    ['(max-width: 599px)', '599'], // XSmall
    ['(max-width: 960px)', '960'], // Small
    ['(min-width: 961px)', 'Large'], // Large
    ['(min-width: 601px) and (max-width: 960px)', 'Medium'], // Medium
  ]);
  
  class DeviceHelper {
    constructor() {
      this.mediaQueryLists = new Map();
      this.setupMediaQueries();
    }
  
    setupMediaQueries() {
      for (const [query, size] of MEDIAMAP) {
        const mql = window.matchMedia(query);
        this.mediaQueryLists.set(query, mql);
      }
    }
  
    getCurrentScreenSize() {
      for (const [query, mql] of this.mediaQueryLists) {
        if (mql.matches) {
          return MEDIAMAP.get(query);
        }
      }
      return 'Unknown';
    }
  
    isMobileDevice() {
      const currentSize = this.getCurrentScreenSize();
      return currentSize === '599' || currentSize === '960';
    }
  
    isOnlyMobile() {
      const currentSize = this.getCurrentScreenSize();
      return currentSize === '599';
    }
  
    onBreakpointChange(callback) {
      for (const [query, mql] of this.mediaQueryLists) {
        mql.addEventListener('change', () => {
          callback(this.getCurrentScreenSize());
        });
      }
    }
  }
  
  export default new DeviceHelper();