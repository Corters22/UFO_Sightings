console.log(data[0].datetime)

var country_list = [];

function findDate(userList) {
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].datetime === '1/1/2010') {
            country_list.push(userList[i].country);
        }
    }
    return country_list;
}

console.log(findDate(data));

inputDate = '1/1/2010'

// filter function

funtion findDate2(userList) {
    return userList.datetime === inputDate;
};

var table = data.filter(findDate2);

console.log(table)


