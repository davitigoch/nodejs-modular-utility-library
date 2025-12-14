// dateUtils.mjs - ES2015 module with default export and named exports
class DateHelper {
    static formatDate(date, format = 'YYYY-MM-DD') {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        
        switch(format) {
            case 'YYYY-MM-DD':
                return `${year}-${month}-${day}`;
            case 'DD/MM/YYYY':
                return `${day}/${month}/${year}`;
            case 'MM-DD-YYYY':
                return `${month}-${day}-${year}`;
            default:
                return `${year}-${month}-${day}`;
        }
    }

    static isWeekend(date) {
        const day = new Date(date).getDay();
        return day === 0 || day === 6; // Sunday or Saturday
    }

    static daysBetween(date1, date2) {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        const timeDiff = Math.abs(d2.getTime() - d1.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
}

// Named exports
export const getCurrentTimestamp = () => Date.now();
export const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// Default export
export default DateHelper;