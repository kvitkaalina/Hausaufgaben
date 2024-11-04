// 1.Создайте функцию waitForTime, которая возвращает Promise. Этот промис должен резолвиться через указанное количество миллисекунд, которое нужно передавать в функцию waitForTime в качестве аргумента. Если время вышло, промис резолвится с сообщением "Ожидание завершено".


// Например через секунды, 3 или 5 секунд.
 

  function waitForTime(time) {
    return new Promise((res) => {
        setTimeout(() => {
            res('Ожидание завершено');
        }, time);
    });
}

waitForTime(3000)
    .then(res => console.log(res));


    function waitForTime1(time) {
        return Promise.resolve(
            setTimeout(() => console.log('Ожидание завершено2'), time)
        )
    }
      
    
    waitForTime1(5000)
