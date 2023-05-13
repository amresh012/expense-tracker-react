import React from 'react'

export const Transaction = () => {
    return (
        <>
            <h3>History</h3>
            <ul id="list" class="list">
                <li className="minus">
                    Cash <span>-$250</span><button class="delete-btn">x</button>
                </li>
            </ul>
            <ul id="list" class="list">
                <li className="minus">
                    Cash <span>-$300</span><button class="delete-btn">x</button>
                </li>
            </ul>
            <ul id="list" class="list">
                <li className="minus">
                    Cash <span>-$100</span><button class="delete-btn">x</button>
                </li>
            </ul>
        </>
    );
}