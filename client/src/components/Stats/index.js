import React from "react";

function Stats() {
    return (
        <div class="stats-container">
            <div class="tr">
                <span class="td">HP:</span>
                <span class="td"><span id="stat-hp"></span>/<span id="stat-hp-max"></span></span>
            </div>
        </div>
    );
}

export default Stats;