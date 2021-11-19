class CustomUtil {

  static flattenHours (date) {
    // date : any date object, preferably from "2012-09-22"
    const flat = date.toISOString().replace(/T.*$/, "") + "T00:00:00.000Z";
    return flat;
  }

  static colorReactCal(dates_arr, EVENTS) {
    dates_arr.forEach((date) => {
      date.parentNode.style.backgroundColor = "";
      EVENTS.forEach((event) => {
        let date_obj = this.formatTimelessDate(
          new Date(date.getAttribute("aria-label")).toDateString()
        );

        const firstDate = this.formatTimelessDate(
          new Date(event.startAt).toDateString(),
          false,
          {
            offsetType: "day",
            amount: 1,
          }
        );
        const secondDate = this.formatTimelessDate(
          new Date(event.endAt).toDateString(),
          false,
          {
            offsetType: "day",
            amount: 1,
          }
        );

        // console.log(
        //   `------firstDate ${firstDate}--------date_obj ${date_obj}-------secondDate ${secondDate}--------`
        // );

        // Clear the previously applied color
        
        if (
          firstDate.getTime() <= date_obj.getTime() &&
          date_obj.getTime() <= secondDate.getTime()
        ) {
          // date.style.color = "blue";
          // date.style.fontWeight = "bold";
          // console.log("444444444444444444");
          // console.log("444444444444444444");
          // console.log(date.parentNode);
          date.parentNode.style.backgroundColor = "rgba(240,199,137,30%)";
        }
      });
    });
  }

  static getMonthLastDate(calDate) {
    const month = calDate.getMonth();
    let calDate_str = calDate.toDateString();
    let dayPDT = new Date(
      calDate_str + " 01:00:00 GMT-0700 (Pacific Daylight Time)"
    );
    const lastDay = new Date(2008, month + 1, 0).getDate();
    return lastDay;
  }

  static isDigitConvertible(value) {
    return /^\d+$/.test(value);
  }

  static formatTimelessDate(
    day, //calDate.toDateString()
    typeString = false,
    offset = {
      offsetType: null,
      amount: 0,
    }
  ) {
    let dayPDT = new Date(day + " 00:00:00 GMT-0700 (Pacific Standard Time)");
    let year = dayPDT.getFullYear();
    let month = dayPDT.getMonth();
    let date = dayPDT.getDate();

    if (offset.offsetType) {
      switch (offset.offsetType) {
        case "year":
          year = year + offset.amount;
          break;
        case "month":
          month = month + offset.amount;
          break;
        case "day":
          date = date + offset.amount;
          break;
        default:
          break;
      }
    }

    // let formatDay: any =
    //   new Date(year, month, date, 0, 0, 0).toISOString().replace(/T.*$/, "") +
    //   " 00:00:00 GMT-0700 (Pacific Daylight Time)";

    let formatDay = new Date(year, month, date, 0, 0, 0);

    if (typeString) {
      formatDay = formatDay.toDateString();
    }

    return formatDay;
  }
}

export default CustomUtil;
