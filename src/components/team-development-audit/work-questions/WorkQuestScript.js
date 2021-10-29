export default {
    data() {
        return {
            numberQuestion: 30,
            optionChecked: false,
            newQuestionList: [],
            currentQuestion: [
                {
                    "number": 1,
                    "id": "TQ2",
                    "name": "Tokenomics",
                    "type": "Open",
                    "note": "To verify each member exists, please check LinkedIn profile for credentials and vouch against other social media outlets such as Facebook, Instagram , Twitter, etc. If the team member is a developer, do they have a github with some of their work submitted? then use google image search with their profile photo to see if it is a stock photo or it is their actual photo. ( running an official background check would be idea but with de multiple countries involved, there likely isn't a system that would work for everywhere)",
                    "example": "- Eric Helms:  https://www.linkedin.com/in/eric-helms-cpa-97866a3b",
                    "question": "Can you verify that each member of the development team is a real person?",
                    "options": {
                        "1": "Yes",
                        "2": "No"
                    },
                    "selected": false,
                    "answer": null,
                    "textarea": null,
                    "files": [],
                    "images": [],
                    "video": []
                }
            ],
            questionList: [
                {
                    "number": 1,
                    "id": "TQ2",
                    "name": "Tokenomics",
                    "type": "Open",
                    "note": "To verify each member exists, please check LinkedIn profile for credentials and vouch against other social media outlets such as Facebook, Instagram , Twitter, etc. If the team member is a developer, do they have a github with some of their work submitted? then use google image search with their profile photo to see if it is a stock photo or it is hteir actual photo. ( running an official background check would be idea but with de multiple countries involved, there likely isn't a system that would work for everywhere)",
                    "example": "- Eric Helms:  https://www.linkedin.com/in/eric-helms-cpa-97866a3b",
                    "question": "Can you verify that each member of the development team is a real person?",
                    "options": {
                        "1": "Yes",
                        "2": "No"
                    },
                    "answer": null
                }
            ]
        }
    },
    methods: {
        changeAnswer(opt) {
            this.currentQuestion[0].answer = opt;
            console.log(this.currentQuestion[0].answer)
        }
    }
}