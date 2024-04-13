//List of Current Users 
let current_users = ["Fatima", "Eric", "Iqbal", "Fawad", "shahid"]
//List of New Users
let new_users = ["Fatima", "Shahid", "Ghulam Mustafa", "Mumtaz", "Sajid"];

new_users.forEach(user => {
    let our_condition = current_users.some(current_one=> current_one.toLowerCase() === user.toLowerCase()) 
    if (our_condition) {
        console.log(`Sorry ${user} is already taken`);

    }else{
        console.log(`This Username ${user} is available`);
    }
})


