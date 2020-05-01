new Vue({
    el: "#app",
    data: {
        gameStarted: false,
        monsterLife: 100,
        playerLife: 100,
        gameConsole: []
    },
    methods: {
        startGame: function() {
            this.resetGame();
            this.gameStarted = true;
        },
        getRandom: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        attack: function () {
            var damage = this.getRandom(5, 10);
            this.monsterLife -= damage;
            this.registerAttack('player', 'monster', damage)
            this.endRound('player');
        },
        specialAttack: function () {
            var damage = this.getRandom(10, 18);
            this.monsterLife -= damage;
            this.registerAttack('player', 'monster', damage);
            this.endRound('player');
        },
        heal: function () {
            var heal = this.getRandom(9, 15);
            this.playerLife += heal;
            this.registerHeal(heal);
            this.endRound('player');
        },
        monsterAttack: function () {
            var damage = this.getRandom(7, 12);
            this.playerLife -= damage;
            this.registerAttack('monster', 'player', damage);
            this.endRound('monster');
        },
        registerAttack: function (actor, target, damage) {
            var consoleMessage = {
                text: actor + ' hits ' + target + ' for ' + damage,
                style: actor + '-turn'
            };
            this.gameConsole.unshift(consoleMessage);
        },
        registerHeal: function (value) {
            var consoleMessage = {
                text: 'player heals for ' + value,
                style: 'player-turn'
            };
            this.gameConsole.unshift(consoleMessage);
        },
        endRound: function (actor) {
            if (this.playerLife <= 0) {
                this.gameStarted = false;
                if (confirm('You lose! New game?')) {
                    this.resetGame();
                }
            }
            else if (this.monsterLife <= 0) {
                this.gameStarted = false;
                if (confirm('You win! New game?')) {
                    this.resetGame();
                }
            }
            else if (actor == 'player') {
                this.monsterAttack();
            }
        },
        resetGame: function () {
            this.gameStarted = false;
            this.monsterLife = 100;
            this.playerLife = 100;
            this.gameConsole = [];
        }
    }
});