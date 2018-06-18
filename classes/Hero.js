"use strict";

function Hero(name, secretIdentity, health, isAlive ) {
    LivingThing.call(this, name, health, isAlive)
    this.secretIdentity = secretIdentity;
}
Hero.prototype = new LivingThing();
Hero.prototype.constructor = Hero;

Hero.prototype.attack = function(monster) {
    console.log("monster", monster);
    console.log("Hero health", this.health);
    let dmgMonster = Math.floor(Math.random() * 6);
    let dmgHero = Math.floor(Math.random() * 5);
    if (monster.health <= 0) {
        monster.isAlive = false;
    } else {
        this.health -= dmgHero;

    }
    if (this.health <= 0) {
        this.isAlive = false;
    } else {
        monster.health -= dmgMonster;

    }
    console.log(this.name + " health " + this.health + " reduced by " + dmgHero + ". " +
    monster.name + " " + monster.health + " reduced by " + dmgMonster + ".")
}

Hero.prototype.fight = function(monsters) {
    for (let monster of monsters) {
        // this.attack(monster);
        while (this.isAlive && monster.isAlive){
            this.attack(monster);
        } 
    }
}
