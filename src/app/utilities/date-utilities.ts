// todo: check if Date.now() stores UTC or locale value

const isoRegex = /(\d{4})[-](\d{2})[-](\d{2})T(\d{2})[:](\d{2})[:](\d{2})[.](\d{3})[Z]/;
// e.g. 2020-06-25T04:00:00.000Z

const dateRegex = /(\d{4})[-](\d{2})[-](\d{2})/;

//new Date.UTC(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
export const getDateFromISOString = (isoDateStr: string): Date  => {
    let matches: string[] = isoDateStr.match(isoRegex);

    if (matches.length > 0) {
        return new Date(
            Date.UTC(
                parseInt(matches[1]),
                parseInt(matches[2]) - 1,
                parseInt(matches[3]),
                parseInt(matches[4]),
                parseInt(matches[5]),
                parseInt(matches[6]),
                parseInt(matches[7])
            )
        );
    }

    throw 'Invalid input';
}

export const getYyyymmddFromISOString = (isoDateStr: string): string  => {
    let date: Date = getDateFromISOString(isoDateStr);

    return (date.getFullYear() + '-' 
        + padZero(date.getMonth() + 1) + '-' 
        + padZero(date.getDate()));
}

export const getISOStringFromYyyymmdd = (yyyymmdd: string): string => {
    let matches: string[] = yyyymmdd.match(dateRegex);

    if (matches.length > 0) {
        return new Date(
            parseInt(matches[1]),
            parseInt(matches[2]) - 1,
            parseInt(matches[3])
        ).toISOString();
    }

    throw 'Invalid input';
}

/// compare only the date parts of the form yyyy-mm-dd or iso format
export const compareDates = (date1: string, date2: string): number => {
    if (dateRegex.test(date1) && dateRegex.test(date2)) {
        date1 = date1.substring(0, 10);
        date2 = date2.substring(0, 10);

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

    throw 'Invalid input';
}

export const isFutureDate = (date: string): boolean => {
    let futureDate: boolean = false;

    if (compareDates(date, new Date().toISOString()) == 1) {
        futureDate = true;
    }

    return futureDate;
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