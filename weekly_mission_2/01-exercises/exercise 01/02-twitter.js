/* 
// Modela los siguientes diagramas en objetos de JS -- CASO TWITTER: --:
*/

// USER SOLUTION:
const user = {
    user: "Juan",
    userName: " juan_rdgzv",
    bio: "Hola Mi nombre es Juan y soy de Guadalajara, MX ",
    age: "26",
    lastTweet: " 'La Vida es Bella' ",
    getGeneralInfo: function(){
        return `This tweet ${this.lastTweet} was created by ${this.userName}`
      }
}
console.log(user.getGeneralInfo())



// TRENDING TOPIC SOLUTION: 
const trending_topic = {
    user: "Juan",
    userName: " juan_rdgzv",
    bio: "Hola Mi nombre es Juan y soy de Guadalajara, MX ",
    age: "26",
    lastTweet: " 'La Vida es Bella' ",
    trending_topic: "#87",
    getGeneralInfo: function(){
        return `This tweet ${this.lastTweet} is on tending topic number:  ${this.trending_topic}`
    }
}
console.log(trending_topic.getGeneralInfo())

// HASHTAG SOLUTION: 
const hashtag = {
    user: "Juan",
    userName: " juan_rdgzv",
    bio: "Hola Mi nombre es Juan y soy de Guadalajara, MX ",
    age: "26",
    lastTweet: " 'La Vida es Bella' ",
    trending_topic: "#87",
    hashtag: "#Vida, #Color, #Feliz",
    getGeneralInfo: function(){
        return `New tweet ${this.lastTweet} hashtag ${this.hashtag}`
    }
}
console.log(hashtag.getGeneralInfo())