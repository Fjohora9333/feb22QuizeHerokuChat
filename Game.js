//Fatima Johora, Section:1

const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    START:  Symbol("start"),
    INPROGRESS: Symbol("inprogress"),
    LAST: Symbol("last")
});
const SectionState = Object.freeze({
    CANADA: Symbol("canada"),
    FUN: Symbol("fun")
});
const QuestionState = Object.freeze({
    FIRSTCANADA: Symbol("first"),
    SECONDCANADA: Symbol("second"),
    THIRDCANADA: Symbol("third"),
    FOURTHCANADA: Symbol("fourth"),
    FIFTHCANADA: Symbol("fifth"),
    ENDCANADA: Symbol("fifth"),
    FIRSTFUN: Symbol("sixth"),
    SECONDFUN: Symbol("seventh"),
    THIRDFUN: Symbol("eighth"),
    FOURTHFUN: Symbol("ninth"),
    FIFTHFUN: Symbol("tenth")
});

export default class Game{
    constructor(){
        this.bDone=false;
        this.stateCur = GameState.WELCOMING;
        this.sectionStateCur=null;
        this.questionStateCur=null;
        this.nCorrectCount=0;
        this.nSectionCount=0;
    }
    
    makeAMove(sInput)
    {
        let sReply="";
        let sCorrectReply="Well done! your answer is correct. ";
        let sIncorrectReply="The answer is not right.";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "It is a quiz Game.There are two sections: 'Canada' and 'Fun questions' each with 5 questions. Each correct answer will give you 1 point. Try to get 10 marks! Write start if you like to start the game.";
                this.stateCur = GameState.START;
                break;
            case GameState.START:
                if(sInput.toLowerCase().match("start")){
                    sReply = "Welcome to the game. Choose a section you want to play first, 'Canada' or 'Fun questions'!";
                    this.stateCur=GameState.INPROGRESS;
                }else{
                    sReply ="Don't miss the fun!! You can still start the game!";
                }
                break;
            case GameState.INPROGRESS:
                if(sInput.toLowerCase().match("Canada")||           sInput.toLowerCase().match("canada")){
                    this.sectionStateCur=SectionState.CANADA;
                    this.questionStateCur=QuestionState.FIRSTCANADA;
                }else if (sInput.toLowerCase().match("fun questions")||           sInput.toLowerCase().match("fun")||sInput.toLowerCase().match("Fun")){
                    this.sectionStateCur=SectionState.FUN;
                    this.questionStateCur=QuestionState.FIRSTFUN;
                }else{
                    sReply="You have to type 'Canada' or 'Fun'";
                }
                switch(this.sectionStateCur){
                    case SectionState.CANADA:
                        switch(this.questionStateCur){
                            case QuestionState.FIRSTCANADA:
                                 sReply="First Question in Canada section is: How Many Planets in the solar system?"
                                 this.questionStateCur=QuestionState.SECONDCANADA;
                                 break;
                            case QuestionState.SECONDCANADA:
                                if(sInput.toLowerCase().match("eight") ||                   sInput.toLowerCase().match("8")){
                                    this.nCorrectCount++;
                                    sReply = sCorrectReply;
                                }else{
                                    sReply = sIncorrectReply;
                                }
                                sReply+="Next Question is : How many great lakes in Canada?"
                                this.questionStateCur=QuestionState.THIRDCANADA;
                                break;
                            case QuestionState.THIRDCANADA:
                                if(sInput.toLowerCase().match("five") ||                   sInput.toLowerCase().match("5")){
                                    this.nCorrectCount++;
                                    sReply = sCorrectReply;
                                }else{
                                    sReply = sIncorrectReply;
                                }
                                sReply+="Next Question is : What are the color of the flag of Canada?"
                                this.questionStateCur=QuestionState.FOURTHCANADA;
                                break;
                            case QuestionState.FOURTHCANADA:
                                if(sInput.toLowerCase().match("red and white")){
                                    this.nCorrectCount++;
                                    sReply = sCorrectReply;
                                }else{
                                    sReply = sIncorrectReply;
                                }
                                sReply+="Next Question is : What is the national animal of Canada?"
                                this.questionStateCur=QuestionState.FIFTHCANADA;
                                break;
                            case QuestionState.FIFTHCANADA:
                                if(sInput.toLowerCase().match("	North American beaver")||sInput.toLowerCase().match(" beaver")){
                                    this.nCorrectCount++;
                                    sReply = sCorrectReply;
                                }else{
                                    sReply = sIncorrectReply;
                                }
                                sReply+="Next Question is :  Who is the prime minister of Canada?"
                                this.questionStateCur=QuestionState.ENDCANADA;
                                break;
                            case QuestionState.ENDCANADA:
                                if(sInput.toLowerCase().match("	Justin Trudeau")||      sInput.toLowerCase().match(" Trudeau")||                sInput.toLowerCase().match(" Justin")){
                                    this.nCorrectCount++;
                                    sReply = sCorrectReply;
                                }else{
                                    sReply = sIncorrectReply;
                                }
                                this.nSectionCount++;
                                if(this.nSectionCount==2){
                                    sReply+="End of section Canada. Press any key to see the result";
                                    this.stateCur=GameState.LAST;
                                }else{
                                    sReply+="End of section Canada. Press any key to start the next section";
                                    this.sectionStateCur=SectionState.FUN;
                                    this.questionStateCur=QuestionState.FIRSTFUN;
                                }
                               break; 
                        }
                    break;
                    case SectionState.FUN:
                        switch(this.questionStateCur){
                            case QuestionState.FIRSTFUN:
                                sReply="First Question in Fun section is: What is always coming, but never arrives?"
                                this.questionStateCur=QuestionState.SECONDFUN;
                                break;
                            case QuestionState.SECONDFUN:
                                if(sInput.toLowerCase().match("tomorrow") ||                   sInput.toLowerCase().match("Tomorrow")){
                                    this.nCorrectCount++;
                                    sReply = sCorrectReply;
                                }else{
                                    sReply = sIncorrectReply;
                                }
                                sReply+="Next Question is : What is it that lives if it is fed, and dies if you give it a drink?"
                                this.questionStateCur=QuestionState.THIRDFUN;
                                break;
                            case QuestionState.THIRDFUN:
                                if(sInput.toLowerCase().match("fire") ||                   sInput.toLowerCase().match("Fire")){
                                    this.nCorrectCount++;
                                    sReply = sCorrectReply;
                                }else{
                                    sReply = sIncorrectReply;
                                }
                                sReply+="Next Question is : What can one catch that is not thrown?"
                                this.questionStateCur=QuestionState.FOURTHFUN;
                                break;
                            case QuestionState.FOURTHFUN:
                                if(sInput.toLowerCase().match("a cold")){
                                    this.nCorrectCount++;
                                    sReply = sCorrectReply;
                                }else{
                                    sReply = sIncorrectReply;
                                }
                                sReply+="Next Question is : What is it that if you have, you want to share me, and if you share, you do not have?"
                                this.questionStateCur=QuestionState.FIFTHFUN;
                                break;
                            case QuestionState.FIFTHFUN:
                                if(sInput.toLowerCase().match("A secret")||sInput.toLowerCase().match(" secret")){
                                    this.nCorrectCount++;
                                    sReply = sCorrectReply;
                                }else{
                                    sReply = sIncorrectReply;
                                }
                                sReply+="Next Question is :  Uncle Bill’s farm had a terrible storm and all but seven sheep were killed. How many sheep are still alive?"
                                this.questionStateCur=QuestionState.ENDFUN;
                                break;
                            case QuestionState.ENDFUN:
                                if(sInput.toLowerCase().match("seven")){
                                    this.nCorrectCount++;
                                    sReply = sCorrectReply;
                                }else{
                                    sReply = sIncorrectReply;
                                }
                                this.nSectionCount++;
                                if(this.nSectionCount==2){
                                    sReply+="End of section Fun. Press any key to see the result";
                                    this.stateCur=GameState.LAST;
                                }else{
                                    sReply+="End of section Fun. Press any key to start the next section";
                                    this.sectionStateCur=SectionState.CANADA;
                                    this.questionStateCur=QuestionState.FIRSTCANADA;
                                }
                                break; 
                    }
                    break; 
                }
                break;
            case GameState.LAST:
                sReply+="Thank you for playing the game. I hope you had fun. Your total mark is "+this.nCorrectCount +" Press any key if you want to play again.";
                this.bDone=true;
                this.stateCur=GameState.WELCOMING;
        }
        return([sReply]);
    }
    done(){
        return this.bDone;
    }
}