"use strict";

function Hero(name, health, isAlive, secretIdentity) {
    LivingThing.call(this, name, health, isAlive)
    this.secretIdentity = secretIdentity;
}
Hero.prototype = new LivingThing();
Hero.prototype.constructor = Hero;