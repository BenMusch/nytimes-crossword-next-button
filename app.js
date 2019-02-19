function getDaysInMonth(month, year) {
  if (month === 2 && year % 4 === 0) {
    return 29;
  } else {
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month-1]
  }
}

function getPrevDay(dateObj) {
  console.log(dateObj)
  if (dateObj.month === 1 && dateObj.day == 1) {
    return { year: dateObj.year - 1, month: 12, day: 31 }
  } else if (dateObj.day == 1) {
    return { year: dateObj.year, month: dateObj.month - 1, day: getDaysInMonth(dateObj.month - 1, dateObj.year) }
  } else {

    return { year: dateObj.year, month: dateObj.month, day: dateObj.day - 1 }
  }
}

function getNextDay(dateObj) {
  console.log(dateObj)
  if (dateObj.day === getDaysInMonth(dateObj.month, dateObj.year)) {
    if (dateObj.month === 12) {
      return { year: dateObj.year + 1, month: 1, day: 1 }
    } else {
      return { year: dateObj.year, month: dateObj.month + 1, day: 1 }
    }
  } else {
    return { year: dateObj.year, month: dateObj.month, day: dateObj.day + 1 }
  }
}

function parseDateFromUrl() {
  let path = window.location.pathname.split("/")
  console.log(path)
  let ymd = path.slice(path.length - 3, path.length)
  console.log(ymd)
  return { year: parseInt(ymd[0]), month: parseInt(ymd[1]), day: parseInt(ymd[2]) }
}

function urlFromDate(dateObj) {
  let path = window.location.pathname.split("/")
  path[path.length - 3] = dateObj.year.toString()
  path[path.length - 2] = dateObj.month.toString()
  path[path.length - 1] = dateObj.day.toString()
  return path.join("/")
}

function main() {
  console.log("main...")
  let byline = document.getElementsByClassName("PuzzleDetails-byline--16J5w")[0]
  let url = urlFromDate(getPrevDay(parseDateFromUrl()));
  let linkHtml = "<span><a href='" + url + "'>PREV</a></span>"
  url = urlFromDate(getNextDay(parseDateFromUrl()));
  linkHtml += "<span><a href='" + url + "'>NEXT</a></span>"
  byline.innerHTML += linkHtml
}

main();
