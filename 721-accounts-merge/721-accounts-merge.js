/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
const accountsMerge = function(accounts) {
    // initialize userSet and map
    // map key is email, val is user: [name, emailSet]
    const users = new Set(),
          emailUserMap = new Map();
    
    const merge = (user1, user2) => {
        // only merge different users
        if (user1 === user2) return;
        users.delete(user1);
        // update all emails, link to user2
        for (const email of user1[1]) {
            emailUserMap.set(email, user2);
            user2[1].add(email);
        }
    }
    
    for (const account of accounts) {
        const [name, ...emails] = account,
              user = [name, new Set()];
        users.add(user);
        for (const email of emails) {
            if (emailUserMap.has(email)) {
                merge(emailUserMap.get(email), user);
                
            } else {
                emailUserMap.set(email, user);
                user[1].add(email);
            }
        }
    }
    
    const result = [];
    
    for (const user of users) {
        const list = [...user[1]].sort();
        list.unshift(user[0]);
        result.push(list)
    }
    
    return result;
};