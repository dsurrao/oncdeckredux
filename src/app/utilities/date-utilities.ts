// todo: check if Date.now() stores UTC or locale value

const isoRegex = /(\d{4})[-](\d{2})[-](\d{2})T(\d{2})[:](\d{2})[:](\d{2})[.](\d{3})[Z]/;
// e.g. 2020-06-25T04:00:00.000Z

const dateRegex = /(\d{4})[-](\d{2})[-](\d{2})$/;

//new Date.UTC(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
export const getDateFromISOString = (isoDateStr: string): Date  => {
    let matches: string[] = isoDateStr.match(isoRegex);
    if (matches) {
        return new Date(
            Date.UTC(
                parseInt(matches[1]),
                parseInt(matches[2]) - 1,
                parseInt(matches[3]),
                parseInt(matches[4]),
                parseInt(matches[5]),
                parseInt(matches[6]),
                parseInt(matches[7]))
        );
    }
    else {
        matches = isoDateStr.match(dateRegex);
        if (matches) {
            return new Date(
                Date.UTC(
                    parseInt(matches[1]),
                    parseInt(matches[2]) - 1,
                    parseInt(matches[3]))
            );
        }
    }

    throw 'getDateFromISOString(): Invalid input \'' + isoDateStr + '\'';
}

export const getYyyymmddFromISOString = (isoDateStr: string): string  => {
    let yyyymmdd: string = isoDateStr;
    let date: Date = getDateFromISOString(isoDateStr);

    if (dateRegex.test(isoDateStr)) {
        yyyymmdd = isoDateStr;
    }
    else {
        yyyymmdd = date.getFullYear() + '-' 
        + padZero(date.getMonth() + 1) + '-' 
        + padZero(date.getDate())
    }

    return yyyymmdd;
}

export const getISOStringFromYyyymmdd = (yyyymmdd: string): string => {
    let matches: string[] = yyyymmdd.match(dateRegex);
    if (matches) {
        return new Date(
            parseInt(matches[1]),
            parseInt(matches[2]) - 1,
            parseInt(matches[3])
        ).toISOString();
    }

    throw 'getISOStringFromYyyymmdd(): Invalid input \'' + yyyymmdd + '\'';
}

/// compare only the date parts of the form yyyy-mm-dd or iso format
export const compareDates = (date1: string, date2: string): number => {
    date1 = getYyyymmddFromISOString(date1);
    date2 = getYyyymmddFromISOString(date2);

    if (date1 > date2) {
        return 1;
    }
    else if (date1 == date2) {
        return 0;
    }
    else {
        return -1;
    }
}

export const isFutureDate = (date: string): boolean => {
    let futureDate: boolean = false;

    if (compareDates(date, new Date().toISOString()) == 1) {
        futureDate = true;
    }

    return futureDate;
}

export const isCurrentOrFutureDate = (date: string): boolean => {
    let currentOrFutureDate: boolean = false;

    let comparison = compareDates(date, new Date().toISOString());
    if (comparison == 0 || comparison == 1) {
        currentOrFutureDate = true;
    }

    return currentOrFutureDate;
}

const padZero = (num: number): string => {
    let paddedString: string = '';

    if (num >= 0 && num < 10) {
        paddedString = '0' + num;
    }
    else {
        paddedString = num.toString();
    }

    return paddedString;
}