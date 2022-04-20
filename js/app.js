import "../sass/main.scss";

const boardDives = document.querySelectorAll("#board div");
const currentScoreSpan = document.querySelector("#score");
const finalScoreSpan = document.querySelector("#final-score");

//Klasa pionka z pozycja poczatkowa
class Furry{
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = "right";
    };

};


//Klasa monety z randomowa pozycja
class Coin{
    constructor() {
        this.x = Math.floor(Math.random() * 10);;
        this.y = Math.floor(Math.random() * 10);;
    };
};


//Klasa gry
class Game{
    constructor() {
        this.board = boardDives;
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
    };


    //Metoda ustawiajaca pozycje pionka i monety
    index(x,y) {
        return x + (y * 10);
    };


    //Nadanie klasy odpowiedniemu divowi aby pokazal pionek
    showFurry() {
        this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
    };

    //Usuwanie poprzedniej klasy .furry aby zniknal poprzedni pionek(wywolane w movefurry)
    hideVisibleFurry() {
        if(document.querySelector(".furry")){
            document.querySelector(".furry").classList.remove("furry");
        }
    };

    //Nadanie klasy odpowiedniemu divowi aby pokazal monete
    showCoin() {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
    }


    //Wywolanie funkcji movefurry co 1/4 sekundy
    startGame() {
        const self = this;
        this.idSetInterval = setInterval(() => self.moveFurry(), 250)
    }


    //Funkcja zmieniajaca pozycje pionka
    moveFurry() {
        if(this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if(this.furry.direction === "left") {
            this.furry.x = this.furry.x -1;
        } else if(this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else if(this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }

        //Sprawdzenie czy pozycja pionka nie nachodzi na ramki jesli tak to przerwanie gry
        this.checkWallCollision();
        //usuniecie poprzedniego pionka
        this.hideVisibleFurry();
        //Ponowne nadanie diviowi klasy aby wyswietlil pionek(linijka 69 zmienia pozycje)
        if(this.checkWallCollision()){
            this.showFurry();
        };
        //Sprawdzenie czy pozycja pionka === pozycja monety, jesli tak to reset monety i +1 punkt
        this.checkCoinCollision();
    };


    //Metoda zmieniajaca kierunek pionka w zaleznosci od przycisku kliknietego, wywolana na dole kodu
    changeDirection(event) {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
        }
    };

    //wywolana w moveFurry sprawdzenie czy zlapalismy monete
    checkCoinCollision(){
        if([...this.board].filter(e => e.classList.length >= 2).length > 0){
            document.querySelector(".coin").classList.remove("coin");
            currentScoreSpan.textContent = (Number(currentScoreSpan.textContent) + 1).toString();
            this.coin = new Coin();
            this.showCoin();
        };
    }

    //Wywolana w moveFurry - sprawdzenie czy dotknelismy sciany
    checkWallCollision(){
        if(this.furry.y > 9 || this.furry.y < 0 || this.furry.x > 9 || this.furry.x < 0){
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            finalScoreSpan.textContent = currentScoreSpan.textContent;
            document.querySelector(".game-over").classList.remove("hide");
            return false;
        };
        return true;
    }


};


const testGame = new Game();
testGame.showFurry();
testGame.showCoin();
testGame.startGame()

document.addEventListener('keydown', function(event){
    testGame.changeDirection(event);
});
