export function calNowTime(timeType) {
    const date = new Date();
    const yearUTC = date.getUTCFullYear();
    const monthUTC = date.getUTCMonth();
    const dayUTC = date.getUTCDate();
    const hourUTC = date.getUTCHours();
    const minuteUTC = date.getUTCMinutes();
    const secUTC = date.getUTCSeconds();
    const dateUTC = new Date(yearUTC, monthUTC, dayUTC, hourUTC, minuteUTC, secUTC);
    let day = dateUTC.getDate();
    let month = dateUTC.getMonth() + 1;
    const year = dateUTC.getFullYear();
    if (month < 10) { month = "0" + month }
    if (day < 10) { day = "0" + day }
    const todayUTC = year + "-" + month + "-" + day;

    let dayLocal = date.getDate();
    let monthLocal = date.getMonth() + 1;
    const yearLocal = date.getFullYear();
    if (monthLocal < 10) { monthLocal = "0" + monthLocal }
    if (dayLocal < 10) { dayLocal = "0" + dayLocal }
    const todayLocal = yearLocal + "-" + monthLocal + "-" + dayLocal;

    const addDayCount = -90;
    const date_90 = new Date(yearUTC, monthUTC, dayUTC, hourUTC, minuteUTC, secUTC);
    date_90.setDate(date_90.getDate() + addDayCount);
    const yy = date_90.getFullYear();
    const mm = (date_90.getMonth() + 1) < 10 ? "0" + (date_90.getMonth() + 1) : (date_90.getMonth() + 1);
    const dday = date_90.getDate() < 10 ? "0" + date_90.getDate() : date_90.getDate();
    const day_90 = yy + "-" + mm + "-" + dday;
    const dd = {};
    dd['day_90'] = day_90;
    if (timeType === "TW") {
        dd['today'] = todayLocal;
    } else {
        dd['today'] = todayUTC;
    }
    
        
    return dd;
}
