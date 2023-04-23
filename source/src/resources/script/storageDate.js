'use strict';

if(!window.localStorage.getItem('userInfo')){
    
    let userDate = {

        nickname: 'Аниме бой',

        progress: {
            meg: 0,
            kasik: 0,
            darkneska: 0,
        },

        avatar: 'default',
    
    }

    window.localStorage.setItem('userInfo', JSON.stringify(userDate));

}

let userDate = JSON.parse(window.localStorage.getItem('userInfo'));

//Метод для замены свойст объекта
userDate.setProperty = function(property, value){ 

    switch (property) {

        case 'nick' || 'nickname' || 'name':

            this.nickname = value;

            break;

        case 'avarat' || 'ava':

            this.avatar = value;
            
            break;

        case 'meg' || 'progress.meg':

            this.progress.meg = value;

            break;

        case 'kasik' || 'progress.kasik':
            
            this.progress.kasik = value;

            break;

        case 'darkneska' || 'progress.darkneska':
            
            this.progress.darkneska = value;

            break;
    
        default:

            console.error('Такого свойства нет ヾ(≧へ≦)〃')

            break;
    }
    
    window.localStorage.setItem('userInfo', JSON.stringify(userDate));
}

export default userDate;