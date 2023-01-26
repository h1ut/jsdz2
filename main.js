//number
//string
//bigint 100000000000n
//boolean
//null 0
//undefined
//symbol
//object



//falsy
//0, null, indefinded, NaN, "" =false

// операторы (+, -, *, /, <, >, =, ==, ===, !, !==, ++, --, &&, ||)


// toUpperCase() //LOEREM
//toLowerCase() //lorem
// console.log('LOERM' .toLowerCase());
// console.log('lorem' .toUpperCase());


let text = 'LOREM IPSUM';
//index     01234 5 678910
// console.log(text[10]);
// console.log(text[0]);


let elaman = 'ELAMAN';
// console.log(elaman[elaman.length -1]);



let color ='yellow';

if (color== 'red') {
    // console.log('stop');
} else if (color == 'green') {
    // console.log('go');
} else if (color== 'yellow') {
    // console.log('wait');
}


let i = 0;
// console.log(i);
i++;
i++;
i++;
i++;
i++;
i--;
i--;
i--;
i--;
i--;
// console.log(i++);


//циклы

const array1 =[
    {
        username: 'Anna',
        full_name: 'lourense'
    },
    {
        username: 'kirill',
        full_name: 'lourens'
    },
    {
        username: 'Amir',
        full_name: 'lour'
    },
    {
        username: 'brendan',
        full_name: 'Eich'
    },
    {
        username: 'Bota',
        full_name: 'Eich'
    },
]

// console.log(array1[0] .username, array1[0] .full_name);
// console.log(array1[1] .username, array1[1] .full_name);
// console.log(array1[2] .username, array1[2] .full_name);
// console.log(array1[3] .username, array1[3] .full_name);
// console.log(array1[4] .username, array1[4] .full_name);




for(let i = 0; i <array1.length; i++) {
//     console.log(array1[i]);
//     console.log(array1[4] .username, array1[4] .full_name);
}



// for of

for(let user of array1) {
    // console.log(user);
}


//for in --object
const obj2 = {
    key1: 'key--1',
    key2: 'key--2',
    username: 'johny',
    age: 40,
    followers: 10000
}
// console.log(obj2.key1);
// console.log(obj2.key2);
// console.log(obj2.username);


for(let key in obj2){
    // console.log(key);
    console.log(key + ":" + obj2[key]);
}



const qq ={
    name: 'Maks',
    age: 20,
    gender: 'male',
    job: 'frontend',
}

for(let bb in qq) {
    console.log(bb + ': ' +qq[bb]);
}



const users = [
    {
        username: 'Anna',
        salary: 500,
    },
    {
        username: 'Alex',
        salary: 1000,
    },
    {
        username: 'Bota',
        salary: 10000,
    }
]

// const filteredUsers =[];
// for(let user of users){
//     if(user.salary >500){
//         filteredUsers.push(user)

//     }
// }

// console.log(filteredUsers);

// const filteredUsers = users.filter(user => user.salary >500)
// console.log(filteredUsers);



//map /forEach
// const destructUsers = []
// for( let user of users){
//     // destructUsers.push({
//         name: user.username,
//         salary:user.salary
//     })
// }
// console.log(destructUsers);

const destructUsers = users.map(user => ({
    name: user.username
}))

// console.log(destructUsers);


// foreach

users.forEach(user => {
    // console.log(user);
})




//array.pop() -- удаляет элеметы из конца
//arr.push() -- добавляет элементы в конец
//arr.unshift(2) --  добавляет элементы в начало
//arr.shift() -- удаляет элемент из начала
//arr.slice() -- возвращает новый массив, содержащий копию части исходного массива (обрезание массива)
//arr.splice() -- в себе принимает 3 параметра (start, delete. items)
    


let arr1 = [1, true, false, undefined]
console.log(arr1.slice(0,3));
