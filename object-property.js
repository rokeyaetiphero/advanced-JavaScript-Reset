const students = [
    {id:23, name: "Omar Sunnyyyyyyy"},
    {id:23, name: "Omar murikathallll"},
    {id:23, name: "Omar Farukkkkkk"},
    {id:23, name: "Omar Manna"},
]

const array = [];
for (let i = 0; i < students.length; i++){
    const name = students[i].name;
    array.push(name);
}
console.log(array);

// const result = students.map(student => student.name);
const result2 = students.filter(student => student.name>(student.name.length>10));
console.log(result2);