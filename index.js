// Code your solution here


function findMatching(driver, name) {
    return driver.filter(function(person) {
        return person.toLowerCase() .indexOf(name.toLowerCase()) !==-1
    })
}

findMatching(drivers, "Sammy") 


function findMatching(drivers, name) {
    const singleDriver = drivers.filter(person => person.toLowerCase() === name.toLowerCase())
        return (singleDriver);
    }

findMatching(drivers, "bobby");

function fuzzyMatch(drivers, name) {
    const firstLetter = drivers.filter((person) => person.startsWith(name));
    return firstLetter;
}

function matchName(drivers, string) {
    const match = drivers.filter(driver => driver.name === string)
    return match;
    
}

matchName(drivers, "Bobby");













