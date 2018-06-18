"use strict";
function Monster(name, classification, health, isAlive,) {
    LivingThing.call(this, name, health, isAlive)
    this.classification = classification;
}
Monster.prototype = new LivingThing();
Monster.prototype.constructor = Monster;
