import { SearchButton } from './../screens/SearchScreen/styles';
export const timeArray: String[] = [
    "10:30",
    "12:30",
    "14:30",
    "16:30",
    "19:30",
    "21:30",
    
]

export const generateData = (): String[] => {
    const date = new Date();
    let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let weekdays = [];
    for (let i = 0; i < 7; i++) {
        let tempDate = {
            // date: new Date(date.getTime()+ i *24*60*60*1000).getDate(),
            date: ` ${date.getDate() + i} / ${date.getMonth() + 1}`,
            day: weekday[new Date(date.getTime()+ i *24*60*60*1000).getDay()],
        }
        weekdays.push(tempDate)
    }
    return weekdays
}

export const generateSeats = (acentos: any[]) => {
    let numRow = 8;
    let numColumn = 8;
    let rowArray = [];
    let start = 1;
    let reachnine = false;

    for (let i = 0; i < numRow; i++) {
        let columnArray = [];
        for (let j = 0; j < numColumn; j++){
            let seatObject = {
                number : start,
                taken: acentos.includes(start) ? true : false, 
                selected: false,

            };
            columnArray.push(seatObject);
            start++;
        }
        // if(i === 3){
        //     numColumn += 2
        // }
        // if(numColumn < 9 && !reachnine){
        //     numColumn += 2
        // } else {
        //     reachnine = true;
        //     numColumn -= 2;
        // }
        rowArray.push(columnArray);
    }
    return rowArray;
};
