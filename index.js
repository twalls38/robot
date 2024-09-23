//return true or false to see if the skill is true, by using an if statement.
const robot = {
    name:"Computer",
    manufacturer:"City and Stars",
    skillset: {
            skillset1:"Language",
            skillset2:"Navgiation ",
            skillset3:" Memory Banks",
    },
    
    checkRobot() {
        if (this.skillset.skillset1 == "Language") {
            return true
        } else if (this.skillset.skillset2 == "Language") {
            return true
        } else if (this.skillset.skillset3 == "Language"){
            return true
        } else {
            return false
        };
        
    }

};

console.log(robot.checkRobot())