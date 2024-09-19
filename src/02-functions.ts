import { colleagues, friends } from './01-basics'
import {Friend, Colleague } from './myTypes'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(arr_friends:Friend[]) {
    let arr: string[] = [] 
    for(var i = 0;i<arr_friends.length;i++) { 
       arr.push((older(friends[i])))
    }
    return arr;
}

function addColleague(arr: Colleague[],nm: string, dp: string, em: string) {
    const colleague = {
        name: nm,
        department: dp,
        contact: {
            email: em,
            extension: highestExtension(colleagues.current).contact.extension + 1,
      },
    };
    arr.push(colleague)
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
console.log(highestExtension(colleagues.current));
console.log(allOlder(friends));
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));