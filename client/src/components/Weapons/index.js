import React from "react";

function Weapons() {
    return (
        <div class="weapons-container">
            <div class="tr">
                <span class="td">Melee:</span>
                <span class="td" id="stat-melee-weapon-name"></span>
                <span class="td" id="stat-melee-weapon-stats"></span>
            </div>
            <div class="tr">
                <span class="td">Ranged:</span>
                <span class="td" id="stat-ranged-weapon-name"></span>
                <span class="td" id="stat-ranged-weapon-stats"></span>
            </div>
        </div>
    );
}

export default Weapons;