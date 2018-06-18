"use strict";
function Monster(name, health, isAlive, classification) {
    LivingThing.call(this, name, health, isAlive)
    this.classification = classification;
}
Monster.prototype = new LivingThing();
Monster.prototype.constructor = Monster;
