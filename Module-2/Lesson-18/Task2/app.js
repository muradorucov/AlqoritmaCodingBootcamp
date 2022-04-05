const user = {
    firstName: 'John',
    lastName: 'Smith',
    birthDate: '1960-05-14',
    department: 'management',
    isActive: true
}
user.age = 82;
delete user.birthDate;
console.log(user)