let countClick = {

    score: {
        'meg':  Number(window.localStorage.getItem('meg')),
        'kaz':  Number(window.localStorage.getItem('kaz')),
        'dark': Number(window.localStorage.getItem('dark')),
    },

    validHeros: function(array){
        for (let i = 0; i < array.length; i++) {
            
            if(!window.localStorage.getItem(array[i])){
                console.error(`Герой ${array[i]} не был найден. Данные о новом герое записаны`);

                window.localStorage.setItem(array[i], 0);

            }
        }
    },

    setCount: function(hero, value){

        if(!window.localStorage.getItem(hero)){
            console.error('Герой не найден');
        }

        window.localStorage.setItem(hero, value);
    },
}

export default countClick;

/* 
    Объект предназначен для удобной работы с Local Storage. 
    
    Метод validHeros отвечает за проверку наличия героев. В качестве аргумента принимет массив с именами героев (array).

    Метод setCount предназначен для записи новых данных. В качестве аргумента принимает имя героя (hero) и количество кликов для записи (count).
*/