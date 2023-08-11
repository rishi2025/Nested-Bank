// data
const account1 = {
    owner: "Rishi",
    password: "137",
    movements: [5000, 20000, -10000, 762, -861, 42, 9873, -1287],
    interest: 2,
};

const left = document.querySelector('.left');
const headerName = document.querySelector('.headerName');
const loginUsername = document.querySelector('.inpu');
const loginPassword = document.querySelector('.inpp');
const login = document.querySelector('.go');
const currDate = document.querySelector('.currDate');
const amt = document.querySelector('.amt');
const transferTo = document.querySelector('.inputUsername');
const transferAmt = document.querySelector('.inputAmount');
const inputLoan = document.querySelector('.inputLoan');
const requestGo = document.querySelector('.requestGo');
const deleteUsername = document.querySelector('.deleteUsername');
const deletePassword = document.querySelector('.deletePassword');

const update = function (movements) {
    left.innerHTML = '';
    let val = 0;
    let x = 1;
    movements.forEach(function (temp, i) {

        const [neg, type] = (temp < 0) ? ["withdraw", "WITHDRAW"] : ["deposit", "DEPOSIT"];

        const html = `
            <div class = "movement">
                <div class = "${neg}">${x}. ${type}</div>
                <div class = "lastDay"> 3 days ago </div>
                <div class = "movementAmt"> ${temp} $  </div>
            </div>
            `;

        val += temp;
        left.insertAdjacentHTML('afterbegin', html);
        x++;
    });

    amt.textContent = String(val) + " $";
};
update(account1.movements);

console.log(account1.movements);