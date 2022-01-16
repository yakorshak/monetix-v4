'use strcit'

// Кодируйте любые логические значения следующим образом: замените false на 0, замените true на 1.
// Пустые массивы полностью игнорируются и не включаются в набор строк, используемый для генерации подписи.
// Отсортируйте строки в алфавитном порядке и соедините их в одну строку, используя точку с запятой (;) в качестве разделителя.

const json = {

        "general": {

            "family": {
                'wife': [
                    'Mari', 'Korshak'
                ],
                'empty': [],
                'empty2' :[
                    ['a','b','c'],
                ]
            },

            'someElement': 23,
            '222': [
                2, {'user': 1}, 2
            ],

            "user": {
                'name': 'Andrew',
                'lang': 'En',
                'license': 'yes',
                'country': {
                    'countryName': 'Ukraine',
                    'visited': [1, 2, 3],
                },
            },
        },
        "age": 18,
}

let arrayOfStrings =[];

function isEmpty(array){
    if(array.length == 0){
        return true;
    } else {
        return false;
    }
}

function removeColonIntheBeggining(string){
    let array = string.split('');
    for (let i of array){
        if (array[0] == ":"){
            array.shift();
        } else {
            break;
        }
    }
    string = array.join('');
    return string;
}

function transformationAlgoritm(object, joinedKeys, prev, prevKeys){
    for (let key in object){
        
            if ((Object.prototype.toString.call(object[key]) !== '[object Object]') && !Array.isArray(object[key])){
                if(joinedKeys){
                    let result = joinedKeys + key + ':' + object[key];
                    result = removeColonIntheBeggining(result);
                    arrayOfStrings.push(result);
                    
                } else {
                    let result = key + ':' + object[key];
                    result = removeColonIntheBeggining(result);
                    arrayOfStrings.push(result);
                  
                }
            } else if (!isEmpty(object[key])) {
                joinedKeys += key + ':';
                prevKeys += prev + ':' ;
                transformationAlgoritm(object[key], joinedKeys, key, prevKeys);
                joinedKeys = prevKeys;
            } else {
                let result = prevKeys + key;
                result = removeColonIntheBeggining(result);
                arrayOfStrings.push(result); 
            }
    }
    return arrayOfStrings;
}

let result = transformationAlgoritm(json, '', '', '');

console.log(result);



