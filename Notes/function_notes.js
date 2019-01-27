1) initialize empty array to house potential names
2) run through dogStats object and see what values match
3) add matches to array
4) select a name from array at random



function chooseName() {
//1
    potentialNames = [];
//2
    for (let i=0; i<dogNameList.length; i++) {
        if (dogStats.gender == dogNameList[i].gender &&
            dogStats.group == dogNameList[i].group &&
            dogStats.activity == dogNameList[i].activity &&
            dogStats.description == dogNameList[i].description) {
            potentialNames.push(dogNameList[i].name)
        }
    };
//4
    let randomName = Math.floor(Math.random() * potentialNames.length);
	dogName = potentialNames[randomName];
	return dogName;
    };
};

//this might work for choose name 
function chooseName() {
    for (let i=0; i<dogNameList.length; i++) {
        if (Object.values(dogStats) !== Object.values(dogNameList)) {
            dogNameList.splice(dogNameList[i]);
        }
    }
    let randomName = Math.floor(Math.random() * dogNameList.length);
 	dogName = dogNameList[randomName];
	return dogName;
}

function trackPtentialNames(key) {
    for (let i=0; i<dogNameList.length; i++) {
        if (dogStats.key === dogNameList[i].key)
    }
}
