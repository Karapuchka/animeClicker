let countClick = {

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

    achievements: {

        'meg': {

            100: function(width, height){
                return <iframe width={width} height={height} src="https://www.youtube-nocookie.com/embed/x6THwTryQlc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },

            300: function(width, height){
                return <iframe width={width} height={height} src="https://www.youtube-nocookie.com/embed/AsGy6hQ5Ap4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },

            500: function(width, height){
                return <iframe width={width} height={height} src="https://www.youtube.com/embed/cakvds6Wgh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },

            800: function(width, height){
                return <iframe width={width} height={height} src="https://www.youtube.com/embed/XqNsnO3gQ1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },

            1000: function(width, height){
                return <iframe width={width} height={height} src="https://www.youtube.com/embed/jar1LTxxAeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            },
        },

        'kaz': {
            100: '',
            300: '',
            500: '',
            800: '',
            1000: '',
        } , 

        'dark': {
            100: '',
            300: '',
            500: '',
            800: '',
            1000: '',
        },
    },
}

export default countClick;

/* 
    Объект предназначен для удобной работы с Local Storage. 
    
    Метод validHeros отвечает за проверку наличия героев. В качестве аргумента принимет массив с именами героев (array).

    Метод setCount предназначен для записи новых данных. В качестве аргумента принимает имя героя (hero) и количество кликов для записи (count).
*/