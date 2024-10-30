let grade =  prompt('Введите количество балов')

if(grade >= 90 ) {
    console.log('A');   
} else if(grade >= 80 ){ 
    console.log('B');
} else if(grade >= 70){
    console.log('C');
} else if(grade >= 60){
    console.log('D');
} else {
    console.log('F'); 
}

console.log('probel');

let dayOFWeek = 1

switch (dayOFWeek) {
    case 1:
        console.log('Понедельник');
        break
        case 2:
        console.log('Вторник');
        break
        case 3:
        console.log('Среда');
        break
        case 4:
        console.log('Четверг');
        break
        case 5:
        console.log('Пятница');
        break
        case 6:
        console.log('Суббота');
        break
        case 7:
        console.log('Воскресение');
        break
        default:
            console.log('Неверное значение');
}









